const mongoose = require("mongoose")



const connectDB = mongoose.connect("mongodb+srv://akejunifemi11:hW1IzqsmL2Fpl7yh@cluster0.ax0jw5n.mongodb.net/?retryWrites=true&w=majority").then(() => {

console.log("App is connected to the database");


}).catch((err) => {
console.log(err);
})


module.exports = connectDB
