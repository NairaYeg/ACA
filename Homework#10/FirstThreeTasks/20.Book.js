class Author {
  constructor(name, email, gender) {
    (this._name = name), (this._email = email), (this._gender = gender);
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get name() {
    if (this._name === " ") {
      throw new Error(`Empty value!`);
    }
    return this._name;
  }

  get gender() {
    if (
      this._gender.trim().toLowerCase() === "male" ||
      this._gender.trim().toLowerCase() === "female"
    ) {
      return this._gender.trim().toLowerCase();
    } else {
      throw new Error(`${this._gender} is not valid`);
    }
  }

  toString() {
    if (this.gender === "male") {
      return `Mr. ${this._name}`;
    } else {
      return `Ms. ${this._name}`;
    }
  }
}

let author = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");

// console.log(author1.gender);
// console.log(author1.name)
// author1.toString()

class Book {
  constructor(title, price, quantity, author) {
    (this._title = title),
      (this._price = price),
      (this._quantity = quantity),
      (this._author = author);
  }

  get title() {
    return `"${this._title}"`;
  }

  set title(value) {
    const normalized = value.trim();
    if (normalized === " ") {
      throw new Error(`Empty value!`);
    }
    return (this._title = this.value);
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0 || Number(isNaN(value))) {
      throw new Error(`Price must be greater than 0`);
    }
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (value < 0 || Number(isNaN(value))) {
      throw new Error(`Quantity must be the whole positive number!`);
    }
    this._quantity = Math.floor(value);
  }

  get author() {
    return this._author;
  }
  
  getProfit() {
    return this.quantity * this.price;
  }

  toString() {
    return `${this.title},\nby ${this.author.name},\nprice $${this.price}.`;
  }
}

let book1 = new Book("Harry Potter and the Goblet of Fire", 100, 10, author);

//console.log(book1);
//console.log(book1.author)
// console.log(book1.author.toString())
// book1.quantity = "5.88";
// console.log(book1.toString());
// console.log(book1.quantity)
//console.log(book1.getProfit());
//console.log(book1.toString());
