const db = require("../../database");

exports.getClasses = () => db.execute(
    "SELECT *" 
    + "FROM classes");

exports.getClassesByUserId = (userId) => db.execute(
    "SELECT A.id, A.name, A.creator, A.description " 
    + "FROM classes as A JOIN class_accounts as B ON A.id = B.id_class "
    + `WHERE B.id_account = '${userId}'`);

exports.addClass = (name, userId, description) => db.execute(
    "INSERT INTO classes (name, creator, description) "
    + `VALUES ('${name}', '${userId}', '${description?? null}')`);

exports.getCreatorByClassId = (classId) => db.execute(
    "SELECT creator " 
    + "FROM classes "
    + `WHERE id = '${classId}'`);

exports.getMembersByClassId = (classId, role) => db.execute(
    "SELECT acc.id, acc.name "
    + "FROM accounts as acc JOIN class_accounts as ca "
    + "ON acc.id = ca.id_account "
    + `WHERE ca.role = '${role}' and ca.id_class = ${classId}`
);    