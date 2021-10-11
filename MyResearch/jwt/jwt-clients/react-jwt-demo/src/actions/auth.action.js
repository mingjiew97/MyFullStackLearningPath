import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

const API_URL = process.env.REACT_APP_API_URL;

export const login = (user) => {
  return async (dispatch) => {
    // tbh, fetch is not so good as axios :(
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
    });
    const payload = await res.json();
    if (payload.success) {
      localStorage.setItem('token', payload.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`;
    }
    dispatch({
      type: LOGIN,
      payload
    });
  };
};

export function logout() {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/logout`, null);
      if (res.data.success) {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
      }
      dispatch({
        type: LOGOUT,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: LOGOUT,
        payload: e.response.data
      });
    }
  };
}
