import React, {useState} from 'react';

function CounterComponent({count, setCounter}) {
  const [isBelowZero, setBelowZero] = useState(false);

  const handleIncrement = () => {
    setCounter(count + 1);
    setBelowZero(false);
  };

  const handleDecrement = () => {
    if (count === 0) {
      setBelowZero(true);
      // setCounter(0)
      return;
    }
    setCounter(count - 1);
  };
  const errorStyleOn = {
    color: 'red',
  };
  const errorStyleOff = {
    display: 'none',
  };
  const goToZeroButtonStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
  };
  return (
    <div>
      <h3 style={{borderBottom: '2px solid white', width: 'max-content'}}>
        Your Currrent Count is : {count}
      </h3>
      <h3 style={isBelowZero ? errorStyleOn : errorStyleOff}>
        Error: Cannot go below 0
      </h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {count > 10 ? (
        <button style={goToZeroButtonStyle} onClick={() => setCounter(0)}>
          Go back to 0
        </button>
      ) : (
        <></>
      )}
      {/* <button>Go to 0</button> */}
    </div>
  );
}

export default CounterComponent;
