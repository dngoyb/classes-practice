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
}

const r = new Reactangle(25, 10);
console.log(r);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Reactangle(-25, 30);
console.log(r2);
console.log(r2.perimeter);
console.log(r2.isValid);
