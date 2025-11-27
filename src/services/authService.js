import axios from "axios";

const API_URL = "http://localhost:8081/auth";

export const login = async (identifier, password) => {
  // Backend accepts username or email in the "username" field
  const response = await axios.post(`${API_URL}/login`, { username: identifier, password });
  const token = response.data;

  // Store only single active session
  localStorage.setItem("token", token);
  localStorage.setItem("activeUser", identifier);
  return token;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const getActiveUser = () => {
  return localStorage.getItem("activeUser");
};

export const logout = () => {
  // Clear the active session completely
  localStorage.removeItem("token");
  localStorage.removeItem("activeUser");
  window.dispatchEvent(new Event("storage"));
};
