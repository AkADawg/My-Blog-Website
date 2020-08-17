const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/subscribe", function(req, res){
  res.render("subscribe");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/post1", function(req,res){
  res.render("post1");
});

app.get("/post2", function(req,res){
  res.render("post2");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
