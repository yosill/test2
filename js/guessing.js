let boton = document.querySelector("button")
boton.addEventListener("click",handleGuess)

let randomNumber = Math.floor(Math.random() * 50) + 1; // יצירת מספר אקראי
let remainingGuesses = 10; // הגדרת מספר ניחושים התחלתי

function handleGuess() {
  const guess = parseInt(document.getElementById("guessInput").value); // קבלת הניחוש של השחקן

  if (guess < 1 || guess > 50 || guess ==='') {
    alert("אנא הזן מספר בין 1 ל-50");
    return;
  }

  if (guess === randomNumber) {
    alert("מזל טוב! ניחשת את המספר הנכון!");
    document.getElementById("guessInput").disabled = true; // השבתת קלט
  } else {
    const feedback = guess < randomNumber ? "נמוך מדי!" : "גבוה מדי!";
  remainingGuesses--;
    alert(feedback + " נותרו לך " + remainingGuesses + " ניחושים.");

    if (remainingGuesses === 0) {
      alert("סוף המשחק! המספר הנכון היה " + randomNumber);
      document.getElementById("guessInput").disabled = true; // השבתת קלט
    }
  }
}