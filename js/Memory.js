const cards = [
  { value: 'A', isMatched: false, isVisible: false },
  { value: 'A', isMatched: false, isVisible: false },
  { value: 'B', isMatched: false, isVisible: false },
  { value: 'B', isMatched: false, isVisible: false },
  { value: 'C', isMatched: false, isVisible: false },
  { value: 'C', isMatched: false, isVisible: false },
  { value: 'D', isMatched: false, isVisible: false },
  { value: 'D', isMatched: false, isVisible: false },
  { value: 'E', isMatched: false, isVisible: false },
  { value: 'E', isMatched: false, isVisible: false },
  { value: 'F', isMatched: false, isVisible: false },
  { value: 'F', isMatched: false, isVisible: false },
  { value: 'G', isMatched: false, isVisible: false },
  { value: 'G', isMatched: false, isVisible: false },
  { value: 'H', isMatched: false, isVisible: false },
  { value: 'H', isMatched: false, isVisible: false },
];

let selectedCard = null;
let turns = 0;
let matches = 0;

const cardGrid = document.getElementById('card-grid');
const turnsElement = document.getElementById('turns');
const matchesElement = document.getElementById('matches');

// Shuffle the cards
cards.sort(() => Math.random() - 0.5);

// Create and display cards
cards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  // cardElement.textContent = card.value;
  

  cardElement.addEventListener('click', () => {
    if (card.isMatched || card.isVisible) return;

    turns++;
    turnsElement.textContent = `מספר צעדים: ${turns}`;

    if (!selectedCard) {
      selectedCard = card;
      cardElement.classList.add('selected');
      cardElement.textContent = card.value
    } else {
      const secondCard = card;
      secondCard.isVisible = true;
      cardElement.textContent = secondCard.value;
      cardElement.textContent = card.value;

      if (selectedCard.value === secondCard.value) {
        selectedCard.isMatched = true;
        secondCard.isMatched = true;
        matches++;
        matchesElement.textContent = `התאמות: ${matches}`;

        cardElement.classList.add('matched');
        secondCard.classList.add('matched');

        selectedCard = null;

        if (matches === cards.length / 2) {
          alert('ניצחת!');
        }
      } else {
        setTimeout(() => {
          selectedCard.isVisible = false;
          secondCard.isVisible = false;
          selectedCard = null;
          cardElement.classList.remove('selected');
          secondCard.textContent = ''; // Hide card content again
        }, 1000);
      }
    }
  });

  cardGrid.appendChild(cardElement);
});
