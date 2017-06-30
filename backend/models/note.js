var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var noteSchema = new Schema({
    title: String,
    tags: [String],
    text: String,
    created: { type: Date, default: Date.now }
    
});

autoIncrement.initialize(mongoose.connection);

noteSchema.plugin(autoIncrement.plugin, 'Note');
module.exports = mongoose.model('Note', noteSchema);