import heroDrop01 from '../assets/images/hero-drop-01.webp';
import heroDrop02 from '../assets/images/hero-drop-02.webp';

const drops = [
    {
        id: 'drop-01',
        name: 'DROP 01: SYSTEM FAIL',
        releaseDate: '2025-11-15',
        status: 'active',
        description: 'A study in digital decay and brutalist structures. First release from the core collection.',
        heroImage: heroDrop01
    },
    {
        id: 'drop-02',
        name: 'DROP 02: GHOST CITY',
        releaseDate: '2026-02-01',
        status: 'upcoming',
        description: 'Navigating the silent intersections of the urban jungle. Coming soon.',
        heroImage: heroDrop02
    }
];

const latestDrop = drops.find(d => d.status === 'active') || drops[0];

export { drops, latestDrop };
