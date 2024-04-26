import Category from "../models/CategoryModel.js";


export const createCategory = (req, res, next) => {

}

export const deleteCategory = (req, res, next) => {
    
}

export const getCategory = (req, res, next) => {
    
}

export const getCategories = async (req, res, next) => {
    
    const categories = await Category.find()

    res.status(200).json({
        status: "success",
        categories
    })
}




