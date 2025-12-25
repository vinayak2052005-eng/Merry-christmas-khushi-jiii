let revealedCount = 0;
const music = document.getElementById('bgMusic');

function startApp() {
    music.play();
    nextScreen(2);
}

function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen' + screenNum).classList.add('active');
}

function revealCard(element) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        revealedCount++;
        
        if (revealedCount === 3) {
            document.getElementById('final-btn').classList.remove('hidden');
        }
    }
}