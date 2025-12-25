import fs from 'fs';
import path from 'path';

const baseDir = 'public';
const dirs = ['images', 'products'];

dirs.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

const generateSVG = (name, text, bgColor = '#0A0A0C', textColor = '#F3F0EA') => {
    const svg = `<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="1000" fill="${bgColor}"/>
    <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" letter-spacing="10">${text}</text>
    <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="12" fill="${textColor}" text-anchor="middle" opacity="0.3" letter-spacing="5">DROPCULTURE // SYSTEM // ARCH</text>
    <line x1="100" y1="500" x2="700" y2="500" stroke="${textColor}" stroke-width="2" opacity="0.1" />
  </svg>`;
    fs.writeFileSync(path.join(baseDir, name), svg);
};

// Main Assets
generateSVG('images/hero-main.webp', 'SYSTEM FAIL');
generateSVG('images/editorial-01.webp', 'BRUTAL CLARITY');
generateSVG('images/hero-drop-01.webp', 'DROP 01');
generateSVG('images/hero-drop-02.webp', 'DROP 02');

// Products
const productImages = [
    'products/void-tee-1.webp', 'products/void-tee-2.webp',
    'products/acid-hoodie-1.webp', 'products/acid-hoodie-2.webp',
    'products/cargo-1.webp', 'products/cargo-2.webp',
    'products/beanie-1.webp',
    'products/phantom-jacket-1.webp',
    'products/tote-1.webp'
];

productImages.forEach(img => {
    generateSVG(img, img.split('/')[1].split('.')[0].toUpperCase().replace(/-/g, ' '));
});

// Lookbook
for (let i = 1; i <= 6; i++) {
    generateSVG(`images/lookbook-0${i}.webp`, `MANIFESTO // 0${i}`);
}

// OG Image
generateSVG('og-image.webp', 'DROPCULTURE', '#FF2DAB', '#0A0A0C');

console.log('Placeholders generated.');
