const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

router.get('/', salaController.home);
router.get('/manutSalaDeAula', salaController.manutSalaDeAula);

module.exports = router;
