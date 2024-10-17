const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    rollno: { type: String, required: true },
    mobileno: { type: String, required: true },
    createdDate: { type: Date, default: Date.now() },
    role: { type: String, default: "student" }
})

const users = mongoose.model("vegam", userSchema)
module.exports = users