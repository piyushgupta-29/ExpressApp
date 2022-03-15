const mongooose = require('mongoose');

const deviceSchema = new mongooose.Schema({
    name: String,
    var_names: [],
    var_units: []
})

const deviceModel = mongooose.model('Device', deviceSchema);
module.exports = deviceModel;