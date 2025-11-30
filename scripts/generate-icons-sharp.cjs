const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'new-logo.jpg');
const sizes = [192, 512, 64, 32];

(async function generate(){
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(2);
  }
  for (const size of sizes) {
    const out = path.join(__dirname, '..', 'public', `new-logo-${size}.png`);
    try {
      await sharp(input).resize(size, size, { fit: 'cover', position: 'centre' }).png().toFile(out);
      console.log('Written', out);
    } catch (err) {
      console.error('Failed for size', size, err);
    }
  }
  console.log('Done');
})();
