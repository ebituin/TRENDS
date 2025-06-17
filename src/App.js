import './App.css';
import { useState } from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>add button</h1>
        <button className='add-button' onClick={() => setCounter(counter + 1)}>+</button>
        <h3>Counter: {counter}</h3>
       
        <ProfileCard name='Star' description='Moon' />
        <br></br>
        <ProfileCard name='naruto' description='father of boruto' />
      </header>
    </div>
  );
}

export default App;
