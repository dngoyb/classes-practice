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

const b = new Book('Book1', 125);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.closeBook();
console.log(b.page);
