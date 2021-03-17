var cardsArray;
var totalTime;
var card;
var timeRemaining;
var timer;
var ticker;
var cardsToCheck;
var totalClicks;
var matchedCards;
var busy;
window.addEventListener("load", function () {
    cardsArray = card;
    totalTime = totalTime;
    timeRemaining = totalTime;
    timer = document.getElementById("time-remaining");
    ticker = document.getElementById("flips");
});
function startGame() {
    cardsToCheck = null;
    totalTime = 0;
    timeRemaining = totalTime;
    matchedCards = [];
    busy = true;
}
function flipCard(card) {
    if (canFlipCard(card)) {
        totalClicks++;
        ticker.innerText = totalClicks;
        card.classList.add("visible");
        console.log("flipCard Visible success!");
    }
}
function canFlipCard() {
    return true;
    //return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardsToCheck);
}
function ready() {
    var overlays = Array.from(document.getElementsByClassName("overlay-text"));
    var cards = Array.from(document.getElementsByClassName("card"));
    var game;
    (100, cards);
    overlays.forEach(function (overlay) {
        overlay.addEventListener("click", function () {
            overlay.classList.remove("visible");
            //game.startGame()
        });
    });
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            //game.flipCard(card);
        });
    });
}
//# sourceMappingURL=script.js.map