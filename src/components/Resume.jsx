import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./styles/ResumeStyle.css";

export function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  /** FALTA PONER COLORES DE BORDE
   * FALTA PONER ICONOS
   * FALTA PONER LINKS
   * FALTA PONER TITULOS
   * FALTA PONER BORDES
   * FALTA PONER EFECTOS HOVER
   * FALTA PONER EFECTOS DE APARICION
   */

  return (
    <div class="text-white d-flex flex-wrap py-4">
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-light text-black bg-opacity-25 p-4 mb-4">
          <h4>WELCOME TO MY PORTFOLIO</h4>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-secondary p-4 ml-auto mb-4">
          <p>
            Hello, I'm Daniel Valcarce, a dedicated and responsible Full Stack
            Developer with a passion for creating innovative web solutions. With
            a strong background in assisting with informatics in the Spanish
            Army since 2015, I have honed my technical skills and gained
            valuable experience in various IT projects.
          </p>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-info p-4 mb-4">
          <p>
            I hold a degree in Web Development, which has provided me with a
            solid foundation in the latest technologies and industry best
            practices. Throughout my journey, I have embraced challenges and
            continuously expanded my skill set to stay ahead in this dynamic
            field.
          </p>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-warning p-4 ml-auto mb-4">
          <p>
            One of my recent achievements is establishing my own company called
            Web Tek Innovations. As the founder and CEO, I have led a team of
            talented professionals to deliver successful web development
            projects for our clients. This entrepreneurial experience has taught
            me the importance of effective project management, efficient
            collaboration, and client satisfaction.
          </p>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-danger p-4 mb-4">
          <p>
            In addition to my professional work, I also dedicate my time as a
            volunteer web developer for "Palma Compasiva," a non-profit
            organization. It gives me great joy to contribute my skills towards
            meaningful causes and make a positive impact in the community.
          </p>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-success p-4 ml-auto mb-4">
          <p>
            With a keen eye for detail, I strive to create elegant and
            user-friendly web solutions that meet the unique needs of
            businesses. I value teamwork, creativity, and a user-centric
            approach in my work, ensuring that every project I undertake is a
            testament to my dedication and expertise.
          </p>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <div class="rounded bg-primary p-4 mb-4">
          <p>
            Thank you for visiting my portfolio. Feel free to explore my
            projects and get in touch to discuss how I can help you achieve your
            web development goals. Let's create something exceptional together!
          </p>
        </div>
      </VisibilitySensor>
    </div>
  );
}
