const mongoose = require("mongoose")
const server = process.env.MONGO_URI
mongoose.connect(server)
.then(() => {
    console.log(`Connection Successful`); 
}).catch((err) => {
    console.log(`Connection Failed `,err.message);
})