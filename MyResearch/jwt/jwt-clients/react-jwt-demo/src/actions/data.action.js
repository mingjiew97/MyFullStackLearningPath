import axios from 'axios';

export const GET_DATA = 'GET_DATA';

const API_URL = process.env.REACT_APP_API_URL;

// type: 'admin', 'user', 'public'
export function getData(type) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/${type}_content`);
      dispatch({
        type: GET_DATA,
        payload: res.data.message
      });
    } catch (e) {
      dispatch({
        type: GET_DATA,
        payload: e.response.data.message
      });
    }
  };
}
