import SubCategory from "../models/SubCategoryModel.js";

export const createSubCategory = async (req, res, next) => {

    const newSubCategory = await SubCategory.create(req.body)
    res.status(200).send({
        "status": "success"
    })
}