import Header from './components/header';
import Footer from './components/footer';

import './App.css';

function App() {
  function handleClick() {
    alert('Botao clicado');
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <button onClick={ handleClick }>
          Clique aqui
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
