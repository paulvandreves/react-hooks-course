import React, { useReducer } from "react";

//Use reducer helps you to not have to manage multiple states or Call useState multiple times 

const reducer = (state, action) => {
  // sate will be the value of each of the states that you are currently managing 
  // the action parameter will determine what type of action will be taken with each one of the states

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case "DECREMENT": 
      return { count: state.count - 1, showText: state.showText }; 
    default:
      return state;
  }
};

const ReducerTutorial = () => {
// useReducer takes state and a reducer function to update the state  
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });// dispatching or "Calling an action" passing type 
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
        
        
      
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
