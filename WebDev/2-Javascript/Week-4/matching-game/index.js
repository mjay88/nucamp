//global variables
let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
const container = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");
let topOfLeft = theLeftSide.getBoundingClientRect();
const topContainerNode = document.querySelector(".top-container");

let streak = 0;
//generate faces function
function generateFaces() {
	for (let i = 0; i < numberOfFaces; i++) {
		const face = document.createElement("img");
		face.setAttribute("src", "assets/smile.png");
		let coordinates = theLeftSide.getBoundingClientRect(); //have the coordinates relative to the container not relative the top of the page
		let randomTop = Math.floor(Math.random() * 400) + coordinates.top;
		let randomLeft = Math.floor(Math.random() * 400) + coordinates.left;
		face.style.top = randomTop + "px";
		face.style.left = randomLeft + "px";
		theLeftSide.appendChild(face);
	}
	let leftSideImagesClone = theLeftSide.cloneNode(true);
	console.log(leftSideImagesClone, "leftside images");
	leftSideImagesClone.removeChild(leftSideImagesClone.lastChild);
	while (leftSideImagesClone.firstChild) {
		let image = leftSideImagesClone.firstChild;
		//shift all of the faces over and make left positioning relative to the left side of the right container
		image.style.left =
			Number(image.style.left.slice(0, -2)) +
			theRightSide.getBoundingClientRect().left +
			"px";
		theRightSide.appendChild(image);
	}
	//add eventlistener to missing face
	let missingFace = theLeftSide.lastChild;
	missingFace.addEventListener("click", nextLevel);
	innerContainer.addEventListener("click", gameOver);
}

function nextLevel(e) {
	e.stopPropagation(); //important
	numberOfFaces += 1;
	theLeftSide.innerHTML = ""; //clear old faces
	theRightSide.innerHTML = "";
	appendStreak();
	generateFaces();
}

function gameOver(e) {
	e.stopPropagation(); //important so all our other click activated event listeners do not fire
	alert("Game over, you lose");
	innerContainer.removeEventListener("click", gameOver);
	let missingFace = theLeftSide.lastChild;
	missingFace.removeEventListener("click", nextLevel);
	const button = document.createElement("button");
	button.classList.add("restart-button");
	button.textContent = "Restart Game";
	button.addEventListener("click", restart);
	topContainerNode.appendChild(button);
	//reset the select to select
	const selectElem = document.getElementById("select-difficulty");
	selectElem.selectedIndex = [0];
}
//add eleemnt for tracking winning streak
function appendStreak() {
	streak++;
	const topContainerNode = document.querySelector(".top-container");
	topContainerNode.removeChild(topContainerNode.lastChild);
	let streakNode = document.createElement("span");
	streakNode.classList.add("streak-span");
	streakNode.textContent = `Current winning streak: ${streak}`;

	topContainerNode.appendChild(streakNode);
}

function restart(e) {
	e.stopPropagation();
	container.removeEventListener("click", gameOver);
	//empty left and right
	theRightSide.innerHTML = "";
	theLeftSide.innerHTML = "";
	const spanToRemove = document.querySelector("span");
	if (spanToRemove) topContainerNode.removeChild(spanToRemove);
	streak = 0;
	numberOfFaces = 5;
	//remove button
	let button = document.querySelector(".restart-button");
	if (button) topContainerNode.removeChild(button);
	generateFaces();
}
//setting difficulty
const selectElem = document.getElementById("select-difficulty");

selectElem.addEventListener("change", function (event) {
	event.stopPropagation();
	const selectedOption = event.target.options[event.target.selectedIndex];

	if (selectedOption.value === "easy") {
		restart(event);//why is this not clearing the innerHTML?
		theLeftSide.innerHTML = "";
		theRightSide.innerHTML = "";
		numberOfFaces = 2;

		generateFaces();
	} else if (selectedOption.value === "medium") {
		restart(event);
		theLeftSide.innerHTML = "";
		theRightSide.innerHTML = "";
		numberOfFaces = 5;
		generateFaces();
	} else if (selectedOption.value === "hard") {
		restart(event);
		theLeftSide.innerHTML = "";
		theRightSide.innerHTML = "";
		numberOfFaces = 10;
		generateFaces();
	}
});
