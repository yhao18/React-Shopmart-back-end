# Shopmart RESTful API
A simple retail store RESTful API that allow client application to create, retrieve customers; as well as create, read, edit and delete products.

## End Points

### Customers
### POST/customers
Above end point creates a customer. The following customer data in the body of the request are required:
- first name(required)
- last name(required)
- email(required)
- password(required)
- phone number(can save more than one number)(optional)

### GET/customers/id
Above end point retrieve a specific customer base on id provided

### Products
### POST/products
Above end point creates a product. The following product data in the body of the request are required:
- product name(required)
- product price(required)
- description(optional)
- product category(required)
- quantity (optional)
- bestseller (required)
- product photo(optional)

### GET/customers?featured = allCategories
The above end point returns all categories of current products

### GET/customers?productCategory
The above end point returns all products belong to specific category

### GET/customers?bestseller = yes
The above end point returns all products that labeled as "bestseller"

### GET/customers
The above end point returns all products in the database

### GET/customers/id
The above end point returns the product base on the provided id

### PUT/customers/id
The above end point updates a product based on the id provided. The new product data in the body of the request is required to submit. It could include any of the following:
- product name
- product price
- description
- product category
- quantity
- bestseller
- product photo

### DELETE/products/id
The above end point deletes a product based on the id provided


## Notes
Database Connection String and PORT assigned were stored in config/keys.env file# React-Shopmart-back-end
# React-Shopmart-back-end
