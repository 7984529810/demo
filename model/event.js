const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
   EventName : {
        type : String,
        required : true
   },
   EventDate : {
        type : String,
        required : true
   },
   EventTicket : {
        type : String,
        required : true
   },
   userID : {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'user' 
   }
});

const EVENT = mongoose.model('event',eventSchema)

module.exports = EVENT