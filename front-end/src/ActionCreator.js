import Axios from 'axios';
import { api_url } from './components/config';

export const loginAPI = (userDetails, ownProps) => (dispatch) => {
    // dispatch(displayLoader(true));
    Axios.get(`${api_url}/login?user_name = ${userDetails.user_name} & password=${userDetails.password}`)
      .then((resp) => {
        const data = { ...resp.data, isAdmin: true };
        sessionStorage.setItem("loggedInUser", JSON.stringify(data));
        ownProps.history.push({ pathname: "/" });
  
        dispatch({
          type: 'LOGGED_IN',
          payload: true,
        });
      })
      .catch(() => {
        sessionStorage.setItem("loggedin", JSON.stringify(true));
        ownProps.history.push({ pathname: "/" });
  
        dispatch({
          type: 'LOGGED_IN',
          payload: true,
        });
      })
      .finally(() => {
        // dispatch(displayLoader(false));
      });
  };