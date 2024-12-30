import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card'; 
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Card /> 
    </div>
  );
}

export default App;
