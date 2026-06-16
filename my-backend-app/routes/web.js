import express from "express"
const router=express.Router()
// home
router.get("/",(req,res)=>{
    res.send("hello from web get")
})
// about
router.get("/about",(req,res)=>{
    res.send("this is about page")
})

export default router