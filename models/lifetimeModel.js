const mongoose = require('mongoose')

const lifeTimeModel = new mongoose.Schema({


    assetTag: {
        type: Number,
        required: true
    },
    brokeReason: {
        type: String,
        required: true
      
    },
    grade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }







})


module.exports = mongoose.model('lifetimemodel' ,lifeTimeModel)