const express = require('express');
const router = express.Router();
const ExamsController = require('../controllers/ExamsController');

router.get('/', ExamsController.list);
router.post('/insert', ExamsController.insert);
router.put('/update', ExamsController.update);
router.delete('/delete', ExamsController.delete);

module.exports = router;
