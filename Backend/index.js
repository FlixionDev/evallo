const express = require("express");
const cors = require("cors");
const app = express();
const {isLogin}=require("./middleware/isLogin.middleware")
const { db } = require("./Configs/db")
const { userRouter } = require("./Routes/User.Routes")
const {contentRouter}=require("./Routes/Content.Routes")
const fs=require("fs")
const morgan = require('morgan')
app.use(express.json())
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.get("/", (req, res) => {
    res.send({ "message": "Home" })
})
app.use("/user", userRouter)
app.use(isLogin)
app.use("/content",contentRouter)
app.listen(3000, async () => {
    try {
        await db;
        console.log("Server is connected to db");
    } catch (err) {
        console.log(err);
    }
    console.log("Server is running on http://localhost:3000");
})