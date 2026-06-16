const express = require("express")
const app = express()

require("dotenv").config()
require("../dbconnect/dbTest.js")

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


const PORT=3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
