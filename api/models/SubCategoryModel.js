import mongoose from "mongoose"

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 32
    },
    attributes: [{
        name: String,
        values: [String]
    }],
    options: {
        type: [String]
    }
},
{
    timestamps: true
})

const SubCategory = mongoose.model('subCategory', subCategorySchema)
export default SubCategory;