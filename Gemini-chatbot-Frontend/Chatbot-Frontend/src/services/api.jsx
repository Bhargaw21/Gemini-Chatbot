import axios from "axios";

export const fetchChatResponse = async (question) => {
    const API_URL = "http://localhost:8080/Api/query/ask"; // Ensure URL is correct and matches backend

    try {
        const response = await axios.post(API_URL, { query: question }); // Match payload key with backend
        return response.data; // Return response data from backend
    } catch (error) {
        if (error.response) {
            console.error("Backend error:", error.response.data);
        } else if (error.request) {
            console.error("No response from server:", error.request);
        } else {
            console.error("Error setting up request:", error.message);
        }
        throw error;
    }
};
