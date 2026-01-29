import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('_temp'));

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalWebP = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const webpPath = path.join(IMAGES_DIR, `${baseName}.webp`);

    // Skip if WebP already exists
    if (fs.existsSync(webpPath)) {
      const webpSize = fs.statSync(webpPath).size;
      console.log(`Skipping ${file} - WebP already exists (${(webpSize / 1024).toFixed(0)} KB)`);
      totalWebP += webpSize;
      totalOriginal += fs.statSync(inputPath).size;
      continue;
    }

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    console.log(`Processing: ${file} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Resize if too large
      const needsResize = metadata.width > MAX_WIDTH;
      const resizeOptions = needsResize ? { width: MAX_WIDTH, withoutEnlargement: true } : {};

      // Create WebP version
      await sharp(inputPath)
        .resize(resizeOptions)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      totalWebP += webpSize;

      const saved = ((1 - webpSize / originalSize) * 100).toFixed(0);
      console.log(`  → WebP: ${(webpSize / 1024).toFixed(0)} KB (saved ${saved}%)\n`);

    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
    }
  }

  console.log('='.repeat(50));
  console.log(`Total original:  ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP:      ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved:     ${((1 - totalWebP / totalOriginal) * 100).toFixed(0)}%`);
}

optimizeImages().catch(console.error);
