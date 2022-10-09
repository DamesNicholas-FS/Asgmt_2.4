const express = require("express")
const router = express.Router();
const { service, serviceId } = require("../service/service")

router.get('/', (req, res, next) =>{
    service()
    .then(result =>{
        res.status(200).json(result.data);
    })
    .catch( (err) =>{
        res.status(500).json({
            error:{
                message: error.message,
            }
        })
    })
});

router.get('/:id', (req, res, next) =>{
    serviceId(req.params.id).then(result =>{
        res.status(200).json(result.data)
    })
    .catch( err => {
        res.status(500).json({
            error:{
                message: err.message,
            }
        })
    })
});


module.exports = router;


