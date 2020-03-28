// 1. load required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// 1a. Load the Custom Node Module
const dalModule = require('./simpledal');

// 1b. instantiate the class from the custom module
const dalObj = new dalModule();

// 1c. confogire the port for listening requests
const port = process.env.PORT || 8000

// 2. define an express instance
let instance = express();
// 2a. configure the express instance to parse the request body
// for the post request and map with JSON
// do this by configuring the bodyParser middleware
instance.use(bodyParser.json());
// also use the URL Parameter encoding this will be used for put and delete requests
instance.use(bodyParser.urlencoded({ extended: false }));
// configure cors middleware for the instance to accept
// requests from any origin
instance.use(cors())


instance.get('/api/products', dalObj.getProducts);
// passing URL Parameter
instance.get('/api/products/:id', dalObj.getProductsById);

// post the new Product

instance.post('/api/products', dalObj.createProduct);


instance.put('/api/products/:id', dalObj.updateProduct);


instance.delete('/api/products/:id', dalObj.deleteProduct);


// 4. listen on the port
instance.listen(port, () => {
    console.log('Express Server Started on port 5060');
});

module.exports = instance;