//words for guessing

var words = ["random", "phonebooth", "tabletop", "marchingband", "filter", "jazz", "apples", "shame"];

module.exports.chosenword = function(){
	var chosenword = Math.floor((words.length*Math.random())+1);
	return words[chosenword];
}