const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");
const Post = require("./Post");


const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    ,
    post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    }
})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports= Comment;