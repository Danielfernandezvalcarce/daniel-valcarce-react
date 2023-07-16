import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./styles/ResumeStyle.css";

export function Resume() {
  /** FALTA PONER COLORES DE BORDE
   * FALTA PONER ICONOS
   * FALTA PONER LINKS
   * FALTA PONER TITULOS
   * FALTA PONER BORDES
   * FALTA PONER EFECTOS HOVER
   * FALTA PONER EFECTOS DE APARICION
   */

  return (
    <div class="contenedor-principal mx-auto col-12 col-md-10 offset-md-2">
      <div class="py-5 my-4 text-center align-middle TitleMainDescription">
        <h4 id="welcomePortfolio">WELCOME TO MY PORTFOLIO</h4>
      </div>

      <div class="mainDescription p-4 custom-size-1">
        <h4>Hello!</h4>
        <p>
          I'm Daniel Valcarce, a dedicated and responsible Full Stack Developer
          with a passion for creating innovative web solutions. With a strong
          background in assisting with informatics in the Spanish Army since
          2015, I have honed my technical skills and gained valuable experience
          in various IT projects.
        </p>
      </div>

      <div class="mainDescription p-4 custom-size-2">
        <h4>Academic</h4>
        <p>
          I hold a degree in Web Development, which has provided me with a solid
          foundation in the latest technologies and industry best practices.
          Throughout my journey, I have embraced challenges and continuously
          expanded my skill set to stay ahead in this dynamic field.
        </p>
        <p>
          My expertise includes working with a wide range of technologies,
          including HTML, CSS, SCSS, Java, JavaScript, PHP, Python, SQL,
          Laravel, Vue.js, and React. These languages and frameworks have
          empowered me to create responsive and visually appealing web
          applications, ensuring an enhanced user experience and optimized
          performance.
        </p>
      </div>

      <div class="mainDescription p-4 custom-size-3">
        <h4>Achievements</h4>
        <p>
          One of my recent achievements is establishing my own company called
          Web Tek Innovations. As the founder and CEO, I have led a team of
          talented professionals to deliver successful web development projects
          for our clients. This entrepreneurial experience has taught me the
          importance of effective project management, efficient collaboration,
          and client satisfaction.
        </p>
      </div>

      <div class="mainDescription p-4 custom-size-4">
        <h4>Volunteer</h4>
        <p>
          In addition to my professional work, I also dedicate my time as a
          volunteer web developer for "Palma Compasiva," a non-profit
          organization. It gives me great joy to contribute my skills towards
          meaningful causes and make a positive impact in the community.
        </p>
      </div>

      <div class="mainDescription p-4 custom-size-5">
        <h4>More of Me</h4>
        <p>
          With a keen eye for detail, I strive to create elegant and
          user-friendly web solutions that meet the unique needs of businesses.
          I value teamwork, creativity, and a user-centric approach in my work,
          ensuring that every project I undertake is a testament to my
          dedication and expertise.
        </p>
      </div>

      <div class="mainDescription p-4 custom-size-6">
        <h4>Thanks!</h4>
        <p>
          Thank you for visiting my portfolio. Feel free to explore my projects
          and get in touch to discuss how I can help you achieve your web
          development goals. Let's create something exceptional together!
        </p>
      </div>
    </div>
  );
}
