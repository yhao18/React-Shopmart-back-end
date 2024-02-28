const customerModel = require("../models/Customer.js");



exports.createCustomer = (req, res)=> {

    const customer = new customerModel(req.body);
    customer.save()
    .then((newCustomer) =>{
        
        res.json({
            message: "New customer profile was successfully created and stored in database",
            data: newCustomer
        })

    })
    .catch(err =>{
        console.log(`Error: ${err}`);
        res.status(500).json({
            message: err
        }) 
    })
};

exports.getACustomer = (req, res) =>{

    customerModel.findById(req.params.id)
    .then(customer =>{
        if(customer){
            res.json({
                message: `Customer with the id ${req.params.id}`,
                data: customer
            })
        }else{
            res.status(404).json({
                message: `There is no customer in our database with the id ${req.params.id}`
            })
        }       
    })
    .catch(err =>{
        console.log(`Error: ${err}`);
        res.status(500).json({
            message:err
        })
    })
};

exports.getAllCustomers=(req,res)=>{
    customerModel.find()
        .then(customers => {

            res.json({
                message: "A list of all existing customers",
                data: customers,
                totalHeros: customers.length
            })
        })
        .catch(err =>{
            console.log(`Error: ${err}`);
            res.status(500).json({
                message:err
            })
        })
}