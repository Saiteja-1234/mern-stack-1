const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({});
        callback(null,users);
    }
    catch(err){
        callback(err,null)
    }
}

module.exports.createUser = async function (user,callback){
    try{
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.createFirstUser = async function(callback){
    try{
        var user = {
            userName:"Saiteja",
            yearOfGraduation:2024
        }
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null)
    }
}
module.exports.createSecondUser = async function(callback){
    try{
        var user = {
            userName:"Deepak",
            yearOfGraduation:2024
        }
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null)
    }
    
}
module.exports.updateUser = async function(query,data,callback){
    try{
        var result = await userModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.deleteUser = async function(username,callback){
    try{
        var query={
            userName:username,
        };
        // deleteOne(query)
        var result = await userModel.updateOne(query, {isDeleted : true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.getUserByFilter = async function(filter,callback){
    try{
        var user = await userModel.find(filter);
        callback(null,user);
    }
    catch(err){
        callback(err,null)
    }
}
