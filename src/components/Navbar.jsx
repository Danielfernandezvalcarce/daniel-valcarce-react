import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Academic } from "../Views/Academic";
import Home from "../Views/Home";
import { Experience } from "../Views/Experience";
import { Volunteer } from "../Views/Volunteer";
import { Contact } from "../Views/Contact";
import "./styles/NavbarStyle.css";

export function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg border-bottom border-bottom-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" to="/">
            <h3 id="nombre">
              Daniel Valcarce.
            </h3>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link class="nav-link text-white" to="/">
                  /home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Academic">
                  /academic
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Experience">
                  /experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Volunteer">
                  /volunteer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Contact">
                  /contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Academic" element={<Academic />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
