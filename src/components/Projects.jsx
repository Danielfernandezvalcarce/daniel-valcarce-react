import "./styles/ProjectsStyle.css"

export function Projects() {
  return (
    <>
      <section className="projects">
        <div className="project">
          <h4 className="projectTitle">Ascenso a Cabo</h4>
          <a href="https://ascensoacabo.com/" className="enlaceProyecto">ascensoacabo.com</a>
          <div className="technologies">
            <h5>Technologies:</h5>
            <p>
              PHP, Laravel, Blade, HTML, TailWind, Bootstrap, CSS, SASS, MySQL
            </p>
          </div>
          <p>
            As the visionary, lead developer, and CEO of the "Ascenso a Cabo"
            project, I successfully created a platform dedicated to providing
            comprehensive test and exam simulations for individuals seeking
            promotion to the rank of "Cabo" in the military. Leveraging
            technologies such as PHP, Laravel, Blade, and MySQL, I developed
            user-friendly interfaces that facilitated effective exam
            preparation. The website, has empowered countless military personnel
            to enhance their career prospects through rigorous practice and
            preparation.
          </p>
        </div>

        <div className="project">
          <h4 className="projectTitle">Tu Permanencia (Working on it)</h4>
          <a href="https://danielvalcarce.com/" className="enlaceProyecto">tupermanencia.com</a>
          <div className="technologies">
            <h5>Technologies:</h5>
            <p>
              PHP, Laravel, Blade, HTML, TailWind, Bootstrap, CSS, SASS, MySQL
            </p>
          </div>
          <p>
            I am currently working on the "Tu Permanencia" project, which aims
            to assist military personnel in making informed decisions regarding
            their career continuity. Through the provision of test and exam
            simulations, we aim to equip individuals with the necessary
            resources and information to support their service extension
            decisions, ultimately leading to their successful career journey
            until retirement. As the lead developer, my role encompasses website
            development and creating an intuitive user experience to ensure that
            individuals receive valuable guidance and support throughout their
            military careers.
          </p>
        </div>

        <div className="project">
          <h4 className="projectTitle">Palma Compasiva</h4>
          <a href="https://palmacompasiva.org/" className="enlaceProyecto">palmacompasiva.org</a>
          <div className="technologies">
            <h5>Technologies:</h5>
            <p>WordPress</p>
          </div>
          <p>
            I contributed to the "Palma Compasiva" project, a non-profit
            organization dedicated to providing assistance and support to
            vulnerable individuals in our community. As a web developer, I
            collaborated with the team to create a user-friendly website that
            effectively showcased their mission, initiatives, and ways to get
            involved. It was fulfilling to contribute my skills towards a
            meaningful cause and make a positive impact.
          </p>
        </div>
      </section>
    </>
  );
}
