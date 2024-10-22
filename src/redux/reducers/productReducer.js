const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, products: action.payload, error: null };
      case 'FETCH_PRODUCTS_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
  