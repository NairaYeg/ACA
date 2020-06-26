
class Book {
  constructor(title, author) {
    this._title = title,
    this._author = author;
  }

  get title() {
    return String(this._title);
  }

  get author() {
    return String(this._author);
  }

  toString() {
    return `${this.title}\nby${this.author}`;
  }

  isTheSameBook(book) {
    if (
      this.author.trim() === book.author.trim() &&
      this.title.trim() === book.title.trim()
    ) {
      return true;
    }
    return false;
  }
}


class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author),
    this._bookId = LibraryBookBase.generaterBookId();
  }

  static id = 0;
  static generaterBookId() {
    return LibraryBookBase.id++;
  }

  get bookId() {
    return this._bookId;
  }
  
  toString() {
    return `${this.title},\nby${this.author},\nID ${this.bookId}.`;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, quantity) {
  super(title, author),
  //this._bookId = LibraryBook.generaterBookId(),
    this._quantity = quantity;
  }
  // static id = 0;
  // static generaterBookId() {
  //   return LibraryBook.id++;
  // }
  get bookId() {
    return this._bookId;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (Number(isNaN(value)) || value < 0) {
      throw new Error(
        `${value} is not valid. Quantity must be the whole positive number!`
      );
    }
    this._quantity = Number(value);
  }

  toString() {
    return `${this.title}\nby${this.author}\nID ${this.bookId}\nquantity ${this.quantity}`;
  }

  increaseQuantityBy(amount) {
    if (Number(isNaN(amount))) {
      throw new Error(`${amount} should be a number`);
    }
    let newQuantity = this.quantity + amount;
    this._quantity = newQuantity;
    return newQuantity;
  }

  decreaseQuantityBy(amount) {
    if (Number(isNaN(amount))) {
      throw new Error(`${amount} should be a number`);
    }
    if (amount >= this.quantity) {
      this._quantity = 0;
      return 0;
    } else {
      let newQuantity = this.quantity - amount;
      this._quantity = newQuantity;
      return newQuantity;
    }
  }
}



class ReaderBook extends Book {
  constructor(title, author, expirationDate, isReturned) {
    super(title, author),
    this._bookId = ReaderBook.generaterBookId(),
    this._expirationDate = expirationDate,
    this._isReturned = isReturned;
  }

  static id = 0;
  static generaterBookId() {
    return ReaderBook.id++;
  }

  get isReturned() {
    return this._isReturned;
  }

  get expirationDate() {
    return this._expirationDate;
  }

  set expirationDate(value) {
    this._expirationDate = String(value);
  }

  toString() {
    return `${this.title}\nby${this.author}\nExpiration date ${this.expirationDate}`;
  }
}



class Reader {
  constructor(firstName, lastName, books) {
      this._firstName = firstName,
      this._lastName = lastName,
      this._readerId = Reader.generatorReaderId(),
      this.books = books;
  }

  static id = 0;
  static generatorReaderId() {
    return Reader.id++;
  }

  get readerId() {
    return this._readerId;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (value.trim() === "") {
      throw new Error("Empty value");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (value.trim() === "") {
      throw new Error("Empty value");
    }
    this._lastName = value;
  }

  toString() {
    return `Reader. ${this.firstName} ${this.lastName}\nID. ${this.readerId}`;
  }

  borrowBook(book, library) {
    if (library.doHaveBook(book)) {
      let newReaderBook = new ReaderBook(
        book.title,
        book.author,
        String(`${new Date()}`),
        false
      );
      this.books.push(newReaderBook);
      return newReaderBook;
    }
    throw new Error(`This  book is not in the librar`);
  }
}



class Library {
  constructor(books, readers) {
    (this._books = books), (this._readers = readers);
  }

  get books() {
    return this._books;
  }

  get readers() {
    return this._readers;
  }

  doHaveBook(requestedBook) {
    let answerOfRequest = this.books.filter((book) =>
      requestedBook.isTheSameBook(book)
    );

    if (answerOfRequest.length !== 0 && answerOfRequest[0].quantity !== 0) {
      return true;
    }
    return false;
  }
  
  addBook(newBook) {
    if (this.doHaveBook(newBook)) {
      let newBookArr = this.books.filter((book) => book.isTheSameBook(newBook));
      newBookArr[0].increaseQuantityBy(1);
      return this.books;
    } else {
      let newLibraryBook = new LibraryBook(newBook.title, newBook.author, 1);
      this._books.push(newLibraryBook);
      return this.books;
    }
  }

  addBooks(newBooks) {
    newBooks.map((newBook) => this.addBook(newBook));
    return this.books;
  }

  checkReaderId(someId) {
    let idArray = this.readers.filter((reader) => reader.readerId === someId);
    if (idArray.length > 0) {
      return true;
    }
    return false;
  }

  lendBook(book, readeId) {
    if (this.doHaveBook(book) && this.checkReaderId(readeId)) {
        book.decreaseQuantityBy(1);
      let newReaderBook = new ReaderBook(
        book.title,
        book.author,
        "2020-16-06",
        false
      );
      return newReaderBook;
    }
    throw new Error("There is no book or reader in the library");
  }
}




// let firstBook = new ReaderBook(
//   "Harry Potter and the Philosophers Stone",
//   " J. K. Rowling",
//   "2020-06-07",
//   true
// );
// //console.log(readerBook)
// let secondBook = new ReaderBook(
//   "Harry Potter and the Deathly Hallows",
//   " J. K. Rowling",
//   "2020-05-07",
//   false
);

// let reader1 = new Reader("Naira", "Yeghiazaryan", [firstBook, secondBook]);
// let reader2 = new Reader("Name", "Surname", []);
// let libraryBook1 = new LibraryBook(
//   "Harry Potter and the Philosophers Stone",
//   " J. K. Rowling",
//   5
// );
// let libraryBook2 = new LibraryBook(
//   "Harry Potter and the Deathly Hallows",
//   " J. K. Rowling",
//   1
// );
// let myLibrary = new Library([libraryBook1, libraryBook2], [reader1, reader2]);

// let book = new Book(
//   "Harry Potter and the Philosophers Stone",
//   " J. K. Rowling"
// );
// let book2 = new Book("Title", "Author");

//console.log(myLibrary.addBook(book))

// console.log(myLibrary.doHaveBook(book))// true
// console.log(myLibrary.doHaveBook(book2))// false
// console.log(reader2.borrowBook(book, myLibrary));
// console.log(reader2.books)
// console.log(myLibrary.addBooks([book2,book]))
// console.log(reader2.readerId)
// console.log(myLibrary.checkReaderId(2))
// console.log(myLibrary.lendBook(libraryBook1, 1))
//console.log(myLibrary.lendBook(libraryBook1, 1))
//console.log(libraryBook1)

