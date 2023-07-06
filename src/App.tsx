import { useState } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Button
          onClick={ handleClick }
        >
          {counter}
        </Button>

      </div>
      <Footer />
    </div>
  );
}

export default App;
