// function rollDice(){
//     let goldCoins = 0;
//     for(let i = 0; i < 10; i++){
//         const roll = Math.floor(Math.random() * 6) + 1;
//         document.querySelector(".dice").setAttribute("src", `./images/dice${roll}.png`)
//         // alert(roll);
//         if(roll === 1){
//             // alert(`You rolled a ${roll}, Game over no more rolls!`);
//             break;
//         } else if(roll < 5){
//             continue;
//         } else if(roll === 5){
//             goldCoins += 5;
//             // alert(`Congratulations, you win ${roll} gold coins`);
//         } else if(roll === 6){
//             goldCoins += 6;
//             // alert(`Congratulations, you win ${roll} gold coins`);
//         }
//     }
//     // alert(`You have ${goldCoins} gold coins!`)
// }

const button = document.getElementById("roll-button");
const dice = document.getElementById("dice-img");
const alertContainer = document.getElementById("alert-container");

function rollDice() {
	const roll = Math.floor(Math.random() * 6) + 1;
	console.log(roll);
	dice.setAttribute("src", `./images/dice${roll}.png`);
	if (roll === 1) {
		let p = (document.createElement("p").textContent = "You Lose Everything!");
		alertContainer.append(p);
		setTimeout(() => {
			alertContainer.innerHTML = "";
		}, 3000);
		//clear coins,
		//create restart button
	} else if (roll === 5) {
	let p = (document.createElement("p").textContent = `Congratulations you won ${roll} gold coins!`);
	alertContainer.append(p);
	setTimeout(() => {
		alertContainer.innerHTML = "";
	}, 3000);
	} else if (roll === 6) {
		let p = (document.createElement("p").textContent =
			`Congratulations you won ${roll} gold coins!`);
		alertContainer.append(p);
		setTimeout(() => {
			alertContainer.innerHTML = "";
		}, 3000);
	}
}

button.addEventListener("click", rollDice);
