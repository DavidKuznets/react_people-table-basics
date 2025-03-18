import { Link } from 'react-router-dom';

export const Navigations = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/people">
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
