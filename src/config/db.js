const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect(process.env.mongo_URI).then(()=>{
        console.log("Connected to databaseeee yay")
    }).catch((err)=>{
        console.log("Error occurred while connecting to DB",err)
        process.exit(1)

    })
}

module.exports = connectToDB