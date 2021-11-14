const classService = require('./classService');
const classMemberService = require('./classMemberService');
const authorization = require('../../modules/authorization');

exports.list = async function(req, res) {
    const classes = await classService.list(req.user.id);

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
    const userRoll = "teacher";
    const createClassResult =  await classService.create(req.body.name, req.user.id, req.body.description);
    
    if (createClassResult) {
        const addClassMemberResult =  await classMemberService.addClassMember(createClassResult.insertId, req.user.id, userRoll);

        if(addClassMemberResult) {
            res.status(201).json({message: 'Class created! Member added!', id: createClassResult.insertId});
        } else {
            res.status(404).json({message: "Error add member to class!"});
        }

    } else {    
        res.status(500).json({message: 'Error creating class!'});
    }
};