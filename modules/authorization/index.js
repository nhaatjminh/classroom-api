const classService = require('../../api/classes/classService');

exports.teacherAuthority = async(req, res, idClass) => {
    const username = req.user.username;
    if (!username) {
        return false;
    }

    classService.isCreatorOfClass(username, idClass, (result) => {
      return result;
  });
};

