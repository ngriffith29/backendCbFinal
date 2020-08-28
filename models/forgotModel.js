const mongoose = require('mongoose')

const forgotModel = new mongoose.Schema({
    email: {
        type: String,
        required: true

    },
    grade: {
        type: String,
        required: true
    },

    assetTag: {
        type: Number,
        required: true
    },
  








})


module.exports = mongoose.model('forgotModel' ,forgotModel)