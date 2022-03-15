const express = require('express');
const router = express.Router();
const { get_devices, add_device, get_variable, add_variable, get_charts, delete_device, add_chart } = require('../controllers/controller');

router.get('/getCharts',get_charts);

router.post('/addChart',add_chart);

router.get('/getDevices', get_devices);

router.post('/addDevice', add_device);

router.post('/deleteDevice',delete_device);

router.post('/getVariables',get_variable);

router.post('/addVariable',add_variable);

module.exports = router;