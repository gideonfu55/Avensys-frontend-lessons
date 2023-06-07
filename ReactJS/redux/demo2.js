const { createStore, combineReducers } = require("redux")

const icecreamData = {
  noOfIcecreams: 20
}

const cakeData = {
  noOfCakes: 20
}

const icecreamReducer = (state = icecreamData, action) => {
  if (action.type === "BUY_ICECREAM") {
    return {
      noOfIcecreams: state.noOfIcecreams - 1,
    }
  } else {
    return state
  }
}

const cakeReducer = (state = cakeData, action) => {
  if (action.type === "BUY_CAKE") {
    return {
      noOfCakes: state.noOfCakes - 1,
    }
  } else {
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

const rootReducer = combineReducers({
  icecream: icecreamReducer,
  cake: cakeReducer
})

const cakeWorld = createStore(rootReducer)

cakeWorld.subscribe(() => {
  console.log(cakeWorld.getState())
})

cakeWorld.dispatch(buyIceCream())
cakeWorld.dispatch(buyCake())
cakeWorld.dispatch(buyIceCream())
cakeWorld.dispatch(buyCake())