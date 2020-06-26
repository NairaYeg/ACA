function Person(fname, lname, gender, age) {
    this._fname = fname,
    this._lname = lname,
    this._gender = gender,
    this._age = age;

 Object.defineProperties(this, {
   fname: {
     get() {
       return this._fname;
     },

     set(value) {
       if (value.trim() === "") {
         throw new Error("Invalid value");
       }
       this._fname = value;
     },
   },

   lname: {
     get() {
       return this._lname;
     },

     set(value) {
       if (value.trim() === "") {
         throw new Error("Invalid value");
       }
       this._lname = value;
     },
   },

   age: {
     get() {
       return this._age;
     },

     set(value) {
       if (Number.isNaN(value)) {
         throw new Error(`${this.value} should be a positive integer`);
       }
       return (this._age = value);
     },
   },

   gender: {
     get() {
       return this._gender;
     },
   },
 });
}

Person.prototype.toString = function toString() {
 return `${this.fname} ${this.lname}\n${this.age} years old.`;
};

// let naira = new Person("Naira", "Yeghiazaryan", "female", 23);
// console.log(naira.toString())
// console.log(naira);
// naira.age = "20";
// console.log(naira.age);

function Student(fname, lname, gender, age, programs, year, fee) {
   this._fname = fname,
   this._lname = lname,
   this._gender = gender,
   this._age = age,
   this._programs = programs,
   this._year = year,
   this._fee = fee,
   this._passedExams = programs.map((p) => {
     return {
       name: p,
       grade: 0,
     };
   });

 Object.defineProperties(this, {
   fname: {
     get() {
       return this._fname;
     },

     set(value) {
       if (value.trim() === "") {
         throw new Error("Invalid value");
       }
       this._fname = value;
     },
   },

   lname: {
     get() {
       return this._lname;
     },

     set(value) {
       if (value.trim() === "") {
         throw new Error("Invalid value");
       }
       this._lname = value;
     },
   },

   age: {
     get() {
       return this._age;
     },

     set(value) {
       if (Number.isNaN(value)) {
         throw new Error(`${value} should be a positive integer`);
       }
       return (this._age = value);
     },
   },

   gender: {
     get() {
       return this._gender;
     },
   },

   programs: {
     get() {
       return this._programs;
     },
   },

   year: {
     get() {
       return this._year;
     },
     set(value) {
       if (Number.isNaN(value)) {
         throw new Error(`${value} should be a positive integer`);
       }
       this._year = value;
     },
   },

   fee: {
     get() {
       return this._fee;
     },

     set(value) {
       if (Number(isNaN(value))) {
         throw new Error(`${value} should be a positive integer`);
       }
       this._fee = value;
     },
   },

   passedExams: {
     get() {
       return this._passedExams;
     },
   },
 });
}

Student.prototype.__proto__ = Person.prototype;
let student = new Student(
 "Naira",
 "Yeghiazaryan",
 "female",
 23,
 ["math", "physics", "history"],
 2020,
 1000
);
// console.log(Student.prototype.__proto__ === Person.prototype);
// console.log(student.toString());
// console.log(student);
// student.fee = "8";
// console.log(student.fee);
// console.log(student);
// console.log(student.passedExams[0].name)

Student.prototype.passExam = function passExam(program, grade) {
 this.passedExams = this.passedExams.map((p) => {
   if (p.name === program) {
       p.grade = grade;
   }
 });

   let allpassed = this.passedExams.every((p) => p.grade >= 50) ;
   if(allpassed){
     this.year += 1;
   }
};

student.passExam("math", 50);
student.passExam("physics", 50);
student.passExam("history", 50);
console.log(student.year)
