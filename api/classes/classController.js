const classService = require('./classService');

exports.list = async function(req, res) {

    // req.user.id
    const classes = await classService.list();

    if (classes) {
        res.status(200).json(classes);
    } else {
        res.status(404).json({message: 'No classes available!'});
    }
};

exports.detail = function(req,res) {
    const id = req.params.id;
    classService.detail(parseInt(id), (result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "The class with the given ID wasn't found"});
        }
    });
}
exports.create = async function(req, res) {
    const result = await classService.create(req.body.name);

    if (result) {
        res.status(201).json({message: 'Class created!', id: result.insertId});
    } else {
        res.status(500).json({message: 'Error creating class!'});
    }
};