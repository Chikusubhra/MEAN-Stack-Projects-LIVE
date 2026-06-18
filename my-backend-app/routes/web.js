import express from "express";

const router = express.Router();
import contact from "../model/contacts.js";
import mongoose from "mongoose";
router.post("/create", async (req, res) => {
  try {
    const newContact = new contact(req.body);
    const saveData = await newContact.save();
    return res.status(201).json(saveData);
    console.log(res.status(201).json(saveData));
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Get all contact details
router.get("/contact-list", async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Get particular contact details
router.get("/find-by/:id", async (req, res) => {
  try {
    const contact_id = await contact.findById(req.params.id);
    if (!contact_id) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }
    res.status(200).json(contact_id);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Update Contact ID
router.put("/update-contact-by/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid contact ID",
      });
    }

    const updatedContact = await contact.findByIdAndUpdate(id, req.body, {
      new: true, // return updated document
      runValidators: true, // run schema validations
    });

    if (!updatedContact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Delete Contact by ID
router.delete("/delete-by/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid contact ID",
      });
    }

    const deletedContact = await contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
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

export default router;
