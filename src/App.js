import {useEffect, useState} from 'react';
import CounterComponent from './CounterComponent';

function App() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div style={{margin: '10px'}}>
      <h1>Counter Using React</h1>
      <CounterComponent count={count} setCounter={setCounter} />
    </div>
  );
}

export default App;
