const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketingSchema = new Schema({
    ticketNo : {
        type : String,
        required : true
    },
    ticketPrice : {
        type : String,
        required : true
    },
    ticketType : {
        type : String,
        required : true
    },
    eventID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
      }
});

const TICKETING = mongoose.model('ticketing',ticketingSchema)

module.exports = TICKETING