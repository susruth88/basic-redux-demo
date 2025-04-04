const redux = require("redux");


const reducer = function(state = initialState, action){


    if(action.type==="increment"){

        return {
        ...state,
        counter:  state.counter + action.payload
    }

    return state;
}

}

const initialState = {
    counter: 0
}
const store = redux.createStore(reducer)

const countSubscriber = () => {
    const latestState = store.getState()
    console.log("subscriber")
    console.log(latestState);
    
}

store.subscribe(countSubscriber)

store.dispatch({type: "increment", payload: 1})
