const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Todolist=require('./models/todos');
//const {MongoClient} = require('mongodb' );
const app=express();
const dbURI="mongodb+srv://<XXXX>.rnblj.mongodb.net/todo-app?retryWrites=true&w=majority";
mongoose.connect(dbURI,{ useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false})
.then((result)=>app.listen(3000))
.catch((err)=>console.log("error is",err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set("view engine","ejs");

//todos=[{item:"fuckkkkkk"}];


app.get("/",function(req,res){
     Todolist.find({},(err,todos)=>{
       res.render("todo",{todos:todos})
     })
     //res.render("todo");
});
app.post("/",function(req,res){
    /*console.log("abc");
    console.log(req.body);
    todos.push(req.body);
    res.redirect("/");*/
    const todo=new Todolist({
      item:req.body.item
    });
    try{
      todo.save();
      res.redirect("/");

    }
    catch(err){
      console.log(err);
      res.redirect('/');
    }
    
    
});
app.post("/delete/:id",function(req,res){
   const id=req.params.id;
  // console.log("id is::",id)
   Todolist.findByIdAndRemove(id,err =>{
     if(err){
       return res.send(500,err);
     }
     res.redirect("/");
   })
});
  

