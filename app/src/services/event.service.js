import axios from "axios";
import authHeader from "./auth-header";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

class EventService {
  async createEvent(data) {
    const { title, about, location, username } = data;
    localStorage.setItem("event", data);
    const response = await axios
      .post(`${BACKEND_SERVER}/api/events`, {
        header: authHeader(),
        title,
        about,
        location,
        username,
      })
      .then((response) => {
        return response.data;
      });
    return response;
  }

  getEventById() {
    return axios.get(`${BACKEND_SERVER}/api/events`);
  }

  getEvents() {
    return axios.get(`${BACKEND_SERVER}/api/events`);
  }

  updateEventById() {
    return axios.put(`${BACKEND_SERVER}/api/events`, { header: authHeader() });
  }

  deleteEventById() {
    return axios.delete(`${BACKEND_SERVER}/api/events`, {
      header: authHeader(),
    });
  }
}
export default new EventService();
