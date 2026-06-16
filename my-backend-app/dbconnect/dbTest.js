import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: '../.env' });

const dbTest = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("DB Connection Error:", error.message)
    }
}
export default dbTest