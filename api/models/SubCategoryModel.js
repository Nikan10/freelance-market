import mongoose from "mongoose";

const SubcategorySchema = mongoose.Schema({

    subcategoryId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 32
    },
    categoryId: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category',
        required: true
    },
},

{
    timestamps: true
})

const Subcategory = mongoose.model('Subcategory', SubcategorySchema)
export default Subcategory;