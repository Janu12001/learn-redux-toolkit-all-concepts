import { createStore } from "redux";

//store
const store = createStore(reducer);

//array to check history of each state
const history = [];

//reducer is a simple function
function reducer(state = { amount: 1 }, action) {
  if (action.type == "increment") {
    //immutability ( never changed directly but can mutate or make copies like amount example)
    return { amount: state.amount + 1 };
  }
  return state;
}

//global state(store has many functios like global state)
//console.log(store.getState());or
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
// it automatically pysh into  reducer
//action ( not part of redux but a convention)
//console.log(store.getState());
