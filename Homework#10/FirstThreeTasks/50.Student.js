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

//let user1 = new Person("Naira", "Yeghiazaryan", "female", 23);
//console.log(user1.toString())



class Studend extends Person {
  constructor(firstName, lastName, gender, age, programName, year, fee) {
    super(firstName, lastName, gender, age);
       this._programName = programName,
       this._year = year,
       this._fee = fee,
       this.passedExams = program.map((p) => ({
        name: p,
        grade: 0,
      }));
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (Number(isNaN(value)) || value < 0) {
      throw new Error(
        `${value} is not valid. Year must be the whole positive number!`
      );
    }
    this._year = value;
  }

  get fee() {
    return this._year;
  }

  set fee(value) {
    if (Number(isNaN(value)) || value < 0) {
      throw new Error(`${value} is not valid. `);
    }
    this._fee = value;
  }

  passExam(name, grade) {
    this.passedExams = this.passedExams.map((p) => {
      if (p.name === name) {
        return {
          name,
          grade,
        };
      }

      return p;
    });

    const isAllPassed = this.passedExams.every((p) => p.grade > 50);

    if (isAllPassed) {
      this.year = this.year + 1;
    }
  }
  
   toString(){
     return `Student\n${this.firstName} ${this.lastName} ${this.age} years old`;
   }
}

