const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

//POST api/auth/register
async function userRegisterController(req,res){
    const {name,email,password} = req.body
    const isExists = await userModel.findOne({
        email : email
    })
    if(isExists){
        return res.status(422).json({
            message : "User already registered with this email",
            status : "failed"
        })
    }
    const user = await userModel.create({
        email,password,mail
    })
    const token = jwt.sign({id : user._id}, process.env.JWT_SECRET,{expiresIn : "2d"})
    res.cookie("token",token)
    res.status(201).json({      //whenever a new resource is created, we use 201 status code
        user : {
            _id : user._id,
            email:user.email,
            name:user.name
        },
        token
    })

}
module.exports = {userRegisterController}