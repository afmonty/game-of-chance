//Constructor for Card

function MakeCard() {
	this.suit = "Ace";
	this.num = "5";
}

var card =  new MakeCard();
console.log(card);

//Constructor for a die.

function MakeDie(){
	this.side1 = 1;
	this.side2 = 2;
	this.side3 = 3;
	this.side4 = 4;
	this.side5 = 5;
	this.side6 = 6;
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
	console.log(sumroll);
	if(sumroll in probs){
		probs[sum]++;
	} else{
		probs[sum] = 1;
	  }
	}
	return probs;
};

console.log(probs);
console.log(result());









