var express = require('express');
var router = express.Router();

var Task = require('../models/task');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Método post para crear tareas
router.post('/', function (req, res, next) {
    Task.create({
        title: req.body.title,
        tags: req.body.tags,
        text: req.body.text,
        priority: req.body.priority


    }, function (err, task) {
        if (err)
            res.send(err);



        Task.find(function (err, tasks) {
            if (err)
                res.send(err)
            res.json("Task created! :3");
        });
    });
});


//Método get para listar todas las tareas
router.get('/', function (req, res, next) {
    Task.find(function (err, tasks) {
        if (err)
            res.send(err)
        res.json(tasks);
    });

});

//Método get para listar una de las tareas
router.get('/:task_id', function (req, res, next) {
    Task.findOne({
       _id: req.params.task_id
    }, function (err, obj) {
        res.json(obj);
    });

});



//Método delete para eliminar una tarea mediante su id
router.delete('/:task_id', function (req, res, next) {

    Task.remove({
        _id: req.params.task_id
    }, function (err, task) {
        if (err)
            res.send(err);

        Task.resetCount(function (err, nextCount) {

            // nextCount === 100 -> true 

        });
        Task.find(function (err, tasks) {
            if (err)
                res.send(err)
            res.json(tasks);

        });
    });

});

//Método para marcar una tarea como completada
router.put('/:task_id/completed', function (req, res, next) {

    Task.update({
        _id: req.params.task_id
    }, {
        completed: true,
        complete_date: Date.now(),
    }, function (err, affected, resp) {
        Task.find(function (err, tasks) {
            if (err)
                res.send(err)
            res.json(tasks);
        });
    })


});


module.exports = router;