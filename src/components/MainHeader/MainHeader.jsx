import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

export function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink activeClassName={classes.active} to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
