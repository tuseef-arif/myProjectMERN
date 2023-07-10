import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="data:image/png;base64,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" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

