const { request } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
    analyticsName : {
        type : String,
        required : true
    },
    AllAnalytics : {
        type : String,
        required : true
    },
    // eventID : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user' 
    //   },
    // createAt : {
    //     type : Date,
    //     default : Date.now
    // }
    
});

const ANALYTICS  = mongoose.model('analytics',analyticsSchema)

module.exports = ANALYTICS