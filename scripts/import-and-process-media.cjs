const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { spawnSync } = require('child_process');
let ffmpegPath;
try { ffmpegPath = require('ffmpeg-static'); } catch (e) { ffmpegPath = null; }
const pngToIco = require('png-to-ico');
let toIcoPkg = null;
try { toIcoPkg = require('to-ico'); } catch (e) { /* optional */ }

const PUBLIC = path.join(__dirname, '..', 'public');
const OG_DIR = path.join(PUBLIC, 'og');
if (!fs.existsSync(PUBLIC)) fs.mkdirSync(PUBLIC, { recursive: true });
if (!fs.existsSync(OG_DIR)) fs.mkdirSync(OG_DIR, { recursive: true });

const sources = {
  logoIcon: 'C:\\Users\\user\\Pictures\\logo-icon.png',
  logoFull: 'C:\\Users\\user\\Pictures\\logo-full.png',
  heroPoster: 'C:\\Users\\user\\Pictures\\hero-poster.png',
  heroVideo: 'C:\\Users\\user\\Pictures\\hero-video.mp4',
};

function copyIfExists(src, dest) {
  if (!fs.existsSync(src)) {
    console.log('MISSING:', src);
    return false;
  }
  fs.copyFileSync(src, dest);
  const stat = fs.statSync(dest);
  console.log('Copied', src, '->', dest, `${(stat.size/1024).toFixed(1)} KB`);
  return true;
}

async function generateLogoIcons(srcPath) {
  if (!fs.existsSync(srcPath)) {
    console.log('Logo source missing:', srcPath);
    return;
  }
  // Produce straight resized variants of the original logo icon (no cropping/compositing)
  const sizes = [512, 192, 144, 64, 32];
  const pngPaths = [];
  for (const s of sizes) {
    const outPath = path.join(PUBLIC, `logo-icon-${s}.png`);
    await sharp(srcPath)
      .resize(s, s, { fit: 'contain' })
      .png({ quality: 90 })
      .toFile(outPath);
    console.log('Wrote', outPath);
    pngPaths.push(outPath);
  }

  // Create apple-touch-icon (180x180) from the 192 source
  try {
    await sharp(path.join(PUBLIC, 'logo-icon-192.png')).resize(180, 180).png().toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
    console.log('Wrote apple-touch-icon.png');
  } catch (e) {
    console.warn('apple-touch creation failed:', e && e.message);
  }

  // favicon.ico (multi-size) using png-to-ico over the generated logo-icon files
  try {
    // Read PNG buffers and try to use `to-ico` (better API), fall back to png-to-ico
    const p32 = path.join(PUBLIC, 'logo-icon-32.png');
    const p144 = path.join(PUBLIC, 'logo-icon-144.png');
    const p192 = path.join(PUBLIC, 'logo-icon-192.png');
    const buffers = [fs.readFileSync(p32), fs.readFileSync(p144), fs.readFileSync(p192)];
    let icoBuf = null;
    if (toIcoPkg) {
      icoBuf = await toIcoPkg(buffers);
    } else {
      const maker = pngToIco.imagesToIco || pngToIco.default || pngToIco;
      icoBuf = await maker(buffers);
    }
    if (icoBuf && icoBuf.length) {
      fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), icoBuf);
      console.log('Wrote favicon.ico');
    } else {
      throw new Error('ico buffer invalid');
    }
  } catch (e) {
    console.warn('favicon generation failed:', e && (e.message || e));
    // fallback: copy a 32px PNG as favicon.png
    try {
      const small = path.join(PUBLIC, 'logo-icon-32.png');
      const favpng = path.join(PUBLIC, 'favicon.png');
      if (fs.existsSync(small)) {
        fs.copyFileSync(small, favpng);
        console.log('Wrote fallback', favpng);
      }
    } catch (e2) {
      console.warn('fallback favicon write failed', e2 && e2.message);
    }
  }
}

async function generateOgImages(logoFullPath) {
  if (!fs.existsSync(logoFullPath)) {
    console.log('logo-full missing:', logoFullPath);
    return;
  }
  const sizes = [ {w:1200,h:630}, {w:1800,h:945} ];
  for (const s of sizes) {
    const out = path.join(OG_DIR, `logo-full-${s.w}x${s.h}.png`);
    await sharp(logoFullPath)
      .resize(s.w, s.h, { fit: 'cover' })
      .png({ quality: 88 })
      .toFile(out);
    console.log('Wrote', out);
  }
}

async function generatePosters(posterPath) {
  if (!fs.existsSync(posterPath)) {
    console.log('hero-poster missing:', posterPath);
    return;
  }
  // desktop poster 1920x1080
  await sharp(posterPath).resize(1920, 1080, { fit: 'cover' }).jpeg({quality:85}).toFile(path.join(PUBLIC, 'hero-poster-desktop.jpg'));
  console.log('Wrote hero-poster-desktop.jpg');
  // mobile poster 900x1600
  await sharp(posterPath).resize(900, 1600, { fit: 'cover' }).jpeg({quality:82}).toFile(path.join(PUBLIC, 'hero-poster-mobile.jpg'));
  console.log('Wrote hero-poster-mobile.jpg');
}

function transcodeVideoToWebM(srcVideoPath) {
  if (!fs.existsSync(srcVideoPath)) {
    console.log('hero-video missing:', srcVideoPath);
    return;
  }
  // try ffmpeg-static first, otherwise attempt to find ffmpeg on PATH
  if (!ffmpegPath) {
    const where = spawnSync('where', ['ffmpeg'], { encoding: 'utf8' });
    if (where && where.stdout) {
      ffmpegPath = where.stdout.split(/\r?\n/)[0];
      console.log('Found ffmpeg on PATH:', ffmpegPath);
    }
  }
  if (!ffmpegPath) {
    console.log('ffmpeg not found (ffmpeg-static not installed and no ffmpeg in PATH). Skipping transcode.');
    return;
  }
  const outWebm = path.join(PUBLIC, 'hero-video.webm');
  console.log('Transcoding to', outWebm);
  const args = [
    '-y',
    '-i', srcVideoPath,
    '-an',
    '-c:v', 'libvpx-vp9',
    '-b:v', '0',
    '-crf', '32',
    '-vf', 'scale=iw:-2',
    outWebm
  ];
  const r = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (r.error) {
    console.error('ffmpeg error:', r.error.message);
  } else {
    console.log('Transcode finished');
  }
}

async function main() {
  console.log('Starting import-and-process-media');

  // Copy raw sources into public if they exist
  copyIfExists(sources.logoIcon, path.join(PUBLIC, 'logo-icon.png'));
  copyIfExists(sources.logoFull, path.join(PUBLIC, 'logo-full.png'));
  copyIfExists(sources.heroPoster, path.join(PUBLIC, 'hero-poster.png'));
  copyIfExists(sources.heroVideo, path.join(PUBLIC, 'hero-video.mp4'));

  // Generate assets from copied files (prefer copied versions)
  const publicLogoIcon = path.join(PUBLIC, 'logo-icon.png');
  const publicLogoFull = path.join(PUBLIC, 'logo-full.png');
  const publicHeroPoster = path.join(PUBLIC, 'hero-poster.png');
  const publicHeroVideo = path.join(PUBLIC, 'hero-video.mp4');

  await generateLogoIcons(publicLogoIcon).catch(e=>console.error(e));
  await generateOgImages(publicLogoFull).catch(e=>console.error(e));
  await generatePosters(publicHeroPoster).catch(e=>console.error(e));
  transcodeVideoToWebM(publicHeroVideo);

  console.log('Done generating assets. Update `src/lib/assets.ts`, `index.html`, and `public/manifest.json` as needed.');
}

main();
