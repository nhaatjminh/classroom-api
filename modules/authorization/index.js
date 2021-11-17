const accountService = require('../../api/accounts/accountService');

exports.teacherAuthority = async(req, res, idClass) => {
    const id = req.user.id;
    if (!id) {
        return false;
    }

    const result = accountService.isTeacherOfCLass(id, idClass);
    return (result.role === "teacher");
};

