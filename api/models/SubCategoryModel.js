import mongoose from "mongoose"

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 32
    },
    attributes: {
        type: [String]
    }
},
{
    timestamps: true
})

const subCategory = mongoose.model('Category', subCategorySchema)
export default subCategory;