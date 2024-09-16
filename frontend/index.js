import { backend } from 'declarations/backend';

const musicToggle = document.getElementById('musicToggle');
const hamsterMusic = document.getElementById('hamsterMusic');
const visitorCountElement = document.getElementById('visitorCount');

let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        hamsterMusic.pause();
        musicToggle.textContent = 'Play Music';
    } else {
        hamsterMusic.play();
        musicToggle.textContent = 'Pause Music';
    }
    isMusicPlaying = !isMusicPlaying;
});

async function updateVisitorCount() {
    try {
        const count = await backend.incrementVisitorCount();
        visitorCountElement.textContent = `Visitors: ${count}`;
    } catch (error) {
        console.error('Error updating visitor count:', error);
        visitorCountElement.textContent = 'Visitors: Error loading count';
    }
}

updateVisitorCount();
