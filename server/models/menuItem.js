const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: [true, "empty food name"],
        unique: true
    },
    Description:{
        type: String,
        required: [true, 'write description'],
        minlength: [10, 'Minimum 10']
    },
    Price:{
        type:Number,
        required: [true, 'most include price']
    },
    Catagory:{
        type: String,
        required: [true, 'most include']
    }
},
{timestamps:true});

module.exports = mongoose.model('Menu', menuItemSchema);