const BOARD_WIDTH = 3;

let board = generateEmptyboard();
const gameHeading = document.getElementById("game-heading");
let squares = document.querySelectorAll(".square");
// const resetButton = document.getElementById("restart");
let currentPlayer = 1;
let numberOfMoves = 0;
console.log(squares);
//add eventListener to all the squares
squares.forEach((square, i) => {
	square.addEventListener("click", () => {
		const row = Math.floor(i / BOARD_WIDTH);
		const col = i % BOARD_WIDTH;
		console.log(row, col, i);
		makeMove(square, row, col);
	});
});

// resetButton.addEventListener('click', restartGame)

function makeMove(square, row, col) {
	square.innerHTML = currentPlayer % 2 === 0 ? "X" : "O";
	numberOfMoves++;
	square.style.color = "black";
	square.disabled = true;
	//set the board
	board[row][col] = currentPlayer;
	if (didPlayerWin()) {
		gameHeading.textContent = `Player ${currentPlayer} is the Winner`;
		endGame();
	} else if (numberOfMoves >= BOARD_WIDTH * BOARD_WIDTH) {
		gameHeading.textContent = "Tie Game!";
		endGame();
	} else {
		currentPlayer = currentPlayer === 1 ? 2 : 1;
		setCurrentPlayerHeader();
	}
}

function didPlayerWin() {
	const rows = [0, 1, 2];

	const wonHorizontal = rows.some((row) => {
		return (
			board[row][0] === currentPlayer &&
			board[row][1] === currentPlayer &&
			board[row][2] === currentPlayer
		);
	});

	const cols = [0, 1, 2];
	const wonVertical = cols.some((col) => {
		return (
			board[0][col] === currentPlayer &&
			board[1][col] === currentPlayer &&
			board[2][col] === currentPlayer
		);
	});

	const wonTopLeftToBottomRight =
		board[0][0] === currentPlayer &&
		board[1][1] === currentPlayer &&
		board[2][2] === currentPlayer;

	const wonTopRightToBottomLeft =
		board[0][2] === currentPlayer &&
		board[1][1] === currentPlayer &&
		board[2][0] === currentPlayer;

	return (
		wonHorizontal ||
		wonVertical ||
		wonTopLeftToBottomRight ||
		wonTopRightToBottomLeft
	);
}

function endGame() {
	let resetButton = document.createElement("button");
	resetButton.classList.add("restart-button", "btn", "btn-secondary");
	resetButton.textContent = "Restart";
	resetButton.addEventListener("click", restartGame);
	document.querySelector(".container").appendChild(resetButton);

	// resetButton.classList.remove("d-none");
	squares.forEach((square) => {
		square.disabled = true;
	});
}

function setCurrentPlayerHeader() {
	gameHeading.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
	board = generateEmptyboard();
	currentPlayer = 1;
	numberOfMoves = 0;
	squares.forEach((square) => {
		square.innerHTML = "";
		square.disabled = false;
	});
	setCurrentPlayerHeader();
	let container = document.querySelector(".container");
	container.removeChild(container.lastChild);
}

function generateEmptyboard() {
	return new Array(BOARD_WIDTH).fill().map(() => new Array(BOARD_WIDTH).fill());
}
