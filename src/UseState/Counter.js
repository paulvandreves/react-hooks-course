import React, { useState } from 'react'; 

const  Counter = () =>  {
    const [counter, setCounter] = useState(0); // Takes a parameter for an initial value 
// set function must be used to mutate the state of the corresponding variable 
    const increment = () => {
        setCounter(counter + 1); // react knows to re-render elements using that state 
    }
  return (
    <div>
       {counter}<button onClick={increment} >Increment</button>
    </div>
  )
}

export default Counter