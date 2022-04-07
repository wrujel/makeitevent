import axios from "axios";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(`${BACKEND_SERVER}/api/auth/signin`, { username, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
    return response;
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    const response = await axios.post(`${BACKEND_SERVER}/api/auth/signup`, {
      username,
      email,
      password,
    });
    return response;
  }
}
export default new AuthService();
