const express = require('express');
const router = express.Router();
const LaboratoriesController = require('../controllers/LaboratoriesController');

router.get('/', LaboratoriesController.list);
router.post('/insert', LaboratoriesController.insert);
router.put('/update', LaboratoriesController.update);
router.delete('/delete', LaboratoriesController.delete);

module.exports = router;

