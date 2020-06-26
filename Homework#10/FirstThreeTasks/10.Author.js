class Author {
  constructor(name, email, gender) {
    (this._name = name), 
    (this._email = email), 
    (this._gender = gender);
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

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");

// console.log(author1.gender);
// console.log(author1.name)
// author1.toString()