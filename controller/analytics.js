var ANALYTICS = require('../model/analytics')

exports.ViewAnalytics = async function(req, res, next) {
    try {
        let analyticsFind = await ANALYTICS.find()
        res.status(201).json({
            status: "success",
            message: "Analytics All SuccessFull",
            analyticsFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}  