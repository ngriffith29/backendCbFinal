const mongoose = require('mongoose')

const forgotModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },

    assetTag: {
        type: Number,
        required: true
    },
  








})


module.exports = mongoose.model('forgotModel' ,forgotModel)