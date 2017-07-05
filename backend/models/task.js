var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var taskSchema = new Schema({
    title: String,
    tags: [String],
    text: String,
    completed: { type: Boolean, default: false },
    complete_date: Date,
    priority: Number,
    created: { type: Date, default: Date.now }
    
});

autoIncrement.initialize(mongoose.connection);

taskSchema.plugin(autoIncrement.plugin, 'Task');
module.exports = mongoose.model('Task', taskSchema);