const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/ReactApp3"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Sucseesfully Connected");
    })
}

module.exports = connectToMongo; 