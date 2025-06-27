const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://phanikumar:phani12345@cluster0.0sdegta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})