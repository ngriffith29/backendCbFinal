const mongoose = require('mongoose')

const forgotModel = new mongoose.Schema({


    assetTag: {
        type: Number,
        required: true
    },
  








})


module.exports = mongoose.model('forgotModel' ,forgotModel)