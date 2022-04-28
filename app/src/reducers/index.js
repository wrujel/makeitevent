import { combineReducers } from "redux";
import auth from "./auth";
// import event from "./event";
import message from "./message";

export default combineReducers({
  auth,
  // event,
  message,
});
