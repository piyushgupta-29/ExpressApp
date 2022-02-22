const express = require('express');
const { second_api, fourt_api, first_api, third_api } = require('../controllers/controller');
const router = express.Router();

router.get('/api/1', first_api);

router.get('/api/2', second_api);

router.get('/api/3', third_api);

router.get('/api/4', fourt_api);

module.exports = router;