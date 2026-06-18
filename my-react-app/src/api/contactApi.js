import axios from "axios";
const BASE_URL = "http://localhost:3000";

// create contact
export default createContact = async (contactData) => {
    return await axios.post(
        `${BASE_URL}/create`,
        contactData
    )
};
