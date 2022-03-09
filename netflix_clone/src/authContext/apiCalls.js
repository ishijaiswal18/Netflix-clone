import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  console.log("login");
  console.log(user);
  console.log(dispatch);
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log("SUCCESSS");
  } catch (err) {
    dispatch(loginFailure());
    console.log("ERROR");
  }
};