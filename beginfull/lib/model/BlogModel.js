import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    imageImg:{
        type:String,
        required:true
    },
    data:{
        type:Data,
        default:Data.now()
    }
})

const BlogModel = mongoose.model.blog || mongoose.model('blog',Schema);
// สร้างบล้อคโดยใช้เเม่เเบบ schema เเต่ต้องไม่มีการสร้างไว้ละ

export default BlogModel ; 
