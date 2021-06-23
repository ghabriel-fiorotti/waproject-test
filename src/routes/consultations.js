const express = require('express');
const router = express.Router();
const ConsultationsController = require('../controllers/ConsultationsController');

router.post('/insert/:idExam', ConsultationsController.insert);
router.delete('/remove', ConsultationsController.remove);

module.exports = router;