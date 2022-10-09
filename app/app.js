const express = require('express');
const router = require('../router/router');
const app = express();

//similar to http://localhost:3000
app.get('/', (req, res ,next) => {
    res.status(200).send("Service is up!")
})

//router and middleware
app.use('/us', router)

app.use((req, res, next)=>{
    const error = new Error("NOT FOUND!!");
    error.status= 404;
    next(error)
})


app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
})


module.exports = app;