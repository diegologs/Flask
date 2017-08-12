var express = require('express');
var router = express.Router();

var Note = require('../models/note');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});


// Método post para crear notas
router.post('/', function (req, res, next) {
    Note.create({
        title: req.body.title,
        tags: req.body.tags,
        text: req.body.text


    }, function (err, note) {
        if (err)
            res.send(err);



        Note.find(function (err, notes) {
            if (err)
                res.send(err)
            res.json("Note created! :3");
        });
    });
});


//Método get para listar todas las notas
router.get('/', function (req, res, next) {
    Note.find(function (err, notes) {
        if (err)
            res.send(err)
        res.json(notes);
    });

});

//Método get para listar una de las notas
router.get('/:note_id', function (req, res, next) {
    Note.findOne({
        _id: req.params.note_id
    }, function (err, obj) {
        res.json(obj);
    });

});



//Método delete para eliminar una nota mediante su id
router.delete('/:note_id', function (req, res, next) {

    Note.remove({
        _id: req.params.note_id
    }, function (err, note) {
        if (err)
            res.send(err);

        Note.resetCount(function (err, nextCount) {

            // nextCount === 100 -> true 

        });
        Note.find(function (err, notes) {
            if (err)
                res.send(err)
            res.json(notes);
            Note.resetCount(function (err, nextCount) {

                // nextCount === 100 -> true 

            });
        });
    });

});


module.exports = router;