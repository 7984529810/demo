const TICKETING = require('../model/ticketing')


exports.CreateTicket = async function(req, res, next) {
    try {
        req.body.eventID = req.eventID
        // req.body.password = await bcrypt.hash(req.body.password,10)
        let Check = await TICKETING.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Ticket created successfully..!',
            Check,
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}

exports.ViewTicket = async function(req, res, next) {
    try {
        let TicketFind = await TICKETING.find({eventID  : req.eventID}).populate("eventID")
        res.status(201).json({
            status: "success",
            message: "All View Ticket Find SuccessFull",
            TicketFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}

exports.UpdateTicket =  async function(req, res, next) {
    try {
        // req.body.password = await bcrypt.hash(req.body.password,10)
        let data = await TICKETING.findByIdAndUpdate(req.params.id,req.body,{new : true})  
        res.status(201).json({
          status: "Success",
          message: "Ticket  Update SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};
exports.DeleteTicket =  async function(req, res, next) {
    try {
            await TICKETING.findByIdAndDelete(req.params.id)  
        res.status(201).json({
          status: "Success",
          message: "Ticket Delete SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};