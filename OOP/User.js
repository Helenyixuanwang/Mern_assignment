class User {
    constructor(username, emailAddress) {  // now our method has 2 parameters!        
        this.name = username	           // and we use the values passed in to set the name attribute        
        this.email = emailAddress	   // and the email attribute        
        this.accountBalance = 0		   // the account balance is set to $0, so no need for a third parameter
    }
makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
    this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    
}
makeWithdrawal (amount) {
    this.accountBalance -= amount;
}

displayBalance() {
    console.log(this.name +" balance is " +this.accountBalance);
}
//BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
transferMoney(receiver, amount) {
    console.log(this.name+" is transferring "+amount+" to "+receiver.name)
    this.accountBalance -= amount;
    receiver.accountBalance += amount;
    this.displayBalance();
    receiver.displayBalance();
}
}


const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const cindy = new User ("Cindy apple", "cindy@apple.com");
console.log(guido.name);	// output: Guido van Rossum


//Have the first user make 3 deposits and 1 withdrawal and then display their balance
console.log("First user is "+ guido.name);
guido.makeDeposit(100);
guido.makeDeposit(200);
guido.makeDeposit(50);
guido.makeWithdrawal(40);
guido.displayBalance();

//Have the second user make 2 deposits and 2 withdrawals and then display their balance
console.log("Second user is "+monty.name);
monty.makeDeposit(50);
monty.makeDeposit(50);
monty.makeWithdrawal(30);
monty.makeWithdrawal(20);
monty.displayBalance();

//Have the third user make 1 deposits and 3 withdrawals and then display their balance
console.log("Third user is "+ cindy.name);
cindy.makeDeposit(200);
cindy.makeWithdrawal(50);
cindy.makeWithdrawal(50);
cindy.makeWithdrawal(50);
cindy.displayBalance();

guido.transferMoney(cindy,10);



