import {LOGIN, LOGOUT} from "../actions/auth.action";
import jwtDecode from 'jwt-decode';

// const initState = {
//   "id": 1,
//   "name": "Admin Test",
//   "email": "admin@msiop.com",
//   "username": "admin",
//   "password": "$2a$10$JcDSR4sea.Q/Fpd1rX7K4.ChA3R0pitcqwCXzdGOecL1Dqa4WBZIW",
//   "authorities": [
//     {
//       "id": 1,
//       "type": "ROLE_ADMIN"
//     }
//   ]
// };


const initState = null;

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      if (action.payload.success) {
        return jwtDecode(action.payload.token).user;
      }
    case LOGOUT:
      if (action.payload.success) {
        return null;
      }
    default:
      return state;
  }
}
