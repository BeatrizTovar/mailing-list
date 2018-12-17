const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.unsubscribe(function(req, res) {
    res.send('Hello World!')
})

app.listen(8080, function() {
    console.log("Now listening....")
})