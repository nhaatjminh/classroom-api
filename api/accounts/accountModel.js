const db = require("../../database");

const Account = (acc) => {
    this.username = acc.username;
    this.password = acc.password;
}

Account.getInfoByUserId = (id) => db.execute(
    `SELECT * 
     FROM accounts
     WHERE id = '${id}'`);

Account.getAccounts = () => db.execute(
    "SELECT *" 
    + "FROM accounts");

Account.createAccount = (accObj) => db.execute(
    "INSERT INTO accounts (username, password, googleID, facebookID, email) "
    + `VALUES ('${accObj.username}', '${accObj.password}', '${accObj.googleID}', '${accObj.facebookID}', '${accObj.email}')`);

Account.updateInfoForOneField = (field, infor, idOfobj) => db.execute(
    `UPDATE accounts SET ${field}='${infor}' WHERE id = '${idOfobj}'`);

Account.updateInfo = (userinfo) => db.execute(
    `UPDATE accounts
     SET name ='${userinfo.name}', phone ='${userinfo.phone}', address ='${userinfo.address}', studentID ='${userinfo.studentId}'
     WHERE id = '${userinfo.id}'`);

Account.checkExistedByStudentId = (studentId) => db.execute(
    `SELECT 1
     FROM accounts
     WHERE studentID = '${studentId}'`);

module.exports = Account;