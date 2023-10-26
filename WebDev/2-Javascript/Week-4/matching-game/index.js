//global variables
let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
const container = document.querySelector(".container")
let topOfLeft = theLeftSide.getBoundingClientRect();
const topContainerNode = document.querySelector(".top-container");


let streak = 0;
console.log(topOfLeft);
//generate faces function
function generateFaces() {
	for (let i = 0; i < numberOfFaces; i++) {
		const face = document.createElement("img");
		face.setAttribute("src", "assets/smile.png");
		let coordinates = theLeftSide.getBoundingClientRect();
		let randomTop = Math.floor(Math.random() * 400)  + coordinates.top;
		let randomLeft = Math.floor(Math.random() * 400) + coordinates.left;
		face.style.top = randomTop + "px";
		face.style.left = randomLeft + "px";
		theLeftSide.appendChild(face);
	}
    let leftSideImagesClone = theLeftSide.cloneNode(true);
    console.log(leftSideImagesClone, 'leftside images')
    leftSideImagesClone.removeChild(leftSideImagesClone.lastChild);
    while(leftSideImagesClone.firstChild){
		let image = leftSideImagesClone.firstChild;
        // console.log(image.style.left, "image style before");
        
        image.style.left =
		Number(image.style.left.slice(0, -2)) +
		theRightSide.getBoundingClientRect().left +
		"px";
        // console.log((Number(image.style.left.slice(0, -2)) + theRightSide.getBoundingClientRect().left) , 'image style')
		// console.log(image.style.left, 'after')
        theRightSide.appendChild(image);
    }
	let missingFace = theLeftSide.lastChild;
	missingFace.addEventListener('click', nextLevel)
	container.addEventListener('click', gameOver);

}

function nextLevel(e){

e.stopPropagation();
console.log("clicked")
numberOfFaces += 1;
theLeftSide.innerHTML = "";
theRightSide.innerHTML = "";
appendStreak();
generateFaces();
}

function gameOver(e) {
	e.stopPropagation();

	console.log('game over firing')
	alert('Game over, you lose');
	// theLeftSide.lastChild.removeEventListener("click", nextLevel);
	container.removeEventListener("click", gameOver);
	topContainerNode.removeEventListener("click", gameOver)
	const button = document.createElement("button");
	button.classList.add("restart-button");
	button.textContent = "Restart Game"
	button.removeEventListener("click", gameOver);
	button.addEventListener('click', restart)
	topContainerNode.appendChild(button);

}

function appendStreak(){
	
	streak++
	const topContainerNode = document.querySelector('.top-container');
	topContainerNode.removeChild(topContainerNode.lastChild)
	let streakNode = document.createElement("span");

	streakNode.textContent = `Your winning streak is: ${streak}`;
	// console.log(streakNode);
	// console.log(topContainerNode);

	topContainerNode.appendChild(streakNode);

}

function restart(e){
	e.stopPropagation(e);
	container.removeEventListener("click", gameOver);
	//empty left and right 
	theRightSide.innerHTML = "";
	theLeftSide.innerHTML = "";
	streak = 0;
	//remove button
	let button = document.querySelector(".restart-button")
    console.log(e.target, 'e.taraget.value for restart')
	console.log(button, 'button should be removed')
	topContainerNode.removeChild(button)
	generateFaces()
}
