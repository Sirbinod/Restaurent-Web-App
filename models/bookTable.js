const mongoose = require('mongoose');

const bookTableSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true,
    },
    Phone:{
        type: Number,
        required:true,
    },
    Email:{
        type:String,
    },
    BookDate:{
        type: Date,
        required:true
    },
    NumberOfGuests:{
        type: Number,
        required:true
    },
    Comments:{
        type: String
    }
},{
    timestamps:true
});
module.exports = mongoose.model('Customer', bookTableSchema);