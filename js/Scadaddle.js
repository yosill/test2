const letters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
let currentLetter = '';
let score = 0;
let startTime;
let timerInterval;

function startGame() {
    nextRound();
    startTimer();
    enableSubmitButton();
}

function nextRound() {
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('current-letter').textContent = `אות נוכחית: ${currentLetter}`;

    // Reset input fields
    const inputFields = document.querySelectorAll('#input-fields input');
    inputFields.forEach(input => input.value = '');

    // Reset timer
    clearInterval(timerInterval);
    startTime = Date.now();
    startTimer();
}

function startTimer() {
    startTime = Date.now(); // שעת התחלת המשחק
    const timerElement = document.getElementById('timer');

    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const remainingTime = 30 - elapsedTime;
        timerElement.textContent = remainingTime;

        if (remainingTime === 0) {
            clearInterval(timerInterval);
            alert('הזמן נגמר!');
            checkAnswers(0); // ניחוש לא נכון (זמן 0)
            disableSubmitButton();
        }
    }, 1000);
}

function enableSubmitButton() {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = false;
}

function disableSubmitButton() {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
}

function checkAnswers() {
    const animalInput = document.getElementById('animal-input').value.toUpperCase();
    const plantInput = document.getElementById('plant-input').value.toUpperCase();
    const objectInput = document.getElementById('object-input').value.toUpperCase();

    const isAnimalCorrect = startsWith(animalInput, currentLetter);
    const isPlantCorrect = startsWith(plantInput, currentLetter);
    const isObjectCorrect = startsWith(objectInput, currentLetter);

    const correctAnswersCount = isAnimalCorrect + isPlantCorrect + isObjectCorrect;
    const responseTime = Math.floor((Date.now() - startTime) / 1000); // זמן התגובה
    const points = responseTime * correctAnswersCount;

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = `ניחשת ${correctAnswersCount} מילים נכונות תוך ${responseTime} שניות! קיבלת ${points} נקודות.`;

    if (correctAnswersCount > 0) {
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.classList.add('wrong');
    }

    score += points;
    document.getElementById('score').textContent = `ניקוד: ${score}`;

    // Reset feedback styling after a short delay
    setTimeout(() => {
        feedbackElement.classList.remove('correct', 'wrong');
    }, 1000);

    // Stop timer on submit
    clearInterval(timerInterval);

    // Reset input fields and enable submit button
    const inputFields = document.querySelectorAll('#input-fields input');
    inputFields.forEach(input => input.value = '');
    enableSubmitButton();

    // Delay next round transition
    setTimeout(() => {
        nextRound();
    }, 1500);
}

function startsWith(word, letter) {
    return word.startsWith(letter);
}
