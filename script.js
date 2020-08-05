class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/hedwigTheme.mp3');
        this.victoryMusic = new Audio('assets/audio/victory.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    victory() {
        this.stopMusic();
        this.victoryMusic.play();
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {

        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

let audioController = new AudioController();
audioController.startMusic();