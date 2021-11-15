const classService = require('./classService');
const classMemberService = require('./classMemberService');
const authorization = require('../../modules/authorization');
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');
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

exports.getMember = async (req, res) => {
    const id = req.params.id;
    const teachers = await classService.getMembersByClassId(id, 'teacher');
    const students = await classService.getMembersByClassId(id, 'student');

    if (teachers || students) {
        var result = {
            teachers: teachers,
            students: students
        }
        res.status(201).json(result);
    }
    else {
        res.status(404).json({message: "No data!"});
    }
}

exports.invitelink = async function(req,res) {
    
    const classes = await classService.list(req.params.id);
    
    if (classes) {
        const token= jwt.sign({
            id: req.params.id
        }, 'secret', {
            expiresIn: '24h'
        })
        let url = 'http://best-classroom-ever.herokuapp.com/classes/acceptlink/'+ token;
        res.status(200).json(url);
    } else {
        res.status(404).json({message: 'No classes available!'});
    }
}
exports.acceptlink = async function(req,res) {
    const linkid = req.params.tokenlink;
    const payloadidclass = jwt_decode(linkid);
    const idacc = req.params.tokenid;
    const payloadIDAcc = jwt_decode(idacc);
    
    const exist = await classMemberService.findOneAcc(payloadIDAcc.id, payloadidclass.id);
    if (exist.length <= 0) {
        await classMemberService.addClassMember(payloadidclass.id,payloadIDAcc.id,'student');
        return res.json("success");
    } else {
        res.json("Account Exists in class");
    }
    
}