const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
     peopleFlow : {
        type : String,
        required : true
     },
     budget : {
        type : String,
        required : true
     },
     speaker : {
        type: String,
        required : true
     },
     eventID : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user' 
    }
});

const SESSION  = mongoose.model('session',sessionSchema)

module.exports = SESSION