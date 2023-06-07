import get from 'axios'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create State - Your initial data in the todolist:
const initialData = {
  tasks: ["Cooking", "Watching movies", "Playing video games"]
}

const initialProducts = {
  products: [],
  loading: true,
  error: null
}

// Create Actions:
export const addTask = (info) => {
  return {
    type: "ADD_TASK",
    payload: info
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data)
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

// Create Reducer(s):
const todoReducer = (state = initialData, action) => {
  if (action.type === 'ADD_TASK') {
    return {
      tasks: [...state.tasks, action.payload] // tasks: ["Cooking", "Watching movies", "Playing video games", "Playing"]
    }
  } else {
    return state
  }
}

// Create another reducer for getting Fakestoreapi data:
const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          products: [],
          loading: false,
          error: action.payload,
           // Set loading state to false after failed request
        };
      default:
        return state;
    }
  }

// Use combineReducers for multiple reducers - but good practice to just have one for including future reducers
const rootReducer = combineReducers({
  todoReducer: todoReducer,
  productsReducer: productsReducer
})

// Create a Redux Store:
export const todoStore = createStore(rootReducer, applyMiddleware(thunk))