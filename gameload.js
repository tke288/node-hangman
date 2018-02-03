var letter = require('./letterguess.js');

module.exports = function words(words){
	 var letters = [];
	 var wordArray = word.split('');

	 word.forEach(function(letter){
	 	letters.push(new letter(letter));
	 })

	 this.guessesRemaining = 20;
	 this.guessed = false;

	 this.letterFound = function(userGuess){
	 	this.guessesRemaining --;
	 	this.guessed = letters.every(function(letter){
	 		if(userGuess === letter.name){
	 			letter.guessed = true;
	 		}
	 		return letter.guessed;
	 	});
	 }

	 this.display = function(){
	 	var str = '';
	 	letters.forEach(function(letter){
	 		str += letter.display();
	 	});
		console.log("Guesses Remaining" + this.guessesRemaining);
	 }
}