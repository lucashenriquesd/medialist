var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.index);
router.get('/:uuid', user_controller.show);
router.post('/', user_controller.store);
router.put('/:uuid', user_controller.update);
router.delete('/:uuid', user_controller.delete);

router.post('/login', user_controller.login);

module.exports = router;
