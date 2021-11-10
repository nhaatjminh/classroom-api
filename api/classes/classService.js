const classesModel = require('./classModel');

exports.list = () => classesModel.getClasses();
exports.create = (name) => classesModel.addClass(name);
