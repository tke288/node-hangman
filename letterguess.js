function letter(letter){

	this.letter = letter;
	this.guess = false;
}

letter.prototype.display = function(){
	if(this.guess === false){
		return '-';
	}
	else{
		return this.letter;
	}
}

module.exports = letter;