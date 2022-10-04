// DisplayCounter.jsx checks what props.count is at and if its different, render the page again.

const DisplayCounter = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>Counter: {props.count}</h2>
    </div>
  );
};

export default DisplayCounter;