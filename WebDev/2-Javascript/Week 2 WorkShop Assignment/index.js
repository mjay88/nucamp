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

let timeouts = [];


//a function to flash the background between white and target color	
function flashBackground(target){
	let flashCount = 0//keeps track of how many times the background has flashed
	const intervalId = setInterval(function(){
		if(flashCount === 10){//if the background has flashed 10 times, stop the interval
			clearInterval(intervalId);
			document.getElementById("container").innerHTML = "";//clear the container
			return;
		}
		document.querySelector("body").style.backgroundColor = target;
	
		setTimeout(function(){
			document.querySelector("body").style.backgroundColor = "white";
		}, 250);//flash the background for a quarter of a second
		flashCount++;
	}, 500)//flash the background every half second
	timeouts.push(intervalId)
}


function runGame() {
	timeouts.forEach(timeout => clearTimeout(timeout));//clear any timeouts that are still running
	document.getElementById("container").innerHTML = "";//clear the container
	let guess = "";
	let correct = false;
	const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
	const target = COLORS_ARRAY[targetIndex];
	console.log(target)
	let count = 0;
	do {
		guess = prompt(`I am thinking of one of these colors: \n\n 
     ${COLORS_ARRAY.join(", ")}\n\n
     What color am I thinking of? \n
    `)
	guess = guess.toLowerCase();
		if (guess === null) {
			alert("You didn't enter anything");
			return;
		}
		correct = checkGuess(guess, target);
		count++;
	} while (!correct);

	alert(`Congratulations, you guessed correctly in ${count} tries`);
	// document.querySelector("body").style.backgroundColor = target;
	flashBackground(target);
		const h1 = document.createElement(
			"h1"
		);
		h1.innerHTML = "Congratulations, you guessed correctly!";
		// console.log(h1);
		const container = document.getElementById("container");
		container.appendChild(h1);
		// console.log(container)
	
	
}

function checkGuess(guess, target) {
	let correct = false;
	if (!COLORS_ARRAY.includes(guess)) {
		alert("That is not a valid color \n\n Please try again");
	} else if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
		alert("You were close, but a little too high...");
	} else if (COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)) {
		alert("You were close, but a little too low...");
	} else {
		correct = true;
	}

	return correct;
}


