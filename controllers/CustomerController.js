const express = require('express')
const router = express.Router()

const CustomerService = require("../services/CustomerService.js");


//" /customers " is already request in app.use("/customers", CustomerController); in server.js, no need to state in controller route
router.post("/", CustomerService.createCustomer)

router.get("/:id", CustomerService.getACustomer)

router.get("/", CustomerService.getAllCustomers)

module.exports = router