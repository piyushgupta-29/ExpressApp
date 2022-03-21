let devices = require('../models/deviceModel');
let charts = require('../models/chartModel');

exports.get_charts = async(req, res) => {
    try{
        let chart = await charts.find({});
        res.send(chart);
    }
    catch(err){
        res.status(404).send('could not get charts');
    }
}

exports.add_chart = async(req,res) => {
    try{
        let newChart = new charts({ 
            topic: req.body.topic,
            type: req.body.type,
            labels: [...req.body.labels],
            thresholds: [...req.body.thresholds]
        });
        await newChart.save();
        res.status(201).send(req.body.labels);
    }
    catch(err){
        res.status(404).send('Chart not inserted');
    }
}

exports.get_devices = async(req, res) => {
    try{
        let device = await devices.find({});
        res.send(device);
    }
    catch(err){
        res.status(404).send('could not get devices');
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
        res.status(404).send('could not add device');
    }
}

exports.delete_device = async(req,res) => {
    try {
        await devices.findOneAndDelete({ _id: req.body.dev_id })
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
        res.status(404).send('could not get variables');
    }
}

exports.add_variable = async(req,res) => {
    try{
        let data = await devices.updateOne({_id: req.body.id}, 
        { $push: {var_names: req.body.varName , var_units: req.body.unitName } } );
        res.send(data);
    }
    catch(err){
        res.status(404).send('could not add variable');
    }
}

exports.delete_variable = async(req,res) => {
    try {
        devices.updateOne({ _id: req.body.id },
        { $pull: { 'software.services': "yahoo" }}
     );
    } catch (error) {
        res.status(404).send('could not delete variable');
    }
}