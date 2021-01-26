const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const Todolist= new Schema({
    item:{
        type:String,
    }
},{timestamps:true});


const TodoTask=mongoose.model('TodoTask',Todolist);

module.exports=TodoTask;