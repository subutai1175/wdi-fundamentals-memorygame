//Create cards array objects
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

//Unit 9 step 7
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};


//Unit 9 step 2 and 3
var flipCard = function (cardId) {

//Update to access values from card array
console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

//Add see and suit
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

if (cardsInPlay.length === 2) {

checkForMatch(); //Unit 9 Step 7 part 2
}	
};

flipCard(0);
flipCard(2);
