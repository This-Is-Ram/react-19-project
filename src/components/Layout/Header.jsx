import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <NavLink to="/">
                <h1>WorldAtlas</h1>
              </NavLink>
            </div>
            <div className="menu-container">
              <IoMenu onClick={handleMenu} />
            </div>
            <nav className={isActive ? "mobile-view-on" : "mobile-view-off"}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
