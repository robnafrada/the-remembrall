class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/hedwigTheme.mp3');
        this.victoryMusic = new Audio('assets/audio/victory.mov');
        this.gameOverMusic = new Audio('assets/audio/gameover.mov')
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
    gameOver() {
        this.stopMusic();
        this.gameOverMusic.play();
    }
}

class MixorMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null; 
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        this.shuffleCards();
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
        }
    }
    shuffleCards() {
        for(let i = this.cardsArray.length -1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }

    canFlipCard(card) {
        return true;
        // return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixorMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

// let audioController = new AudioController();
// audioController.startMusic();