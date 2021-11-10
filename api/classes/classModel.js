const db = require("../../database");

exports.getClasses = () => db.execute(
    "SELECT *" 
    + "FROM classes");

exports.addClass = (name) => db.execute(
    "INSERT INTO classes (name) "
    + `VALUES ('${name}')`);
