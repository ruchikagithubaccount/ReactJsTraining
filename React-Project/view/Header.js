import React from "react";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="site-identity">
          <h1>
            <a href="#">Product Logo</a>
          </h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li>
              <a href="#" className="active">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
