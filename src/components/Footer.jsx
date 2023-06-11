import React from "react";
import './styles/FooterStyle.css'
import TwitterLogo from '../assets/img/twitter20x20.png'
import GithubLogo from '../assets/img/github20x20.png'
import LinkedinLogo from '../assets/img/linkedin20x20.png'
import Espana from '../assets/img/espana.png'
import AppleLogo from '../assets/img/apple-logo40x40.png'
import Facebook from '../assets/img/facebook40x40.png'
import Instagram from '../assets/img/logotipo-de-instagram40x40.png'
import Twitter from '../assets/img/gorjeo40x40.png'

export function Footer() {
  return (
    <footer class="py-5 bg-dark">
      <div id="parte1" class="text-light">
        <div id="masInfo">
          <h3><b>Mas informacion</b></h3>
          <ul>
            <li>
              <img src={TwitterLogo} height="20px" width="20px" alt="Twitter"/> Twiter
            </li>
            <li>
              <img src={GithubLogo} height="20px" width="20px" alt="Github"/>
              <a href="#" class="text-white text-decoration-none">GitHub</a>
            </li>
            <li>
              <img src={LinkedinLogo} height="20px" width="20px" alt="Linkedin"/>
              <a href="linkedin.com/in/daniel-f-valcarce" class="text-white text-decoration-none">Linkedin</a>
            </li>
          </ul>
        </div>
        <div id="logo">
          <img src="img/logoSinFondo.png" alt="Logo Daniel Valcarce" />
        </div>
        <div id="recursos">
          <h3><b>Recursos</b></h3>
          <ul>
            <li><a href="https://allmylinks.com/dvalcarce93" class="text-white text-decoration-none">Contact</a></li>
            <li><a href="#" class="text-white text-decoration-none">Poner algo</a></li>
            <li><a href="#" class="text-white text-decoration-none">Noticias</a></li>
          </ul>
        </div>
      </div>
      <div id="parte2" class="text-light">
        <div id="esp">
          <img src={Espana} alt="" height="90px" width="90px" />
          <p>© 2022-2023 danielvalcarce.com</p>
        </div>
        <div id="tyc">
          <a href="#" class="link-light">Terminos y condicones</a>
          <a href="#" class="link-light">Informacion legal</a>
          <a href="#" class="link-light">Privacidad</a>
        </div>
        <div id="rss">
          <img src={AppleLogo} alt="Apple" height="40px" width="40px" />
          <img src={Facebook} alt="Facebook" height="40px" width="40px" />
          <img src={Instagram} alt="Instagram" height="40px" width="40px"/>
          <img src={Twitter} alt="Twitter" height="40px" width="40px" />
        </div>
      </div>
    </footer>
  );
}