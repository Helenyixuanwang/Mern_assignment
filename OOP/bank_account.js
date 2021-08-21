class BankAccount {
    constructor(intRate, balance=0) { // don't forget to add some default values for these parameters!
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