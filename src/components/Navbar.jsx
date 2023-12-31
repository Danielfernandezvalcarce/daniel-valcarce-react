import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Views/Home";
import  Academic  from "../Views/Academic";
import  Experience  from "../Views/Experience";
import  Contact  from "../Views/Contact";
import "./styles/NavbarStyle.css";

export function Navbar() {
  return (
    <Router>
      <nav className="">
        <div id="navBarPrincipal">
          <div id="elemento1">
            <Link className="navbar-brand text-white" to="/">
              <h3 id="nombre">
                Daniel Valcarce.
                <sup>DV</sup>
              </h3>
            </Link>
          </div>
          <div id="elemento2">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link class="nav-link" to="/">
                  /home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Academic">
                  /academic
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Experience">
                  /experience
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/Contact">
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
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
