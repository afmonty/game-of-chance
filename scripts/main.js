//Constructor for Card

function MakeCard() {
	this.suit = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
	this.num = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

	var cardSuit = this.suit[Math.floor(Math.random() * this.suit.length)];
	var cardNumber = this.num[Math.round(Math.random() * this.suit.length)];
	console.log('your card is the '+ cardNumber + ' of ' + cardSuit);
};

var card =  new MakeCard();
//console.log(card);


//Constructor for a die.

function MakeDie(){
	
	this.roll = function(){
		return Math.ceil(Math.random() * 6);
	}
};
var die = new MakeDie();

//Rolling the dice.

var dieRoll = die.roll(); // return a number between 1 and 6
console.log("You rolled a " +dieRoll);

//Probabilities

var result = function getProbabilities(){
	var probs = {};
	for(var i = 0; i < 1000; i++){
	var roll1 = die.roll();
	var roll2 = die.roll();
	var sumroll = roll1 + roll2;
	//console.log(sumroll);
	if(sumroll in probs){
		probs[sumroll]++;
	} else{
		probs[sumroll] = 1;
	  }
	}
	//console.log(probs);
	return probs;
};


console.log(result());









