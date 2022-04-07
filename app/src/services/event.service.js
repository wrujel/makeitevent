import axios from "axios";
// import authHeader from "./auth-header";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

class EventService {
  getEvents() {
    return axios.get(`${BACKEND_SERVER}/api/events`);
  }
}
export default new EventService();
