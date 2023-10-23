//global variables
let numberOfFaces = 5;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");
let topOfLeft = theLeftSide.getBoundingClientRect();
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
        console.log(image.style.left, "image style before");
        
        image.style.left =
					Number(image.style.left.slice(0, -2)) +
					theRightSide.getBoundingClientRect().left +
					"px";
        // console.log((Number(image.style.left.slice(0, -2)) + theRightSide.getBoundingClientRect().left) , 'image style')
console.log(image.style.left, 'after')
        theRightSide.appendChild(image);
    }
}
