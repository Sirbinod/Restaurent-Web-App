const mongoose = require('mongoose');
const validator = require('validator');

const bookTableSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: [true, 'please enter your full name'],
        trim: true
    },
    Phone:{
        type: Number,
        required: [true, 'please enter your phone number'],
        min: [10, 'please enter 10 digit number'],
    },
    Email:{
        type:String,
        required: [true, 'please enter your email.'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        }
    },
    BookDate:{
        type: Date,
        required: [true, 'please enter date'],

    },
    NumberOfGuests:{
        type: Number,
        required: [true, 'please enter guests number']
    },
    Comments:{
        type: String
    }
},{
    timestamps:true
});
module.exports = mongoose.model('Customer', bookTableSchema);