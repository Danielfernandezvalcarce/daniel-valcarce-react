import React from "react";
import "./styles/HomeStyle.css";
import { Resume } from "../components/Resume";
import Flecha from "../assets/img/flecha.png";

function Home() {
  return (
    <>
      <main>
        <section id="pesentacion">
          <div className="text-white text-center">
            <h1 id="nombreMain">DANIEL VALCARCE</h1>
            <div className="d-flex text-center justify-content-center">
              <h3 id="Description">SOFTWARE</h3>{" "}
              <h3 class="text-warning">FULL STACK WEB DEVELOPER.</h3>
            </div>
            <div>
                <img src={Flecha} alt="" width="200px" class="animated-arrow"/>
            </div>
          </div>
        </section>
        <section id="">
          <Resume />
        </section>
      </main>
    </>
  );
}

export default Home;
