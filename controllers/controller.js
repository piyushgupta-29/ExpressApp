let devices = require('../models/deviceModel');
let charts = require('../models/chartModel');

exports.get_charts = async(req, res) => {
    try{
        let chart = await charts.find({});
        res.send(chart);
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}

exports.add_chart = async(req,res) => {
    try{
        let newChart = await charts.insertOne({ 
            topic: req.body.topic,
            type: 'Bar',
            labels: [],
            thresholds: []
        });
        res.status(201).send('Chart inserted');
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}

exports.get_devices = async(req, res) => {
    try{
        let device = await devices.find({});
        res.send(device);
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}

exports.add_device = async(req,res) => {
    try{
        // let newDevice = await devices.insertOne({ name: req.body.device });
        const newDevice = new devices({
            name: req.body.device,
            var_names: [],
            var_units: []
          });
        await newDevice.save();
        res.status(201).send('Device inserted');
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}

exports.delete_device = async(req,res) => {
    try {
        await devices.findOneAndDelete({ _id: req.body.did })
        res.status(200).send('deleted successful');
    } catch (error) {
        res.status(404).send('could not delete device');
    }
}
                                                                 
exports.get_variable = async(req,res) => {
    try{
        let variables = await devices.findOne({_id: req.body.id});
        res.send(variables);
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}

exports.add_variable = async(req,res) => {
    try{
        let data = await devices.updateOne({_id: req.body.id}, 
        { $push: {var_names: req.body.varName , var_units: req.body.unitName } } );
        res.send(data);
    }
    catch(err){
        res.status(404).send('could not get data');
    }
}
