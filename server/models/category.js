import moment from 'moment'
import mongoose from 'mongoose'

///create schema
const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: "None"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
    ],
});

const Category = mongoose.model("category", CategorySchema);

export default Category;