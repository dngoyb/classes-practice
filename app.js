class Reactangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	get isValid() {
		return this.height > 0 && this.width > 0;
	}
	get perimeter() {
		if (this.isValid) return (this.width + this.height) * 2;
		return 'Provide a valide Reactangle';
	}
	isBiggerThan(shape) {
		return this.perimeter > shape.perimeter;
	}
}

class Square extends Reactangle {
	constructor(width) {
		super(width, width);
	}
}
/** 
const r = new Reactangle(25, 10);
console.log(r);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Reactangle(-25, 30);
console.log(r2);
console.log(r2.perimeter);
console.log(r2.isValid);
const c = new Square(10);
console.log(c);
console.log(c.perimeter);
console.log(r.isBiggerThan(c));
console.log(c);
*/

/** Exercise 2 */

class Book {
	#page = 1;
	constructor(title, pages) {
		this.title = title;
		this.pages = pages;
	}
	get page() {
		return this.#page;
	}
	nextPage() {
		return this.#page++;
	}
	closeBook() {
		return (this.#page = 1);
	}
}

class Library {
	#books = [];
	addBook(book) {
		return this.#books.push(book);
	}
	addBooks(books) {
		return books.forEach((book) => {
			return this.#books.push(book);
		});
	}
	removeBook(title) {
		return this.#books.filter((b) => {
			return b.title === title;
		});
	}
	findBookThatStartWith(letter) {
		return this.#books.filter((book) => {
			return book.title[0].toLowerCase() === letter.toLowerCase();
		});
	}
}

const b = new Book('Book1', 125);
// console.log(b.page);
// b.nextPage();
// console.log(b.page);
// b.closeBook();
// console.log(b.page);

const l = new Library();
l.addBook(new Book('Card', 12));

l.addBooks([
	new Book('Book 1', 25),
	new Book('Book 1', 35),
	new Book('Book 5', 54),
	new Book('Book 9', 54),
	new Book('Book 1', 54),
	new Book('look 1', 54),
]);

// console.log(l.removeBook('Book 1'));

console.log(l.findBookThatStartWith('c'));
console.log(l);
