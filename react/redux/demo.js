/* eslint-disable no-undef */
// Customer BUY_ICECREAM, BUY_CAKE --> ShopKeeper --> cakeWorld(20 Icecream and 30 cakes)

const { createStore } = require("redux")

// Create your states
const initialData = {
  noOfIcecreams: 20,
  noOfCakes: 30
}

// Create a reducer:
const myReducer = (state = initialData, action) => {
  if (action.type == "BUY_ICECREAM") {
    return {
      noOfIcecreams: state.noOfIcecreams - 1,
      noOfCakes: state.noOfCakes
    }
  } 
  if (action.type == "BUY_CAKE") {
    return {
      noOfIcecreams: state.noOfIcecreams,
      noOfCakes: state.noOfCakes - 1
    }
  }
  else {
    return state
  }
}

// Create actions:
const buyIceCream = () => {
  return { type: "BUY_ICECREAM" }
}

const buyCake = () => {
  return { type: "BUY_CAKE" }
}

// Create Redux Store
const cakeWorld = createStore(myReducer)

// Print updated data inside cakeWorld:
cakeWorld.subscribe(() => {
  console.log(cakeWorld.getState())
})

// Calling the actions:
cakeWorld.dispatch(buyCake())
cakeWorld.dispatch(buyCake())
cakeWorld.dispatch(buyCake())
cakeWorld.dispatch(buyIceCream())
cakeWorld.dispatch(buyIceCream())
cakeWorld.dispatch(buyIceCream())