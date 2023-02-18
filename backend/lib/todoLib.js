const todoModel = require("../models/todoModel");

module.exports.createTask = async function(taskName,callback){
    try{
        if(todoModel.find(taskName))
            callback("Task alrady exists",null);
        else{
            var newTodo = new todoModel(taskName);
            var result = await newTodo.save();
            callback(null,result);
        }
    }
    catch(err){
        callback(err,null);
    }
}