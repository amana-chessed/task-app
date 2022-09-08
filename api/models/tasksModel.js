var mongoose=require('mongoose');
var db = require('../database');

var taskSchema = new mongoose.Schema({
   details: String,
});

var Task = mongoose.model('tasks',taskSchema);
        
module.exports={
   createTaskData:function(inputData, callback){ 
      taskData = new Task(inputData);
      taskData.save(function(err, data){
         if (err) throw err;
         return callback(data);
      });
   },
   getTasks: function(callback){
      Task.find({},'_id details',(err, data)=>{
         if (err) throw err;
         return callback(data);
      });
   },
   deleteTask:function(id,callback){
      Task.findByIdAndDelete(id, (err,data) => {
         if(err) throw(err);
         return callback(data);
      });
   },
   updateTask:function(id,callback){
      Task.findByIdAndUpdate(id, (err,data) => {
         if(err) throw(err);
         return callback(data);
      });
   }
}