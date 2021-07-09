const express = require("express");
const bodyParser = require("body-parser");
const http = require("http")
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/home", function(req,res){
res.sendFile(__dirname + "/home.html")
});
app.get("/about", function(req,res){
res.sendFile(__dirname + "/about.html")
});
app.get("/blog", function(req,res){
res.sendFile(__dirname + "/blog.html")
});
app.get("/contact", function(req,res){
res.sendFile(__dirname + "/contact.html")
});
app.get("/payment", function(req,res){
res.sendFile(__dirname + "/payment.html")
});
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
})


app.post("/",function(req,res){
  res.redirect("/payment")
})


app.listen(3000,function(){
  console.log(__dirname)
})
