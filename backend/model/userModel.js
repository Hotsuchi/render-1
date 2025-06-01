const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('Mongodb connected'))
.catch((err)=>console.log('Mongodb connection failed .....'))

const userSchema = new mongoose.Schema({
    uemail:String,
    ufullname:String,
    ulogo:String,
    ugender:String,
    uname:String,
    upass:String,
    uterm:String,
})


const User = mongoose.model('User',userSchema);
const Admin = mongoose.model('Admin',userSchema);


module.exports = { User,Admin };