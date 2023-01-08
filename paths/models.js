const mongoose = require('mongoose');

const InstitutSchema = mongoose.Schema({
    _id: {type: String, required: true},
    id: {type: String, required: true},
    flors: {type: Array, required: true},
    stairs: {type: Array, required: true}
});

const model = mongoose.model('Institut', InstitutSchema)
module.exports.model = model