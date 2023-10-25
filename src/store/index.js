import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";

// Function to retrieve user info from localStorage
const getUserInfoFromLocalStorage = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("account")) {
    return JSON.parse(localStorage.getItem("account"));
  }
  return null;
};

const initialState = {
  user: { userInfo: getUserInfoFromLocalStorage() },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// import { userReducer } from "./reducers/userReducers";

// const userInfoFromStorage = localStorage.getItem("account")
//   ? JSON.parse(localStorage.getItem("account"))
//   : null;

// const initialState = {
//   user: { userInfo: userInfoFromStorage },
// };

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   preloadedState: initialState,
// });

// export default store;