const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    first_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],
    },
    last_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
    username: { 
        type: String,
        unique: true,
        required: [true, "Can't be left blank"],
        match: [/^[a-zA-Z0-9]+$/, "is taken"],
        index: true 
    },
    password: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
