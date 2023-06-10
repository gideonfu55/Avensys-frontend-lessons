import get from 'axios'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create State - Your initial data in the product list:
const initialProducts = {
  products: [],
  loading: true,
  error: null
}

// Create Actions:
export const fetchProducts = () => {
  return (dispatch) => {
    get('https://fakestoreapi.com/products')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

const fetchProductsSuccess = (data) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: data,
  };
}

const fetchProductsFailure = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
  };
};

// Create Reducer for getting Fakestoreapi data:
const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          products: [...action.payload],
          loading: false,
          error: null
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          products: [],
          loading: false,
          error: action.payload,
          // Set loading state to false after failed request and get error as payload
        };
      default:
        return state;
    }
  }

// Use combineReducers for multiple reducers - but good practice to just have one for including future reducers
const rootReducer = combineReducers({
  productsReducer: productsReducer
})

// Create a Redux Store:
export const ecommerceStore = createStore(rootReducer, applyMiddleware(thunk))
