const express = require('express')
const router = express.Router()

const ProductService = require("../services/ProductService.js");

/*************************************************************************************/
//1. Create a product
router.post("/", ProductService.createProduct)

//2. Retrieve all products
//3. Retrieve all categories
//4. Retrieve all products belong to specific category
//5. Retrieve all bestsellers products
router.get("/", ProductService.getProducts)

router.get("/category/:category", ProductService.getProductByCategory)

//6. Retrieve product by id
router.get("/:id", ProductService.getProductById)


//7. Update product by id
router.put("/:id", ProductService.updateProduct)

//8. Delete
router.delete("/:id", ProductService.deleteProduct)



module.exports = router