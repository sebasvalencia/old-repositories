var mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var assetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    bank: {
        type: String,
        required: true
    },
    investmentValue: {
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
    rate: {
        type: Number,
        default: '',
        required: false
    },
    valueShare: {
        type: Number,
        default: '',
        required: false
    },
    numberShare: {
        type: Number,
        default: '',
        required: false
    }
});

var Asset = mongoose.model('Asset', assetsSchema);

module.exports = Asset;