import React from "react";
import "./styles/HomeStyle.css";
import { Resume } from "../components/Resume";
import Flecha from "../assets/img/flecha.png";

export function Home() {

  const scrollToSelector = (event, selector) => {
    event.preventDefault();

    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (event) => {
    scrollToSelector(event, '#resume');
  };

  return (
    <>
      <main>
        <section id="pesentacion">
          <div className="text-white text-center">
            <h1 id="nombreMain">DANIEL VALCARCE</h1>
            <div className="d-flex text-center justify-content-center">
              <h3 id="Description">SOFTWARE</h3>
              <h3 class="text-warning">FULL STACK WEB DEVELOPER.</h3>
            </div>
            <div>
                <img src={Flecha} id="flecha" alt="" width="200px" class="animated-arrow" onClick={handleImageClick}/>
            </div>
          </div>
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>
    </>
  );
}
