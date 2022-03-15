const express = require('express');
const router = express.Router();
const { get_devices, add_device, get_variable, add_variable, get_charts, delete_device } = require('../controllers/controller');

router.get('/getDevices', get_devices);

router.post('/addDevice', add_device);

router.post('/deleteDevice',delete_device);

router.post('/getVariables',get_variable);

router.post('/addVariable',add_variable);

router.get('/getCharts',get_charts);

module.exports = router;