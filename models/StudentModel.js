const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({


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
    }








})


module.exports = mongoose.model('student' ,studentSchema)