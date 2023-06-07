const { createStore } = require("redux")

// Create your states
const initialData = {
  noOfLaptops: 40,
}

// Create a reducer:
const myReducer = (state = initialData, action) => {
  if (action.type === "BUY_LAPTOP") {
    return {
      noOfLaptops: state.noOfLaptops + 1,
    }
  }

  if (action.type === "SELL_LAPTOP") {
    return {
      noOfLaptops: state.noOfLaptops - 1,
    }
  }
  else {
    return state
  }

}

// Create actions:
const buyLaptop = () => {
  return { type: "BUY_LAPTOP" }
}

const sellLaptop = () => {
  return { type: "SELL_LAPTOP" }
}

// Create Redux Store
const mobileStore = createStore(myReducer)

// Print updated data inside mobileStore:
mobileStore.subscribe(() => {
  console.log(mobileStore.getState())
})

// Calling the actions:
mobileStore.dispatch(sellLaptop())
mobileStore.dispatch(buyLaptop())