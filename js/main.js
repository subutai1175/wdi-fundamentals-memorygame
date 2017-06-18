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


//remove cardId parameter
var flipCard = function () {
//get data-id attribute of card
cardId = this.getAttribute('data-id');
//Update to access values from card array
console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

//Add see and suit
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {

checkForMatch(); //Unit 9 Step 7 part 2
}	
};
//create Board function
var createBoard = function () { 
	//loop
	for (var i = 0; i < cards.length; i++) {
		//create img element
		var cardElement = document.createElement('img');
//add src
cardElement.setAttribute('src', 'images/back.png');
//set data id
cardElement.setAttribute('data-id', i);
//add event listener
cardElement.addEventListener('click', flipCard);
//append card element
document.getElementById('game-board').appendChild(cardElement);
	}
}
//call create board function
createBoard();


