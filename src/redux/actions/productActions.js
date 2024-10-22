import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data.products });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: error.message });
  }
};
export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.post('https://dummyjson.com/products/add', product);
    dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_PRODUCT_FAIL', payload: error.message });
  }
};

