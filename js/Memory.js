const cards = [
  { id: 1, value: "אדום", matched: false },
  { id: 2, value: "ורוד", matched: false },
  { id: 3, value: "סגול", matched: false },
  // ... וכן הלאה עבור כל הקלפים
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.random() * (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "hidden"); // מוסתר בתחילה

  const innerCard = document.createElement("div");
  innerCard.classList.add("card-inner");

  if (useColors) {
    innerCard.style.backgroundColor = card.value; // הגדר צבע עבור צבעים
  } else {
    innerCard.textContent = card.value; // הצג מספר עבור מספרים
  }

  cardElement.appendChild(innerCard);

  cardElement.addEventListener("click", () => {
    revealCard(card);
  });

  return cardElement;
}
function displayCards() {
  shuffleCards = shuffle(cards); // ערבב קלפים

  shuffleCards.forEach((card) => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
  });
}
let firstCard = null;
let secondCard = null;

function revealCard(card) {
  if (card.matched) return; // דלג על קלפים תואמים

  if (firstCard === null) {
    firstCard = card;
    firstCard.classList.add("revealed");
  } else {
    secondCard = card;
    secondCard.classList.add("revealed");

    checkMatch();
  }
}
function checkMatch() {
  if (firstCard.value === secondCard.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    firstCard.matched = true;
    secondCard.matched = true;
    score++;
    scoreDisplay.textContent = `ציון: ${score}`;

    resetCardsAfterDelay(); // אפס קלפים לאחר עיכוב
  } else {
    // טפל בהתאמה שגויה (לדוגמה, הפוך קלפים חזרה, הענשה וכו')
  }

  firstCard = null;
  secondCard = null;
}
function resetCardsAfterDelay() {
  setTimeout(() => {
    const revealedCards = document.querySelectorAll(".revealed");
    revealedCards.forEach((card) => card.classList.remove("revealed"));
  }, 500); // התאם את העיכוב לפי הצורך
}
