// schema
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const EmpSchema = new schema({
    fullname: {
        type: String,
        required: true
    },
    nik: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Emp', EmpSchema);