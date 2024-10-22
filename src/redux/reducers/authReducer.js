const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token, error: null };
      case 'LOGIN_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
  