import voidTee1 from '../assets/products/void-tee-1.webp';
import voidTee2 from '../assets/products/void-tee-2.webp';
import acidHoodie1 from '../assets/products/acid-hoodie-1.webp';
import acidHoodie2 from '../assets/products/acid-hoodie-2.webp';
import cargo1 from '../assets/products/cargo-1.webp';
import cargo2 from '../assets/products/cargo-2.webp';
import beanie1 from '../assets/products/beanie-1.webp';
import phantomJacket1 from '../assets/products/phantom-jacket-1.webp';
import tote1 from '../assets/products/tote-1.webp';

const products = [
    {
        slug: 'void-heavy-tee',
        title: 'VOID HEAVY TEE',
        drop: 'DROP 01: SYSTEM FAIL',
        price: 85,
        images: [voidTee1, voidTee2],
        sizes: ['S', 'M', 'L', 'XL'],
        status: 'available',
        category: 'TOPS',
        description: '400GSM heavy weight organic cotton. Boxy fit. Discharge print "SYSTEM FAIL" on reverse.'
    },
    {
        slug: 'acid-trace-hoodie',
        title: 'ACID TRACE HOODIE',
        drop: 'DROP 01: SYSTEM FAIL',
        price: 180,
        images: [acidHoodie1, acidHoodie2],
        sizes: ['M', 'L', 'XL'],
        status: 'available',
        category: 'OUTERWEAR',
        description: 'Loopback terry with acid magenta contrast stitching. Oversized proportions.'
    },
    {
        slug: 'ink-cargo-v2',
        title: 'INK CARGO V2',
        drop: 'DROP 01: SYSTEM FAIL',
        price: 220,
        images: [cargo1, cargo2],
        sizes: ['30', '32', '34', '36'],
        status: 'sold-out',
        category: 'BOTTOMS',
        description: 'Technical ripstop material. 8-pocket architecture. Matte black hardware.'
    },
    {
        slug: 'cyber-knit-beanie',
        title: 'CYBER KNIT BEANIE',
        drop: 'DROP 01: SYSTEM FAIL',
        price: 55,
        images: [beanie1],
        sizes: ['OS'],
        status: 'available',
        category: 'ACCESSORIES',
        description: 'Double layer knit. Thermal properties. Rubberized label tag.'
    },
    {
        slug: 'phantom-shell-jacket',
        title: 'PHANTOM SHELL JACKET',
        drop: 'DROP 02: GHOST CITY',
        price: 320,
        images: [phantomJacket1],
        sizes: ['S', 'M', 'L', 'XL'],
        status: 'coming-soon',
        category: 'OUTERWEAR',
        description: 'Waterproof membrane. Taped seams. Reflective "GHOST" branding.'
    },
    {
        slug: 'brutal-canvas-tote',
        title: 'BRUTAL CANVAS TOTE',
        drop: 'DROP 01: SYSTEM FAIL',
        price: 45,
        images: [tote1],
        sizes: ['OS'],
        status: 'available',
        category: 'ACCESSORIES',
        description: '16oz heavy canvas. Cross-stitched handles. Screen printed logo.'
    }
];

export { products };
