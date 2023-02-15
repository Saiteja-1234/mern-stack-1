require("dotenv").config();
const userLib=require("./backend/lib/userLib");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}
app.use(express.static("public",options));
app.get("/", function(req, res){
	// res.send("I'm Srikanth Reddy");
	res.sendFile(__dirname+"/index.html");
});

app.get("/resume", function(req, res){
	// res.send("I'm Srikanth Reddy");
	res.sendFile(__dirname+"/resume.html");
});

app.get("/card", function(req, res){
	// res.send("I'm Srikanth Reddy");
	res.sendFile(__dirname+"/card.html");
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");
		//TODO: Don't create a user if atleast 1 user exist in the table
		userLib.createFirstUser(function (err,res){
			if(err){
				// console.eror(err);
			}
			else{
				console.log(res);
			}
		});
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
		
	}
});