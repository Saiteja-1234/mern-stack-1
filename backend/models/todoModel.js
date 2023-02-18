const mongoose=require("mongoose")

//Schema
const todoSchema=new mongoose.Schema({
    taskName:{
        type: String,
        required:true, 
        unique:true
    },
    createdAt:{type:Date, default: Date.now},
    isCompleted : { type : Boolean, default : false},
    isDeleted:{ type : Boolean, default : false}
});

module.exports = mongoose.model("todo",todoSchema);