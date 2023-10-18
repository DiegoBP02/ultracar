import axios from "axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

const BASE_URL = "http://localhost:8080";

export const login = async (nameAndPassword) => {
  try {
    return await axios.post(`${BASE_URL}/auth/login`, nameAndPassword);
  } catch (e) {
    throw e;
  }
};

export const findClientByCpf = async (cpf) => {
  try {
    return await axios.get(`${BASE_URL}/client/${cpf}`, getAuthConfig());
  } catch (e) {
    throw e;
  }
};