import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';

import './App.css';

import { booksList, bestMovie } from './data';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          <s>Livros emprestados</s>
          Meus Livros:
        </Title>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book
              key={ book.title }
              book={ book }
            />
          ))}
        </ul>
        <Title>
          {bestMovie}
        </Title>
      </div>
      <Footer />
    </div>
  );
}

export default App;
