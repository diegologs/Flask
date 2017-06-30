var express = require('express');
var router = express.Router();

var Note = require('../models/note');

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


//Método delete para eliminar una nota mediante su id
router.delete('/:note_id', function (req, res, next) {

    Note.remove({
        _id: req.params.note_id
    }, function (err, note) {
        if (err)
            res.send(err);

        Note.find(function (err, notes) {
            if (err)
                res.send(err)
            res.json(notes);
        });
    });

});


module.exports = router;