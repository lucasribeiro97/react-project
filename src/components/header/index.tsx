import User from '../user';
import './header.css';

function Header() {
  return (
    <header className="header">
      <p className="header-user">
        Ola,
        {' '}
        <User />
      </p>
    </header>
  );
}

export default Header;
