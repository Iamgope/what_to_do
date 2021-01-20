const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set("view engine","ejs");

todos=[{item:"fuckkkkkk"}];
app.get("/",function(req,res){
     res.render("todo");
});
app.post("/",function(req,res){
    console.log("abc");
    console.log(req.body);
    todos.push(req.body);
    res.redirect("/");
    
});
app.delete("/delete/:item",function(req,res){
   todos=todos.filter(function(todo){
       return todo.item.replace(/ /g, "-")!==req.params.item;
   });
   res.json('todos');

});
  
app.listen(3000);
