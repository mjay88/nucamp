//fake json book data
const newBooks = `[
	{ "title": "The Last DragonLord", "author": "Joanne Bertin" },
	{ "title": "Half Asleep in Frog Pajamas", "author": "Tom Robbins" },
	{ "title": "Siddarth", "author": "Herman Hesse" }
]`;

class Book {
	constructor(title, author, available = true) {
		this.title = title;
		this.author = author;
		this.available = available;
	}
}

const library = {
	books: [],
	addBook: function (title, author) {
        let newBook = new Book(title, author);
		this.books.push(newBook);
	},
	checkOutBook: function (title) {
		try {
			for(let book of this.books){
				if(book.title === title && book.available){
					book.available = false;
					console.log(`You just checked out ${title}`)
					return true;
				}
			}
			throw new Error(`${title} not found in database or is unavailable`);
		} catch (err) {
			console.log(err.message)
			return false;
			
		}
		
	},
	getAvailableBooks: function () {
		//return an array of books that are available
		const availableBooks = this.books.filter((book) => book.available);
		console.log(availableBooks, 'availableBooks');
		return availableBooks;
	},
	
};
function receiveBooks(booksData) {
		try {
			//parse book data
			let parsedBooks = JSON.parse(booksData);
			//iterate through parsed books and add them to library using the book class
			// console.log(parsedBooks)
			parsedBooks.forEach((book) => {
				library.addBook(book.title, book.author);
			});
		} catch (err) {
			console.log(err);
		}
	}

  // Tests
            console.log(`There are currently ${library.books.length} books in the library's database.`);
            library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
            receiveBooks(newBooks);
            console.log(`There are currently ${library.books.length} books in the library's database.`);
            library.checkOutBook("Eloquent JavaScript");
			// console.log("checked out Eloquent JavaScript");
            library.checkOutBook("Grokking the Coding Interview");
            library.getAvailableBooks();