import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App m-3">
      <h5 className='fw-bold'>Testing React Code</h5>
      <p className='fw-bold text-danger'>Hello World!</p>

      <h5 data-testid="countvalue">The count is: {count}</h5>
      <button onClick={increaseCount} className='btn btn-primary btn-sm'>+</button>
    </div>
  );
}

export default App;
