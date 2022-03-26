const mongooose = require('mongoose');

const chartSchema = new mongooose.Schema({
    topic: String,
    type: String,
    labels: [],
    thresholds: []
})

const chartModel = mongooose.model('Chart', chartSchema);
module.exports = chartModel;

