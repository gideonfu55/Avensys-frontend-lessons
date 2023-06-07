import { createStore, combineReducers } from 'redux';

// Create State - Your initial data in the todolist:
const initialData = {
  tasks: ["Cooking", "Watching movies", "Playing video games"]
}

// Create Actions:
export const addTask = (info) => {
  return {
    type: "ADD_TASK",
    payload: info
  }
}

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

// Use combineReducers for multiple reducers - but good practice to just have one for including future reducers
const rootReducer = combineReducers({
  todoReducer: todoReducer,
})

// Create a Redux Store:
export const todoStore = createStore(rootReducer)