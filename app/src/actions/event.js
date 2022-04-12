import { EVENT_CREATED, EVENT_FAILED, SET_MESSAGE } from "./types";
import EventService from "../services/event.service";

export const createEvent = (data) => (dispatch) => {
  return EventService.createEvent(data).then(
    (response) => {
      dispatch({
        type: EVENT_CREATED,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: EVENT_FAILED,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
