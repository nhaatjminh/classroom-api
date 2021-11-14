const express = require('express');
const router = express.Router();
const passport = require('../../modules/passport')
const accountController = require('./accountController')

/* GET classes listing. */
router.get('/', accountController.list);

/* POST create account. */
router.post('/', accountController.create);

/* GET user infor. */
router.get('/:id', accountController.getInfo);

/* POST update user info. */
router.post('/update', passport.authenticate('jwt', {session: false}), accountController.update);
  
module.exports = router;