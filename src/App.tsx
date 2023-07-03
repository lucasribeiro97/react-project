import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';

const book1 = {
  title: 'The Godfather',
  pages: 433,
  isRead: true,
  isFavorite: false,
};

const book2 = {
  title: 'The Little Prince',
  pages: 92,
  isRead: true,
  isFavorite: true,
};

const book3 = {
  title: 'Clean Code',
  pages: 425,
  isRead: false,
  isFavorite: false,
};

function App() {
  return (
    <div>
      <Header />
      <p>Meus livros:</p>
      <ul>
        <Book
          book={ book1 }
        />
        <Book
          book={ book2 }
        />
        <Book
          book={ book3 }
        />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
