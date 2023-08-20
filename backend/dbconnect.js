const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/NoteVault'
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected to database")
}
module.exports = connectToMongo