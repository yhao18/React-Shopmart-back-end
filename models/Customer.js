const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const {Schema} = mongoose;
const customerSchema = new Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        require: true
    },
    phoneNumbers:[{
        type:Number
    }]
})

customerSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
    }catch(err){
        next(err)
    }
})


const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;