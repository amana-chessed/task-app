var express = require('express');
var router = express.Router();
var taskModel = require('../models/tasksModel');

router.get('/', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    taskModel.getTasks((data) => {
        res.status(200).send(data);
    });
});

router.post('/add', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    try{
        taskModel.createTaskData(
            req.body, 
            function(){
                console.log("Added to db.");
            }
        )
    }catch(e){
        res.status(500).send(e);
    }
    res.status(200).send('Task successfully added');
});

router.post('/delete/:id', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    try{
        taskModel.deleteTask(
            req.params.id, 
            function(){
                console.log("Deleted record from db.");
            }
        )
    }catch(e){
        res.status(500).send(e);
    }
    res.status(200).send('Task succesfully deleted');
});

router.post('/update/:id', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    try{
        taskModel.updateTask(
            req.params.id, 
            function(){
                console.log("Task succesfully updated");
            }
        )
    }catch(e){
        res.status(500).send(e);
    }
    res.status(200).send('Task successfully updated');
});

module.exports = router;