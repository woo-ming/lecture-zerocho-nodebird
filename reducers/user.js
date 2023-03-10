const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export { initialState, logoutAction, loginAction };
export default reducer;
