class User {
    constructor(username, emailAddress) {  // now our method has 2 parameters!        
        this.name = username	           // and we use the values passed in to set the name attribute        
        this.email = emailAddress	   // and the email attribute        
        this.account = new BankAccount(0.02, 0);
    }
makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
    this.account.deposit(amount);   // the specific user's account increases by the amount of the value received
    return this;
    
}
makeWithdrawal (amount) {
    this.account.withdraw(amount);
    return this;
}

displayBalance() {
    console.log(this.name +" balance is " +this.account.balance);
    return this;
}
//BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
// transferMoney(receiver, amount) {
//     console.log(this.name+" is transferring "+amount+" to "+receiver.name)
//     this.accountBalance -= amount;
//     receiver.accountBalance += amount;
//     this.displayBalance();
//     receiver.displayBalance();
//     return this;
// }
}

//bank account class below
class BankAccount {
    constructor(intRate=0.01, balance=0) { // don't forget to add some default values for these parameters!
    	// your code here! (remember, this is where we specify the attributes for our class)
	// don't worry about user info here; we'll involve the User class soon
    this.rate = intRate;
    this.balance = balance;
    }
    deposit(amount) {
	// your code here
    this.balance += amount;
    console.log(`Deposit $${amount}`)
    return this;
    }
    withdraw(amount) {
	// your code here
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdral $${amount}`);
        
    }
    else {
        console.log("Insufficient funds: Charging a $5 fee");
        this.balance -= 5;
    }
    return this;
    }
    displayAccountInfo() {
	// your code here
    console.log(`Balance: $${this.balance}`)
    }
    yieldInterest() {
	// your code here
    if (this.balance > 0 ) {
        console.log(`Interest $${this.balance}*${this.rate} is generated `)
    }
    return this;
    }
}

//To the first account, make 3 deposits and 1 withdrawal, then calculate interest and display the account's info all in one line of code (i.e. chaining)
account1 = new BankAccount(0.01)
account1.deposit(100).deposit(50).deposit(50).withdraw(50).displayAccountInfo();

//To the second account, make 2 deposits and 4 withdrawals, then calculate interest and display the account's info all in one line of code (i.e. chaining)
account2 = new BankAccount(0.02)
account2.deposit(50).deposit(50).withdraw(40).withdraw(30).withdraw(20).withdraw(20).displayAccountInfo();

//Create a BankAccount class with the attributes interest rate and balance  Add a deposit method to the BankAccount class  Add a withdraw method to the BankAccount class  Add a displayAccountInfo method to the BankAccount class  Add a yieldInterest method to the BankAccount class  Create 2 accounts  To the first account, make 3 deposits and 1 withdrawal, then calculate interest and display the account's info all in one line of code (i.e. chaining)  To the second account, make 2 deposits and 4 withdrawals, then calculate interest and display the account's info all in one line of code (i.e. chaining)


const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const cindy = new User ("Cindy apple", "cindy@apple.com");
console.log(guido.name);	// output: Guido van Rossum


//Have the first user make 3 deposits and 1 withdrawal and then display their balance
console.log("First user is "+ guido.name);
guido
    .makeDeposit(100)
    .makeDeposit(200)
    .makeDeposit(50)
    .makeWithdrawal(40)
    .displayBalance()
    // .transferMoney(cindy,10);

//Have the second user make 2 deposits and 2 withdrawals and then display their balance
console.log("Second user is "+monty.name);
monty
    .makeDeposit(50)
    .makeDeposit(50)
    .makeWithdrawal(30)
    .makeWithdrawal(20)
    .displayBalance();

//Have the third user make 1 deposits and 3 withdrawals and then display their balance
console.log("Third user is "+ cindy.name);
cindy
    .makeDeposit(200)
    .makeWithdrawal(50)
    .makeWithdrawal(50)
    .makeWithdrawal(50)
    .displayBalance();
    
    




