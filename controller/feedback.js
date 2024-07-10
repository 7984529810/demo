var FEEDBACK = require('../model/feedback')


exports.AddFeedback = async function(req, res, next) {
    try {
        req.body.eventID = req.eventID
        let Check = await FEEDBACK.create(req.body)
        res.status(201).json({
            status : "SUCCESS",
            message : "Feedback Created Successfully",
            Check
        })
    } catch (error) {
        res.status(404).json({
            status : "FAIL",
            message : error.message
        })
    }
}

exports.ViewFeedback = async function(req, res, next) {
    try {
        let userFind = await FEEDBACK.find({eventID : req.eventID}).populate("eventID")
        res.status(201).json({
            status: "success",
            message: "Feedback Find SuccessFull",
            userFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}