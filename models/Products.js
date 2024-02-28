const mongoose = require("mongoose");

const {Schema} = mongoose;
const productSchema = new Schema({
    productName:{
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require : true
    },
    description: {
        type: String
    },
    productCategory:{
        type: String,
        require: true
    },
    quantity:{
        type:Number
    },
    bestseller:{
        type:Boolean,
        require: true
    },
    productPhoto:{
        type:String
    }


});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;