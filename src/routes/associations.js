const express = require('express');
const router = express.Router();
const AssociationsController = require('../controllers/AssociationsController');

router.get('/list/:exam', AssociationsController.list);
router.post('/insert/:idExam', AssociationsController.insert);
router.delete('/remove', AssociationsController.remove);

module.exports = router;