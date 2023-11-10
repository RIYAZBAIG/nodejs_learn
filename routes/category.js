const express = require('express');
const router = express.Router(); 
const {createCategory, getCategories,updateCategory,deleteCategory} = require("../controllers/categoryController")

router.post('/category/create', createCategory );
router.get('/category/all', getCategories );
router.put('/category/update/:id', updateCategory);
router.delete('/category/delete/:id', deleteCategory);

module.exports = router;