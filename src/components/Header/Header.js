import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };
  return (
    <header className="header">
      <nav className="nav-Container">
        <h1 className="title">Bookstore CMS</h1>
        <ul className="items">
          <li>
            <Link style={pathname === '/Books' ? focus : {}} className="item" to="/Books">
              BOOKS
            </Link>
          </li>
          <li><Link style={pathname === '/Categories' ? focus : {}} className="item" to="/Categories">CATEGORIES</Link></li>
        </ul>
      </nav>
      <div className="profile">
        <FontAwesomeIcon className="font-awesome" icon={faUserCircle} />
      </div>
    </header>
  );
}

export default Header;
