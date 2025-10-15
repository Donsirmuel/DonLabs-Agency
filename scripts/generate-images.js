import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const sizes = [640, 1024, 1920];

async function processFile(file) {
  const ext = path.extname(file);
  const base = file.replace(ext, '');

  for (const size of sizes) {
    const out = `${base}-${size}${ext}`;
    await sharp(path.join(publicDir, file)).resize(size).toFile(path.join(publicDir, out));
    console.log('wrote', out);
  }
}

async function main() {
  const arg = process.argv[2];
  let files = [];

  if (arg) {
    // process a single file passed as argument
    const base = path.basename(arg);
    files = fs.existsSync(path.join(publicDir, base)) ? [base] : [];
    if (!files.length) {
      console.error('file not found in public/:', base);
      process.exit(1);
    }
  } else {
    // process screenshots and hero images
    files = fs.readdirSync(publicDir).filter(f => /(screenshot|hero)(?:-.*)?\.(png|jpg|jpeg)$/i.test(f));
  }

  for (const f of files) {
    try {
      await processFile(f);
    } catch (e) {
      console.error('failed', f, e);
    }
  }
}

main();
