import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  
  try {
    const res = await axios.post('https://dummyjson.com/auth/login',

      {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: credentials.expiresInMins || 60, // Optional, defaults to 60
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        credentials:'include',
      }

    );
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};
