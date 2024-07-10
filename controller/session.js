let SESSION = require('../model/session')

exports.AddSession = async function(req, res, next) {
    try {
        req.body.eventID = req.eventID
        let Check = await SESSION.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Session  created successfully..!',
            Check,
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}

exports.ViewSession = async function(req, res, next) {
    try {
        let sessionFind = await SESSION.find({eventID : req.eventID}).populate("eventID")
        res.status(201).json({
            status: "success",
            message: "Session Find SuccessFull",
            sessionFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}

exports.UpdateSession =  async function(req, res, next) {
    try {
        let data = await SESSION.findByIdAndUpdate(req.params.id,req.body,{new : true})  
        res.status(201).json({
          status: "Success",
          message: "Session Update SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};

exports.DeleteSession =  async function(req, res, next) {
    try {
        await SESSION.findByIdAndDelete(req.params.id)  
        res.status(201).json({
          status: "Success",
          message: "Session Delete SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};