// const student = {
//   name: "Abhishek",
//   age: 23,
//   course: "Web Development",
  
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// };

// student.greet(); // Output: Hello, my name is Abhishek.

// class Car {
//   constructor(brand, model,price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   showDetails() {
//     console.log(`Car: ${this.brand} ${this.model} and its price is ${this.price}`);
//   }
// }

// const car1 = new Car("BMW", "X5",1000000);
// const car2 = new Car("Audi", "A6",30000000);

// car1.showDetails(); // Output: Car: BMW X5
// car2.showDetails(); // Output: Car: Audi A6


//Encapsulation

class BankAccount {
  #balance = 0; // 1. Ye private field hai

  deposit(amount) {   // 2. Public method
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {  // 3. Public method
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }

  getBalance() {      // 4. Public method
    return this.#balance;
  }
}

// 5. Object creation
const myAccount = new BankAccount();

// 6. Deposit money
myAccount.deposit(1000); // Deposited: 1000

// 7. Withdraw money
myAccount.withdraw(500); // Withdrawn: 500

// 8. Check balance
console.log("Balance:", myAccount.getBalance()); // Balance: 500

// 9. Direct access attempt
// console.log(myAccount.#balance); // ❌ Error: Private field


//Abstraction

class CoffeeMachine {
  makeCoffee(type) {       // Public method → user ke liye
    this.#boilWater();      // Internal step
    this.#addCoffeePowder();
    this.#addMilk();
    console.log(`${type} is ready! Enjoy ☕`);
  }

  // Private methods → hidden from user
  #boilWater() {
    console.log("Boiling water...");
  }

  #addCoffeePowder() {
    console.log("Adding coffee powder...");
  }

  #addMilk() {
    console.log("Adding milk...");
  }
}

// User usage:
const machine = new CoffeeMachine();
machine.makeCoffee("Cappuccino");  

// Output:
// Boiling water...
// Adding coffee powder...
// Adding milk...
// Cappuccino is ready! Enjoy ☕
