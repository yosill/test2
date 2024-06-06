const cards = [
    { color: "red", matched: false, hidden: true, revealed: false },
    { color: "blue", matched: false, hidden: true, revealed: false },
    { color: "red", matched: false, hidden: true, revealed: false }, // Duplicate for matching
    { color: "blue", matched: false, hidden: true, revealed: false }, // Duplicate for matching
    { color: "green", matched: false, hidden: true, revealed: false },
    { color: "yellow", matched: false, hidden: true, revealed: false },
    { color: "green", matched: false, hidden: true, revealed: false }, // Duplicate for matching
    { color: "yellow", matched: false, hidden: true, revealed: false }, // Duplicate for matching
  ];
  
  const container = document.querySelector(".container");
  const scoreDisplay = document.querySelector(".score"); // Reference the score display element
  let firstCard = null;
  let secondCard = null;
  let score = 0;
  let moves = 0;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "hidden");
    cardElement.style.backgroundColor = "#fff"; // Initially set background to white (hidden)
  
    const innerCard = document.createElement("div");
    innerCard.classList.add("card-inner");
    innerCard.style.backgroundColor = card.color; // Set color on the inner card
  
    cardElement.appendChild(innerCard);
  
    cardElement.addEventListener("click", () => {
      if (card.matched || card.revealed) return; // Ignore clicks on matched or revealed cards
  
      card.revealed = true; // Mark the card as revealed
      innerCard.classList.add("revealed"); // Reveal the inner card color
  
      if (!firstCard) {
        firstCard = card;
      } else if (!secondCard) {
        secondCard = card;
  
        if (firstCard.color === secondCard.color) {
          firstCard.matched = true;
          secondCard.matched = true;
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
  
          // Reveal all remaining cards of the matching color
          cards.forEach((otherCard) => {
            if (otherCard.color === firstCard.color && !otherCard.matched) {
              otherCard.revealed = true;
              const otherCardElement = container.querySelector(`.card[data-id="${otherCard.id}"]`);
              otherCardElement.querySelector(".card-inner").classList.add("revealed");
            }
          });
  
          setTimeout(() => {
            cardElement.classList.add("matched");
            firstCard = null;
            secondCard = null;
          }, 100);
        } else {
          setTimeout(() => {
            cardElement.classList.remove("revealed");
            firstCard = null;
            secondCard = null;
          }, 500);
        }
      }
    });
  
    // Add a unique data-id attribute to each card for easy identification
    cardElement.dataset.id = card.id;
  
    return cardElement;
  }
  
  // Start the game
  const shuffledCards = shuffle(cards);
  shuffledCards.forEach((card) => {
    const cardElement = createCard(card
    )})  