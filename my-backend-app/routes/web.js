import express from "express"

const router = express.Router()
import contact from "../model/contacts.js"
router.post("/create", async (req, res) => {
    try {
        const newContact = new contact(req.body);
        const saveData = await newContact.save();
        return res.status(201).json(saveData)
        console.log(res.status(201).json(saveData))
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
// Get all contacts
router.get('/contact-list', async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).json(contacts);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


/*

// home
router.get("/",(req,res)=>{
    res.send("hello from web get")
})
// about
router.get("/about",(req,res)=>{
    res.send("this is about page")
})
*/

export default router