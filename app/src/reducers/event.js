import { EVENT_CREATED, EVENT_FAILED } from "../actions/types";

const event = JSON.parse(localStorage.getItem("event"));
const initialState = event
  ? { isCreated: true, event }
  : { isCreated: false, event: null };

export default function eventCreated(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EVENT_CREATED:
      return {
        ...state,
        isCreated: false,
        event: payload.event,
      };
    case EVENT_FAILED:
      return {
        ...state,
        isCreated: false,
        event: null,
      };
    default:
      return state;
  }
}
