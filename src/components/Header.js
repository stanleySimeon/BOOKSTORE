import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <nav className="nav-Container">
                <h1 className="title">Bookstore CMS</h1>
                <ul className="items">
                    <li><Link className="item" to="/Books">BOOKS</Link></li>
                    <li><Link className="item" to="/Categories">CATEGORIES</Link></li>
                </ul>
            </nav>
            <div className="profile">
                <FontAwesomeIcon className='font-awesome' icon={faUserCircle} />
            </div>
        </header>
    );
}

export default Header;
