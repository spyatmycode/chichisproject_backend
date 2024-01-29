const express = require("express")
const cors = require("cors");
const upload = require("./middleware/multer");
require("./db/database")
const userRoutes = require("./routes/User")
const app = express();

app.use(cors());
app.use(express.json())

app.use(upload.single("image"))

app.use("/",userRoutes)

const port = 5555;

app.get('/', (req,res)=>{
    return res.status(200).json({status:"success", message:"This is the home route "})
})


app.listen(port, ()=>{
    console.log("App is listening on port", port);
})