import express from "express"
import dotenv from "dotenv"
dotenv.config()
import dbTest from "./dbconnect/dbTest.js"
const app = express()


app.get("/", (req, res) => {
    res.send("Hello from subham mallick from get")
})
app.post("/create", (req, res) => {
    res.send("Hello from subham mallick from create")
})
app.put("/update", (req, res) => {
    res.send("Hello from subham mallick from update")
})
app.delete("/delete", (req, res) => {
    res.send("Hello from subham mallick from delete")
})


const port=process.env.PORT || 3000

app.listen(port,()=>{
    dbTest()
    console.log(`server is running on port ${port}`);
})
