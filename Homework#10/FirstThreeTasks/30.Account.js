class Account {
  constructor(name, balance) {
    (this.id = Account.generateNewId()),
      (this._name = name),
      (this._balance = balance);
  }
  static id = 0;
  static generateNewId() {
    return Account.id++;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    const normalized = value.trim();
    if (normalized === " ") {
      throw new Error("Empty value");
    }
    this._name = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Number(isNaN(value))) {
      throw new Error(`${value} should be a number`);
    }
    this._balance = value;
  }

  credit(amount) {
    let newBalance = this.balance + amount;
    this._balance = newBalance;
    return newBalance;
  }

  debit(amount) {
    if (amount > this.balance) {
      return amount - this.balance;
    }
    throw new Error("Amount exceeded balance.");
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this.balance) {
      anotherAccount.balance = anotherAccount.balance + amount;
      let newBalance = this.balance - amount;
      this.balance = newBalance;
      return this.balance;
    }
    throw new Error("Amount exceeded balance.");
  }

  static identifyAccounts(accountFirst, accountSecond) {
    let firstAccountValues = Object.values(accountFirst);
    let secondAccountValues = Object.values(accountSecond);
    if (firstAccountValues.join("") === secondAccountValues.join("")) {
      return true;
    }
    return false;
  }
  
  toString() {
    return `${this.name}'s account balance is $${this.balance}. `;
  }
}

let user1 = new Account("Harry", 2000);
let user2 = new Account("Emma", 1000);
// console.log(user1);
// console.log(user2);
// console.log(user1.balance);
// console.log(user1.credit(400));
// console.log(user1.balance);
// console.log(user1.debit(9000));
// console.log(user1.transferTo(user2, 1000));
// console.log(user1.balance);
// console.log(user2.balance);
// let anotherUser = user1;
// console.log(Account.identifyAccounts(user1, anotherUser))//true
// console.log(Account.identifyAccounts(user1, user2))//false
// console.log(user1.toString())
