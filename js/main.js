var cards = ['queen', 'queen', 'king', 'king'];

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

//Unit 9 step 4
console.log("User flipped " + cards[cardId]);
//Unit 9 step 5
cardsInPlay.push(cards[cardId]);


if (cardsInPlay.length === 2) {

checkForMatch(); //Unit 9 Step 7 part 2
}	
};

flipCard(0);
flipCard(2);
