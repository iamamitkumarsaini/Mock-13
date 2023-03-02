const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRoutes } = require("./Routes/userRoutes");
const { connection } = require("./config/db");

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.get("/", (req,res) => {
    res.send({"Message":"welcome to WordPlayGaming.in"})
})


app.use("/user",userRoutes);




app.listen(process.env.port,async() => {
    try {
        await connection;
        console.log("Connection to DB Success");
    } 
    
    catch (err) {
        console.log(err);
        res.send({"Message":"Network Connection Failed"})
    }

    console.log(`Server Listening on PORT ${process.env.port}`)
});