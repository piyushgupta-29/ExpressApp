const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    data: {
        type: Number,
        default:Math.random
    },
    date: {
        type: Date,
        default:Date.now
    }
})

const User = mongooose.model('USER', userSchema);
module.exports = User;

