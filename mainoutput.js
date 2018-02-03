var game = require('./randomgame.js');
var inquirer = require('inquirer');
var word = require('./gameload.js')
var letter = require('./letterguess.js')
var choice;
exports.letter;
exports.wordGuess;
exports.lives = 0;
exports.chosenWord = game.chosenword();



console.log('Guess the word!');

start();



function start(){

	var word = game.chosenword();
	userGuess(word);

}


function userGuess(word){

	inquirer.prompt(
		[{
			name: "guess",
			message: "Guess a letter",
			validate: function(input){
				return/[a-z]/.test(input);
			}
		}]
		)

	.then(function(guess){
		word.letterFound(guess.letter);
		word.display();

		if(!word.guessed){
			if(word.guessesRemaining >0){
				getuserGuess(word);
			}
			else{
				console.log("You Ran out of guesses")
			}
		}
		else if(word.guessed){
			console.log("Congrats! You win");
			start();
		}
	})


}

