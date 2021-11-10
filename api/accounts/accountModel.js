const db = require("../../database");

const Account = (acc) => {
    this.username = acc.username;
    this.password = acc.password;
}

Account.getAccounts = () => db.execute(
    "SELECT *" 
    + "FROM accounts");

Account.createAccount = (accObj) => db.execute(
    "INSERT INTO accounts (username, password) "
    + `VALUES ('${accObj.username}', '${accObj.password}')`);


module.exports = Account;