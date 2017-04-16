// Write a function that determines if a string starts 
// with an upper-case letter A-Z

var w = "Tech"
var upperCaseWord = function () {
	if (w[0] === w[0].toUpperCase()) {
		return true 
	} else {
		return false
	}
}
console.log(upperCaseWord()