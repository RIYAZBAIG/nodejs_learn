const Category = require("../models/category");
const ErrorResponse = require('../utils/errorResponse');

//Create caregories
exports.createCategory = async (req, res, next)=>{
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            success: true,
            category
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }   
}

//get all caregories
exports.getCategories = async (req, res, next)=>{
    try {
        const categories = await Category.find();
        res.status(201).json({
            success: true,
            categories
        }) 
    } catch (error) {
        console.log(error);
        next(error); 
    }  
}

// Update caregory data in MongoDB.
exports.updateCategory = async (req, res, next)=>{
    const currentCategory  = await Category.findById(req.params.id);
    const data = {
        name: req.body.name
    }
    try {
        const categoryUpdate = await Category.findOneAndUpdate(req.params.id, data, { new: true })
        res.status(200).json({
            success: true,
            productUpdate
        })
    } catch (error) {
        console.log(error);
        next(error);       
    }   
}


// delete Category 
exports.delete = async (req, res, next) => {
    try {
        const Category = await Category.findById(req.params.id);
        
        const rmCategory= await Category.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: " Category deleted",

        })

    } catch (error) {
        console.log(error);
        next(error);

    }
}