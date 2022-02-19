const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    data: {
        
    },
    date: {
        type: Date,
        default:Date.now
    }
})

const User = mongooose.model('USER', userSchema);
module.exports = User;

