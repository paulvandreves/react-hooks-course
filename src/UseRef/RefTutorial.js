import React, { useRef } from "react";
// Use Ref is the easiest way to access and manipulate DOM elements 

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus(); 
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>

    </div>
  );
}

export default RefTutorial;