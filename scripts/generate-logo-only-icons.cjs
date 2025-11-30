const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const input = path.join(__dirname, '..', 'public', 'new-logo.jpg');
const outDir = path.join(__dirname, '..', 'public');
const sizes = [512, 192, 64, 32];
const bgColor = '#0b1220'; // dark background, adjust if you prefer a different tone

async function main(){
  if (!fs.existsSync(input)){
    console.error('Input logo not found:', input);
    process.exit(2);
  }

  const meta = await sharp(input).metadata();
  const minSide = Math.min(meta.width, meta.height);
  // crop central square at 70% of the min side to avoid bottom tagline area
  const cropFactor = 0.7;
  const cropSize = Math.floor(minSide * cropFactor);
  const left = Math.floor((meta.width - cropSize)/2);
  const top = Math.floor((meta.height - cropSize)/2);

  // Extract center region
  const extracted = await sharp(input).extract({ left, top, width: cropSize, height: cropSize }).toBuffer();

  const generatedPNGs = [];

  for (const size of sizes){
    const logoSize = Math.floor(size * 0.76); // logo occupies ~76% of final icon (padding)
    const bg = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: bgColor
      }
    }).png();

    const resizedLogo = await sharp(extracted).resize(logoSize, logoSize, { fit: 'contain' }).png().toBuffer();

    const composed = await bg.composite([{ input: resizedLogo, gravity: 'centre' }]).toFile(path.join(outDir, `logo-only-${size}.png`));
    console.log('Wrote', `logo-only-${size}.png`);
    generatedPNGs.push(path.join(outDir, `logo-only-${size}.png`));
  }

  // generate favicon.ico from 64 and 32 sizes (ensure they exist)
  try{
    const icoPath = path.join(outDir, 'favicon.ico');
    const pngFiles = [path.join(outDir, 'logo-only-64.png'), path.join(outDir, 'logo-only-32.png')];
    // png-to-ico expects Buffers or file paths, return ICO buffer
    const icoBuf = await pngToIco(pngFiles);
    fs.writeFileSync(icoPath, icoBuf);
    console.log('Wrote', 'favicon.ico');
  } catch (err){
    console.error('Failed to write favicon.ico:', err);
  }

  console.log('Done generating logo-only icons.');
}

main().catch(err=>{ console.error(err); process.exit(1); });
