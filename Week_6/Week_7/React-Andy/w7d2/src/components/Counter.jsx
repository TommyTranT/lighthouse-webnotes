// Counter.jsx is a counter that increases by 1 everytime the button is clicked.
// Uses 2 child functions to work.
// Whatever is between the opening and closing tag is considred the props.children.

import { useState } from "react";
import DisplayCounter from "./DisplayCounter";
import Button from "./Button";

const Counter = () => { 

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    console.log('count', count);
  };

  return (
    <div>
      <h2>This is the counter component</h2>
      <DisplayCounter count={count} />
      <Button onClick={clickHandler}>Click on me!</Button> 
    </div>
  );
};

export default Counter;