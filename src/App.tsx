import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

import './App.css';

function App() {
  function handleButton1() {
    alert('Botao 1 clicado!');
  }
  function handleButton2() {
    alert('Botao 2 clicado!');
  }
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Button
          onClick={ handleButton1 }
        >
          Botao 1
        </Button>

        <Button
          onClick={ handleButton2 }
        >
          Botao 2
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
