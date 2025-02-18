// Import the axios library, which is a popular HTTP client for making requests from the browser.
import axios from "axios";

// Create an instance of axios with a base URL.
// This base URL will be prepended to all HTTP requests made using this instance.
// In this example, all requests will be sent to our backend server running at "http://localhost:8000".
const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Export the configured Axios instance so it can be used in other parts of the application.
// This allows you to import "api" in your React components to make HTTP requests easily.
export default api;
