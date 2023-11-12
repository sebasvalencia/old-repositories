var mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var contactusSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        default: '',
        required: false
    },
    telnumber: {
        type: String,
        default: '',
        required: false
    },
    email: {
        type: String,
        default: '',
        required: false
    },
    comments: {
        type: String,
        default: '',
        required: false
    }
});

var Contactus = mongoose.model('Contactus', contactusSchema);

module.exports = Contactus;