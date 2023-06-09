const User=require('../models/User')
const jwt=require('jsonwebtoken');
const {promisify}=require('util')
const verifyJwt=promisify(jwt.verify)
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Review = require("../models/Review");


const authorizedUser =async (req,res,next)=>{
    console.log(req.headers.authorization)
try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
req.user=user;
next();
}catch(err)
{
console.log(err)
next(err)

}
}


const authorizedCreator =async (req,res,next)=>{
    console.log(req.headers.authorization)
//extract token from headers
//verify the token (secret)
//find user by id 
//attach  user to request body
//middleware to check if user exist and authroized
try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized User');
    error.statusCode=401;
    return next(error)

}

if(user.role!='creator'){
    const error=new Error('unauthorized,this action is specific for creator only');
    error.statusCode=401;
    return next(error)
}

req.user=user;
next();
}catch(err)
{
console.log(err)
next(err)

}
}






const authorizedAdmin =async (req,res,next)=>{
    console.log(req.headers.authorization)
//extract token from headers
//verify the token (secret)
//find user by id 
//attach  user to request body
//middleware to check if user exist and authroized
try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}

if(user.role!='admin'){
    const error=new Error('unauthorized,this action is specific for admin only');
    error.statusCode=401;
    return next(error)
}

req.user=user;
next();
}catch(err)
{
console.log(err)
next(err)

}
}

const unauthorizedUser = async (req,res,next)=>{
    console.log(req.headers.authorization)
try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}

///

const post = await Post.find({_id: req.params.id});

if(user.role == "admin" || id == post.User){
    next();
}else{
    const error=new Error('unauthorized,this action is specific for admin and creators only');
    error.statusCode=401;
    return next(error);
}


req.user=user;
next();
}catch(err)
{
console.log(err)
next(err)

}
}



const userComment = async (req,res,next)=>{
    console.log(req.headers.authorization)

try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}

const comment = await Comment.findOne({_id: req.params.comment_id});
const review = await Review.findOne({_id: req.params.review_id});
// console.log(user);

if(id == review.user.toString()){
    console.log("here");
    next();
}else if(id == comment.user.toString()){
    next();
}else{
    const error=new Error('unauthorized,this action is specific for the comment user only');
    error.statusCode=401;
    return next(error);
}

}catch(err)
{
console.log(err)
next(err)

}
}

const adminORuserComment = async (req,res,next)=>{
    console.log(req.headers.authorization)

try
{
const token =req.headers.authorization;
if(!token)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}
const {id}=await verifyJwt(token,"mySecret")
const user=await User.findById(id)
if(!user)
{
    const error=new Error('unauthorized');
    error.statusCode=401;
    return next(error)

}

///

const comment = await Comment.findOne({_id: req.params.comment_id});


if(id == comment.user.toString() || user.role =="admin"){
    console.log("here");
    next();
}else{
    const error=new Error('unauthorized,this action is specific for the comment user only');
    error.statusCode=401;
    return next(error);
}


// req.user=user;
// next();
}catch(err)
{
console.log(err)
next(err)

}
}


module.exports = {
    authorizedUser,
    authorizedCreator,
    authorizedAdmin,
    unauthorizedUser,
    userComment,
    adminORuserComment
}