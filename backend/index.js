const { connect } = require('mongoose');
const connectToMongo = require('./dbconnect');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')

})
app.listen(port, () => {
    console.log(`app listning at http://localhost:${port}`)
})