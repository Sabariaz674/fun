import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';  // Adjust this URL based on your backend API

// Create an Axios instance for reusable API calls
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register a new user
const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Registration Error:', error);
    throw error.response ? error.response.data : error.message;
  }
};

// You can add more API calls here, e.g., loginUser, getUserDetails, etc.

export { registerUser };
