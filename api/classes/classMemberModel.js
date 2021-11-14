const db = require("../../database");

exports.addClassMember = (classId, memberId, roll) => db.execute(
    "INSERT INTO class_accounts (id_class, id_account, role) "
    + `VALUES ('${classId}', '${memberId}', '${roll}')`);