const jwt = require('jsonwebtoken');
const { Admin } = require('../model/userModel.js');

const signup = async (req,res)=>{
    try{
        const newAdmin = new Admin(req.body);
        const data = await newAdmin.save();
        console.log(data)
        res.status(200).json({
            msg:'Sucsess',
            data:data,
        })
        console.log(data);
    }catch(err){
        console.log('Register data aaya nehi');
    }
}

const login = async (req,res)=>{
    try{
        const fatchDta = await Admin.find({uname:req.body.uname,upass:req.body.upass})
        const fatchUser = {
            
            uid:fatchDta[0]._id,
            email:fatchDta[0].uemail,
            fullname:fatchDta[0].ufullname,
            logo:fatchDta[0].ulogo,
            gender:fatchDta[0].ugender,
            uname:fatchDta[0].uname,
        }
        const newToken = jwt.sign(fatchUser,process.env.MY_KEY,{expiresIn:'30d'})
        res.status(200).send(newToken);
    }catch(err){
        res.status(403).send('login failed');
    }
}

const home = async (req,res)=>{
    try{
        console.log(req.user);
        res.status(200).send(req.user);
    }catch(err){
        res.status(403).json({
            msg:'home page request failed',
            error:err
        })
    }
}

module.exports = { signup,login,home };