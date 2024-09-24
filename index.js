const express = require('express');
const nodemon = require('nodemon')
const ratelimiter = require("./rate-limiter")
const app = express()

app.use(ratelimiter.rateLimiter)

app.get("/ping",async(req,res) => {
    res.status(200).json({
        "success": true,
        "message": " pong"
    })
})

const PORT = 7005;

app.listen(PORT,function(){
    console.log("server started at port 7005")
})