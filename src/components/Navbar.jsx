import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Academic } from '../Views/Academic';
import  Home  from '../Views/Home';

export function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Daniel Valcarce
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Academic">Academic</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Volunteering
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Academic" element={<Academic />} />
      </Routes>
    </Router>
  );
}