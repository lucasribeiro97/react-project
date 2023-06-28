import User from './user';

function Header() {
  return (
    <header>
      <h1>
        Ola,
        {' '}
        <User />
      </h1>
    </header>
  );
}

export default Header;
