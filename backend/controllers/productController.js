const Product =  require("../models/product");

// Creating a new product api/v1/product/new

exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Getting all products api/v1/products

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success : true,
        message : "This route will display all products of database"
    })
}