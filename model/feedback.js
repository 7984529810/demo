const { request } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    id : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    information : {
        type : String,
        required : true
    },
    eventID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
      }
});

const FEEDBACK  = mongoose.model('feedback',feedbackSchema)

module.exports = FEEDBACK