// Script to generate American Flag icons in all required sizes
const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

const iconSizes = [72, 96, 128, 144, 152, 180, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// American Flag SVG - simplified but recognizable
const americanFlagSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Background with rounded corners -->
  <rect width="512" height="512" fill="#ffffff" rx="80"/>
  
  <!-- Flag area with padding -->
  <g transform="translate(64, 64)">
    <!-- Red and white stripes (13 total: 7 red, 6 white) -->
    <rect x="0" y="0" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="29.54" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="59.08" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="88.62" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="118.16" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="147.7" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="177.24" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="206.78" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="236.32" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="265.86" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="295.4" width="384" height="29.54" fill="#bf0a30"/>
    <rect x="0" y="324.94" width="384" height="29.54" fill="#ffffff"/>
    <rect x="0" y="354.46" width="384" height="29.54" fill="#bf0a30"/>
    
    <!-- Blue canton -->
    <rect x="0" y="0" width="153.6" height="206.78" fill="#002868"/>
    
    <!-- Stars as small circles (simplified pattern: 5 rows of 6 stars, alternating) -->
    <g fill="#ffffff">
      <!-- Row 1: 6 stars -->
      <circle cx="12.8" cy="23" r="7.7"/>
      <circle cx="28.27" cy="23" r="7.7"/>
      <circle cx="43.73" cy="23" r="7.7"/>
      <circle cx="59.2" cy="23" r="7.7"/>
      <circle cx="74.67" cy="23" r="7.7"/>
      <circle cx="90.13" cy="23" r="7.7"/>
      
      <!-- Row 2: 5 stars (offset) -->
      <circle cx="20.53" cy="49.85" r="7.7"/>
      <circle cx="36" cy="49.85" r="7.7"/>
      <circle cx="51.47" cy="49.85" r="7.7"/>
      <circle cx="66.93" cy="49.85" r="7.7"/>
      <circle cx="82.4" cy="49.85" r="7.7"/>
      
      <!-- Row 3: 6 stars -->
      <circle cx="12.8" cy="76.69" r="7.7"/>
      <circle cx="28.27" cy="76.69" r="7.7"/>
      <circle cx="43.73" cy="76.69" r="7.7"/>
      <circle cx="59.2" cy="76.69" r="7.7"/>
      <circle cx="74.67" cy="76.69" r="7.7"/>
      <circle cx="90.13" cy="76.69" r="7.7"/>
      
      <!-- Row 4: 5 stars (offset) -->
      <circle cx="20.53" cy="103.54" r="7.7"/>
      <circle cx="36" cy="103.54" r="7.7"/>
      <circle cx="51.47" cy="103.54" r="7.7"/>
      <circle cx="66.93" cy="103.54" r="7.7"/>
      <circle cx="82.4" cy="103.54" r="7.7"/>
      
      <!-- Row 5: 6 stars -->
      <circle cx="12.8" cy="130.38" r="7.7"/>
      <circle cx="28.27" cy="130.38" r="7.7"/>
      <circle cx="43.73" cy="130.38" r="7.7"/>
      <circle cx="59.2" cy="130.38" r="7.7"/>
      <circle cx="74.67" cy="130.38" r="7.7"/>
      <circle cx="90.13" cy="130.38" r="7.7"/>
    </g>
  </g>
</svg>
`;

async function generateIcons() {
  console.log('Generating American Flag icons...\n');
  
  for (const size of iconSizes) {
    try {
      const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
      
      await sharp(Buffer.from(americanFlagSVG))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`✗ Error generating ${size}x${size}:`, error.message);
    }
  }
  
  // Also generate favicon (32x32) and favicon.ico
  try {
    const faviconPath = path.join(__dirname, '../public/favicon.ico');
    const faviconPngPath = path.join(iconsDir, 'favicon-32x32.png');
    
    // Generate PNG first
    await sharp(Buffer.from(americanFlagSVG))
      .resize(32, 32)
      .png()
      .toFile(faviconPngPath);
    
    console.log(`✓ Generated favicon-32x32.png`);
    
    // Convert PNG to ICO
    const pngBuffer = await fsp.readFile(faviconPngPath);
    const icoBuffer = await toIco([pngBuffer], {
      sizes: [32]
    });
    await fsp.writeFile(faviconPath, icoBuffer);
    
    console.log(`✓ Generated favicon.ico`);
  } catch (error) {
    console.error(`✗ Error generating favicon:`, error.message);
  }
  
  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);

