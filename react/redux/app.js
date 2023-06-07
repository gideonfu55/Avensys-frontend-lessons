const { createStore } = require("redux")

// Creating a State
const initialData = {
  noOfChocolates: 20
}

// Create a Reducer - 
// - a. where this guy takes the initial data and keeps it inside the bakery.
// - b. takes an action and act on the state.
const chocolateReducer = (state = initialData, action) => {
  if (action.type === "BUY_CHOCOLATE") {
    return {
      noOfChocolates: state.noOfChocolates - 1
    } 
  } else {
    return state;
  }
}

// Create an action
const buyChocolate = () => {
  return { type: "BUY_CHOCOLATE" }
}

// Create a Redux store
const bakery = createStore(chocolateReducer)

// We need to get inside the bakery to get the count of remaining chocolates:
bakery.subscribe(() => {
  console.log(bakery.getState())
})

// Customer calls an action on the Redux store
bakery.dispatch(buyChocolate())
bakery.dispatch(buyChocolate())
bakery.dispatch(buyChocolate())
