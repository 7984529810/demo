const EVENT = require('../model/event')

exports.CreateEvent = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        // req.body.password = await bcrypt.hash(req.body.password,10)
        let Check = await EVENT.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Event created successfully..!',
            Check,
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}
exports.ViewEvent = async function(req, res, next) {
    try {
        let EventFind = await EVENT.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: "success",
            message: "Event Find SuccessFull",
            EventFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}


exports.UpdateEvent =  async function(req, res, next) {
    try {
        let data = await EVENT.findByIdAndUpdate(req.params.id,req.body,{new : true})  
        res.status(201).json({
          status: "Success",
          message: "Event Update SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};

exports.DeleteEvent =  async function(req, res, next) {
    try {
        await EVENT.findByIdAndDelete(req.params.id)  
        res.status(201).json({
          status: "Success",
          message: "Event Delete SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};