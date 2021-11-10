const express = require('express');
const router = express.Router();

const accountController = require('./accountController')

/* GET classes listing. */
router.get('/', accountController.list);

/* POST create class. */
router.post('/', accountController.create);
  
module.exports = router;