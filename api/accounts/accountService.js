const accountsModel = require('./accountModel');

exports.list = () => accountsModel.getAccounts();
exports.findAcc = async (username) => {
    var accs = await accountsModel.getAccounts();
    return accs.find(acc => acc.username == username);
}
exports.create = (accObj) => accountsModel.createAccount(accObj);
