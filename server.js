require("dotenv").config()


const app = require("./src/app")
const connectToDB = require("./src/config/db")


app.listen(3000,()=>{
    console.log("Hie<3 Server is running on port 3000")
})