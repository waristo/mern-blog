import moment from 'moment'
import mongoose from 'mongoose'

///create schema
const ComentSchema = new mongoose.Schema({
    contents: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
    },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;