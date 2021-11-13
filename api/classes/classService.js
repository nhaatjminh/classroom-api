const classesModel = require('./classModel');

exports.list = () => classesModel.getClasses();
exports.create = (name) => classesModel.addClass(name);

exports.detail = (id, callback) => classesModel.getClasses().then(function(results) {
    var result = results.find(c => c.id === id);
    callback(result);
})
