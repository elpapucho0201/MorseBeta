const morseCode = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..'
};

let currentLetter = 'A'; // Empezamos con la letra 'A'

function checkAnswer() {
    const userInput = document.getElementById('morseInput').value.trim();
    const feedback = document.getElementById('feedback');
    
    if (userInput === morseCode[currentLetter]) {
        feedback.textContent = '¡Correcto! Sigue así.';
        feedback.style.color = 'green';
        nextLetter();
    } else {
        feedback.textContent = 'Incorrecto. Intenta de nuevo.';
        feedback.style.color = 'red';
    }
}

function nextLetter() {
    const letters = Object.keys(morseCode);
    const randomIndex = Math.floor(Math.random() * letters.length);
    currentLetter = letters[randomIndex];
    document.getElementById('letter').textContent = currentLetter;
    document.getElementById('morseInput').value = '';
}
