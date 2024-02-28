const productModel = require("../models/Products.js");




exports.createProduct = (req, res)=> {
    const product = new productModel(req.body);


    product.save()
    .then((newProduct) =>{
        res.json({
            message: "New product was successfully created and stored in database",
            data: newProduct
        })

    })
    .catch(err =>{
        console.log(`Error: ${err}`);
        res.status(500).json({
            message: err
        }) 
    })
};

exports.getProducts = (req, res)=>{

    if(req.query.featured){

        const categories = []
        productModel.find()
        .where("featured").equals("allCategories")
        .then(products => {
           for(var i = 0; i< products.length; i++){
                if(categories.indexOf(products[i].productCategory) ===-1)
                    categories.push(products[i].productCategory) 
            } 
            
            res.json({
                message: "A list of all the categories",
                data: categories,
                totalCategories: categories.length
            })
        })
        .catch(err =>{
            console.log(`Error: ${err}`);
            res.status(500).json({
                message:err
            })
        })
    }

    else if(req.query.bestseller){
        productModel.find()
        .where("bestseller").equals(req.query.bestseller ==="yes"?true:false)
        .then(products =>{
            if(products){
                res.json({
                    message: `Bestsellers`,
                    data: products
            })
            }else{
                res.status(404).json({
                    message: `There is no product marked as bestseller in database`
                })
            }        
        })
        .catch(err =>{
            console.log(`Error: ${err}`);
            res.status(500).json({
                message:err
            })
        })
    }
    else{
        productModel.find()
        .then(products => {

            res.json({
                message: "A list of all the products",
                data: products,
                totalHeros: products.length
            })
        })
        .catch(err =>{
            console.log(`Error: ${err}`);
            res.status(500).json({
                message:err
            })
        })
    }
    
};

exports.getProductByCategory = (req, res) =>{

    productModel.find({productCategory: req.params.category})
    .then(products =>{

        if(products){
            res.json({
                message: `Products belong to category ${req.params.category}`,
                data: products
            })
        }else{
            res.status(404).json({
                message: `There is no product belong in category ${req.params.category}`
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

exports.getProductById = (req, res) =>{

    productModel.findById(req.params.id)
    .then(product =>{
        if(product){
            res.json({
                message: `Product with the id ${req.params.id}`,
                data: product
            })
        }else{
            res.status(404).json({
                message: `There is no product in our database with the id ${req.params.id}`
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

exports.updateProduct = (req, res) =>{

    productModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(product =>{
        if(product){
            res.json({
                message: `The product with the id ${req.params.id} was updated`,
                data: product
            })
        }else{
            res.status(404).json({
                message: `Product with id ${req.params.id} was not found`
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

exports.deleteProduct = (req, res)=> {

    productModel.findByIdAndRemove(req.params.id, req.body)
    .then((product)=>{
        if(product){
            res.json({
                message: `The product with the id ${req.params.id} was deleted.`,
            })
        }else{
            res.status(404).json({
                message: `There is no product in our database with the id ${req.params.id}`
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