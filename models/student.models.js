const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: { type: String, unique: true, index: true, sparse: true },
    lastName: { type: String, unique: true, index: true, sparse: true  },
    age: { type: Number },
    number: { type: Number },
    entryClass: { type: String },
    entryYear: { type: String },
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
