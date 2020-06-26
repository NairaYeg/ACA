 class Person {
  constructor(firstName, lastName, gender, age) {
      this._firstName = firstName,
      this._lastName = lastName,
      this._gender = gender,
      this._id = Person.generatenewid(),
      this._age = age;
  }

  static id = 0;
  static generatenewid() {
    return Person._id++;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(fname) {
    const normalized = fname.trim();
    if (normalized === "") {
      throw new Error("Empty value");
    }
    return (this._firstName = fname);
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lname) {
    const normalized = lname.trim();
    if (normalized === "") {
      throw new Error("Empty value");
    }
    return (this._lastName = lname);
  }

    get gender() {
     return this._gender
  }

  set  gender(nalue) {
    if (
      this.value.trim().toLowerCase() === "male" ||
      this.value.trim().toLowerCase() === "female"
    ) {
       this._gender = value.trim().toLowerCase();
    } else {
      throw new Error(`${this._gender} is not valid`);
    }
  }


  get age() {
    return this._age;
  }

  set age(number) {
    if (Number(isNaN(number)) || number < 0) {
      throw new Error(
        `${number} is not valid. Age must be the whole positive number!`
      );
    }
    this._age = number;
  }
  
  toString() {
    return `${this.firstName} ${this.lastName},\n${this.age} years old.`;
  }
}

let user1 = new Person("Naira", "Yeghiazaryan", "female", 23);
//console.log(user1.toString())






