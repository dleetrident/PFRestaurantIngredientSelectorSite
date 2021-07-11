const express = require("express");
const bodyParser = require("body-parser");
const http = require("http")
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")

app.get("/", function(req,res){
res.render("home", { });
});
app.get("/about", function(req,res){
res.render("about", { });
});
app.get("/order", function(req,res){
res.render("order", { });
});
app.get("/contact", function(req,res){
res.render("contact", { });
});
app.get("/payment", function(req,res){
res.render("payment", { });
});



app.post("/payment",function(req,res){
  res.redirect("/payment")
})

app.post("/order",function(req,res){
  res.redirect("/order")
})

app.post("/about",function(req,res){
  res.redirect("/about")
})



app.listen(3000,function(){
  console.log(__dirname)
})
