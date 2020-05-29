//Modelo de publicacinoes laborales
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        minlength: 4,

    },
    placeOfBirth: {
        type: String,
        trim: true,
        minlength: 4,

    },
    bloodType: {
        type: String,
        trim: true,
        minLength: 2,
    },
    weight: {
        type: Number,
        trim: true,
        minLength: 1,
    },
    height: {
        type: Number,
        trim: true,
        minLength: 1,
    },
    emergencyName: {
        type: String,
        trim: true,
        minLength: 1,
    },
    emergencyNumber: {
        type: Number,
        trim: true,
        minLength: 1,
    },
    dateOfBirth: {
        type: String,
        trim: true,
        minLength: 1,
    },
    age: {
        type: String,
        trim: true,
        minLength: 1,
    },
    weightPounds: {
        type: Number,
        trim: true,
        minLength: 1,
    },

    email: {
        type: String,
        trim: true,
        minLength: 1,
    },

    password: {
        type: String,
        trim: true,
        minLength: 1,
    }



})

const Data = mongoose.model('Data', DataSchema)

module.exports = Data;