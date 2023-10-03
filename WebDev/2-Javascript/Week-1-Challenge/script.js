// The general admission ticket price is $20.
// If the guest is under 12 or over 65, they qualify for a discounted ticket price of $10.
// If the guest is attending a matinee show, they get an additional $3 off any ticket price.
//Create an HTML file named theater.html. In this file, include a button element that the user can click to purchase a ticket. Set up an initial script tag where you'll be writing your JavaScript code.
// Declare two global constants for the general admission ticket price and the discounted ticket price.
// Write a function named buyTicket(). This function should ask the user for their age (use prompt()) and calculate the initial ticket price based on the user's age. Display the ticket price to the user using alert(). Hint: You'll need to use an if statement to check the user's age and determine the ticket price. Don't forget to call your buyTicket() function when the user clicks the button.
// Refactor your code. Extract the code responsible for calculating the base ticket price based on age to a new function named getBaseTicketCost(age). This new function should take age as a parameter and return the appropriate ticket price. You should then call this function from within buyTicket().
// Add a matinee discount. Ask the user if they are attending a matinee show (use prompt() again), and if so, apply a $3 discount to their ticket price. Hint: You'll need to use another if statement to check the user's response and apply the discount if necessary. Consider declaring another global constant for the matinee discount.

const regularTicket = 20;
const discountedTicket = regularTicket * 0.5;
//extract logic so helper functions preform only one task. 
function buyTicket() {
	let age = prompt("How old are you?");
	let qualifiesForDiscount = getBaseTicketCost(age);
	let isMatinee = isMatineeShow();
    
    if (qualifiesForDiscount && isMatinee) {
    	alert(`The cost of addmission is $${(discountedTicket - 3).toFixed(2)}`);
    } else if (qualifiesForDiscount && !isMatinee) {
    	alert(`The cost of addmission is $${discountedTicket.toFixed(2)}`);
    } else if (!qualifiesForDiscount && isMatinee){
        alert(`The cost of addmission is $${(regularTicket - 3).toFixed(2)}`)
    } else {
        alert(`The cost of addmission is $${(regularTicket).toFixed(2)}`);
    }

}

function getBaseTicketCost(age) {
	if (age < 12 || age > 65) {
		return true;
	} else {
		return false;
	}
}

function isMatineeShow() {
	let response = prompt(
		"Are you purchasing a ticket for a matinee showing? Please type yes or no."
	).toLowerCase();
	if (response === "yes") {
		return true;
	} else if (response === "no") {
		return false;
	} else {
		alert("Im sorry, that is not a valid response");
		return isMatineeShow();
	}
}
