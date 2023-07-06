import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

import './App.css';

function App() {
  function handleClick(messageText: string) {
    alert(messageText);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  function doubleNumber(numberList: Array<number>) {
    return numberList.map((num) => num * 2);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Button
          onClick={ () => handleClick('Botao 1') }
        >
          Botao 1
        </Button>

        <Button
          onClick={ () => handleClick('Botao 2') }
        >
          Botao 2
        </Button>

        <input
          type="text"
          onChange={ (event) => handleChange(event) }
        />

      </div>
      <Footer />
    </div>
  );
}

export default App;
