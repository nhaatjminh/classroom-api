const express = require('express');
const router = express.Router();

const classController = require('./classController')

/* GET classes listing. */
router.get('/', classController.list);

/* POST create class. */
router.post('/', classController.create);
router.get('/detail/:id', classController.detail);
module.exports = router;