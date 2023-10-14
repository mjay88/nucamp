const COLORS_ARRAY = [
	"blue",
	"cyan",
	"gold",
	"gray",
	"green",
	"magenta",
	"orange",
	"red",
	"white",
	"yellow",
];

function runGame() {
	let guess = "";
	let correct = false;
	const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
	const target = COLORS_ARRAY[targetIndex];
 let count = 0;
	do {
		guess = prompt(`I am thinking of one of these colors: \n\n 
     ${COLORS_ARRAY.join(", ")}\n\n
     What color am I thinking of? \n
    `).toLowerCase();
		if (guess === null) {
			alert("You didn't enter anything");
			return;
		}
		correct = checkGuess(guess, target);
        count++
	} while (!correct);

    alert(`Congratulations, you guessed correctly in ${count} tries`)
    document.querySelector("body").style.backgroundColor = target;
}

function checkGuess(guess, target) {
 let correct = false;
 if(!COLORS_ARRAY.includes(guess)){
    alert("That is not a valid color \n\n Please try again")
 } else if(COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)){
    alert("You were close, but a little too high...")
 } else if(COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)){
    alert("You were close, but a little too low...");
 } else {
    correct = true;
 }

 return correct;
}
