import axios from "axios";
import authHeader from "./auth-header";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

class UserService {
  getPublicContent() {
    return axios.get(`${BACKEND_SERVER}/users`, { header: authHeader() });
  }
}
export default new UserService();
