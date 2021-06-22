const express = require('express');
const router = express.Router();
const ExamsController = require('../controllers/ExamsController');

router.get('/', ExamsController.list);
router.post('/insert', ExamsController.insert);
router.put('/update/:id', ExamsController.update);
router.delete('/delete/:id', ExamsController.delete);

module.exports = router;
