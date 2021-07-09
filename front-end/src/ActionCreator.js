import axios from 'axios';
import { api_url } from './components/config';

export const loginAPI = (userDetails, ownProps) => (dispatch) => {
  axios.get(`${api_url}/login?user_name=${userDetails.user_name}&password=${userDetails.password}`,JSON.stringify)
  // fetch(`${api_url}/login?user_name=${userDetails.user_name}&password=${userDetails.password}`, {
  //   method: 'get',
  //   mode: 'no-cors',
  //   headers: {
  //     "Accept": 'application/json',
  //     'Content-type': 'application/json'
  //   },
  // })
  // .then(res => {
  //   console.log(res)
  //   if (!res.ok) {
  //     throw new Error('Network response was not ok');
  //   } else {
  //     return res.json();
  //   }
  // })
  .then(res => {
    alert('Logged in successfully');
    sessionStorage.setItem("username", JSON.stringify(userDetails.user_name));
    sessionStorage.setItem("loggedin", JSON.stringify(true));
    ownProps.history.push({ pathname: "/" });

  }).catch(err => {
    alert('Login not successfully');
    // sessionStorage.setItem("username", JSON.stringify(userDetails.user_name ));
    // sessionStorage.setItem("loggedin", JSON.stringify(true));
    // ownProps.history.push({ pathname: "/" });
    // alert('Failed to Login');
  });
};



export const handleLogout = (ownProps) => (dispatch) => {
  // dispatch(displayLoader(true));
  axios.get(`${api_url}/logout?user_name=${sessionStorage.getItem('username')}`)
    .then((resp) => {
      // const data = { ...resp.data, isAdmin: false };
      sessionStorage.setItem("loggedin", JSON.stringify(false));
      ownProps.history.push({ pathname: "/" });

      dispatch({
        type: 'LOGGED_IN',
        payload: false,
      });
    })
    .catch(() => {
      sessionStorage.setItem("loggedin", JSON.stringify(false));
      // ownProps.history.push('/');

      dispatch({
        type: 'LOGGED_IN',
        payload: false,
      });
    })
    .finally(() => {
      // dispatch(displayLoader(false));
    });
};



  // Axios.get(`${api_url}/login?user_name=${userDetails.user_name}&password=${userDetails.password}`)
    //   .then((resp) => {
    //     // const data = { ...resp.data, isAdmin: true };
    //     // sessionStorage.setItem("loggedInUser", JSON.stringify(data));
    //     // ownProps.history.push({ pathname: "/" });

    //     dispatch({
    //       type: 'LOGGED_IN',
    //       payload: true,
    //     });
    //   })
    //   .catch(() => {
    //     sessionStorage.setItem("loggedin", JSON.stringify(true));
    //     ownProps.history.push({ pathname: "/" });

    //     dispatch({
    //       type: 'LOGGED_IN',
    //       payload: true,
    //     });
    //   })
    //   .finally(() => {
    //     // dispatch(displayLoader(false));
    //   });