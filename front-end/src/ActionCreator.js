import axios from 'axios';
import { api_url } from './components/config';

export const loginAPI = (userDetails, ownProps) => (dispatch) => {
  axios.post(`${api_url}/login`,JSON.stringify({
    user_name: userDetails.user_name,
    password: userDetails.password
    }))
  .then(res => {
    sessionStorage.setItem("username", JSON.stringify(userDetails.user_name));
    sessionStorage.setItem("loggedin", JSON.stringify(true));
    ownProps.history.push({ pathname: "/" });

    dispatch({
      type: 'LOGGED_IN',
      payload: true,
    });

  }).catch(err => {
    alert(err.response.data)
    // alert(res);
  });
};

export const handleLogout = (ownProps) => (dispatch) => {
  // dispatch(displayLoader(true));
  axios.get(`${api_url}/logout?user_name=${JSON.parse(sessionStorage.getItem('username'))}`)
    .then((resp) => {

      sessionStorage.setItem('username',JSON.stringify(''));
      sessionStorage.setItem("loggedin", JSON.stringify(false));

     

      axios.get(`${api_url}/post/get_all_posts`)
      .then(res => {
        ownProps.history.push({ 
          pathname: "/",
          fromLogOut: true,
          state: res.data
        });
      }).catch(err => {
          console.log('Failed to get before login');
      });
     
      
      dispatch({
        type: 'LOGGED_IN',
        payload: false,
      });

    })
    .catch(() => {
    })
};

