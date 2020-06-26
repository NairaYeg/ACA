class Person {
    constructor(fname, lname, gender, age) {
      (this._fname = fname),
        (this._lname = lname),
        (this._gender = gender),
        (this._age = age);
    }
  
    get fname() {
      return this._fname;
    }
  
    set fname(value) {
      let normalized = value.trim();
      if ((normalized = " ")) {
        throw new Error("Empty value");
      }
      return (this._fname = value);
    }
  
    get lname() {
      return this._lname;
    }
  
    set lname(value) {
      let normalized = value.trim();
      if ((normalized = " ")) {
        throw new Error("Empty value");
      }
      return (this._lname = value);
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      if (Number.isNaN(value)) {
        throw new Error(`${this.value} should be a positive integer`);
      }
      return (this._age = value);
    }
  
    get gender() {
      return this._gender;
    }
  
    toString() {
      return `${this.fname} ${this.lname}\n${this.age} years old.`;
    }
  }
  
  // let naira = new Person("Naira", "Yeghiazaryan", "female", 23);
  // console.log(naira.toString())
  // console.log(naira);
  // naira.age = "20";
  // console.log(naira.age)
  
  class Student extends Person {
    constructor(fname, lname, gender, age, program, year, fee) {
      super(fname, lname, gender, age),
        (this._program = program),
        (this._year = year),
        (this._fee = fee),
        (this.passedExams = program.map((p) => ({
          name: p,
          grade: 0,
        })));
    }
  
    get program() {
      return this._program;
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      if (Number(isNaN(value))) {
        throw new Error(`${this.value} should be a positive integer`);
      }
      return (this._year = value);
    }
  
    get fee() {
      return this._fee;
    }
  
    passExam(programs, grade) {
      this.passedExams = this.passedExams.map((p) => {
        if (p.name === programs) {
          p.grade = grade;
        }
        return p;
      });
      let allpassed = this.passedExams.every((p) => p.grade > 50);
      if (allpassed) {
        this.year += 1;
      }
    }
  
    toString() {
      return `Student-${this.fname} ${this.lname}\nYear-${this.year}`;
    }
  }
  
  let student = new Student(
    "Naira",
    "Yeghiazaryan",
    "female",
    23,
    ["math", "physics", "history"],
    2020,
    1000
  );
  // console.log(student);
  //console.log(student.passExam(student.program, 60));
  // console.log(student.toString());
  // student.passExam("history", 60);
  // student.passExam("math", 60);
  // student.passExam("physics", 60);
  // console.log(student.year);
  
  // console.log(student.year)
  
  
  