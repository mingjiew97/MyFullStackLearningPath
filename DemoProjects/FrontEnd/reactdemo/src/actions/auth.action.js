import axios from 'axios';
import qs from 'qs';

const API_URL = process.env.REACT_APP_API_URL;

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_LOGIN = 'CHECK_LOGIN';

export function login(user, callback) {
  const promise = axios.post(`${API_URL}/login`, qs.stringify(user), {withCredentials: true})
    .then(res => {
      callback(res);
      return res;
    });
  return {
    type: LOGIN,
    payload: promise
  }
}

export function logout(callback) {
  const promise = axios.post(`${API_URL}/logout`, null, {withCredentials: true})
    .then(res => {
      callback(res);
      return res;
    });
  return {
    type: LOGOUT,
    payload: promise
  }
}

export function checkLogin() {
    const promise = axios.get(`${API_URL}/checklogin`, {withCredentials: true});
    return {
        type: CHECK_LOGIN,
        payload: promise
    }
}