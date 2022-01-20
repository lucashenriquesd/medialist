var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.index);
router.get('/:id', user_controller.show);
router.post('/', user_controller.store);
// router.put('/users/:id', );
// router.delete('/users/:id', );

module.exports = router;
