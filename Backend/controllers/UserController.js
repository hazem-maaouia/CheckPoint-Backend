const User = require("../models/User");

const getAllUsers =async (req,res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error); 
    }
};
const addUser= async (req,res) => {
    const {lastname,firstname,email}= req.body
    try {
        const newUser=new User({lastname,firstname,email})
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error)
        
    }
   
}
const updateUser= async (req,res) => {
    const userID= req.params.id
    try {
        const userModified= await User.findByIdAndUpdate(userID, {...req.body}, {new:true})
        res.send(userModified)
    } catch (error) {
        res.send(error)        
    }
}
const deleteUser =async(req,res) => {
    const userID= req.params.id
try {
    const userDelete= await User.findByIdAndDelete(userID)
    res.send(userDelete)
} catch (error) {
    res.send(error);
    
}
}

module.exports={getAllUsers,addUser,updateUser,deleteUser};