import { HYDRATE } from "next-redux-wrapper";

import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export { loginAction, logoutAction };
export default rootReducer;
