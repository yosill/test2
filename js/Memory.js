const cards = [
    { image: "image1.jpg", matched: false },
    { image: "image2.jpg", matched: false },
    { image: "image1.jpg", matched: false }, // Duplicate for matching
    { image: "image2.jpg", matched: false }, // Duplicate for matching
    { image: "image3.jpg", matched: false },
    { image: "image4.jpg", matched: false },
    { image: "image3.jpg", matched: false }, // Duplicate for matching
    { image: "image4.jpg", matched: false }, // Duplicate for matching
];

const container = document.querySelector(".container");
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
    const img = document.createElement("img");
    img.src = `images/${card.image}`;
    img.alt = card.image;
    img.classList.add("card", "back");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.appendChild(img);

    cardElement.addEventListener("click", () => {
        flipCard(cardElement, card);
    });

    return cardElement;
}

function flipCard(cardElement, card) {
    if (card.matched) return;

    if (!firstCard) {
        firstCard = card;
        cardElement.classList.add("flipped");
    } else if (!secondCard) {
        secondCard = card;
        cardElement.classList.add("flipped");

        if (firstCard.image === secondCard.image) {
            firstCard.matched = true;
            secondCard.matched = true;
            score++;

            setTimeout(() => {
                cardElement.classList.add("matched");
                firstCard = null;
                secondCard = null;
            }
        }
    }
}
