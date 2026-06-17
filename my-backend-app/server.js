import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import dbTest from "./dbconnect/dbTest.js"
import webRoutes from "./routes/web.js"
const app = express()
const router=express.Router()

app.use(cors())
app.use(express.json())

app.use("/",webRoutes)
console.log("control reaches here")

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
<<<<<<< HEAD
})
=======
})
>>>>>>> 7e1aab58644da4b1a5226ffe7510a178fd507a01
