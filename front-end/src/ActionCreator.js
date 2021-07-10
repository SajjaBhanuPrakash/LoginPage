import axios from 'axios';
import { api_url } from './components/config';

export const loginAPI = (userDetails, ownProps) => (dispatch) => {
  axios.post(`${api_url}/login`,JSON.stringify({
    user_name: userDetails.user_name,
    password: userDetails.password
    }))
  .then(res => {
    console.log('Logged in successfully');
    sessionStorage.setItem("username", JSON.stringify(userDetails.user_name));
    sessionStorage.setItem("loggedin", JSON.stringify(true));
    ownProps.history.push({ pathname: "/" });

    dispatch({
      type: 'LOGGED_IN',
      payload: true,
    });

  }).catch(err => {
    alert('Login not successfully');
  });
};

export const handleLogout = (ownProps) => (dispatch) => {
  // dispatch(displayLoader(true));
  axios.get(`${api_url}/logout?user_name=${JSON.parse(sessionStorage.getItem('username'))}`)
    .then((resp) => {

      dispatch({
        type: 'LOGGED_IN',
        payload: false,
      });
      sessionStorage.setItem('username',JSON.stringify(''));
      sessionStorage.setItem("loggedin", JSON.stringify(false));
      ownProps.history.push({ pathname: "/" });

    })
    .catch(() => {
    })
};

