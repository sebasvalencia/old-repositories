var mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var liabilitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    bank: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: '',
        required: false
    },
    acquisitionDate: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        default: '',
        required: false
    },
    monthlyPayment: {
        type: Number,
        default: '',
        required: false
    },
    interests: {
        type: Number,
        default: '',
        required: false
    }
});

var Liabilities = mongoose.model('Liabilities', liabilitiesSchema);

module.exports = Liabilities;