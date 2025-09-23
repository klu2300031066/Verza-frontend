import axios from "axios";

const API_URL = "http://ec2-54-89-192-95.compute-1.amazonaws.com:8081/auth";

export const login = async (username, password) => {
  // ✅ Backdoor admin login
  if (username === "admin" && password === "admin") {
    const fakeToken = "admin-token"; // or any string
    localStorage.setItem("token", fakeToken);
    return { token: fakeToken, user: { username: "admin" } };
  }

  // Otherwise normal API login
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
