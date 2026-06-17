import mongoose from "mongoose"
const contactDetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneno: String,
    city: String,
    address: String
})
const contact = mongoose.model("contact", contactDetailsSchema)
export default contact