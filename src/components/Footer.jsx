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
    <footer class="pt-5 bg-dark">
      <div id="parte2" class="text-light">
        <div id="esp">
          <img src={Espana} alt="" height="90px" width="90px" />
          <p>© danielvalcarce.com</p>
        </div>
        <div id="tyc">
          <div class="d-flex">
            <img src={LinkedinLogo} height="20px" width="20px" alt="Linkedin"/>
            <a href="linkedin.com/in/daniel-f-valcarce" class="nav-link">Linkedin</a>
          </div>
          <div class="d-flex">
            <img src={GithubLogo} height="20px" width="20px" alt="Github"/>
            <a href="#" class="nav-link">GitHub</a>
          </div>
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