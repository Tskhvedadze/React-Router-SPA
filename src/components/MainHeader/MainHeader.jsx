import { Link } from "react-router-dom";

import './MainHeader.scss';

export function MainHeader() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link to="/welcome" className="header__link">welcome</Link>
          </li>
          <li className="header__li">
            <Link to="/products" className="header__link">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
