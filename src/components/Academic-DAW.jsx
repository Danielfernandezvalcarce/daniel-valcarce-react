import "./styles/Academic-DAW-Style.css";
import ministerioEducacion from "../assets/img/ministerioEducacion.png";


export function AcademicDAW() {
  return (
    <>
      <div className="daw p-4">
        <h3 id="tituloDAW">Web Application Development</h3>
        <p>
          I hold a Higher Degree in Web Application Development, which I pursued
          at CIFP "Borja Moll" from 2021 to 2023. This program equipped me with
          comprehensive skills in developing, implementing, and maintaining web
          applications using specific technologies. I ensure secure data access
          and adhere to accessibility, usability, and quality criteria as per
          established standards.
        </p>
        <div className="intraTitulo">
            <h4>
            Throughout my academic journey, I have achieved the following
            competencies:
            </h4>
        </div>

        <ul>
          <li>
            Configuring and managing computer systems based on specific usage
            needs and established criteria.
          </li>
          <li>
            Applying security techniques and procedures to systems, services,
            and applications, ensuring compliance with the security plan.
          </li>
          <li>
            Managing application servers, adapting their configurations to
            facilitate web application deployment.
          </li>
          <li>
            Administering databases, interpreting their logical designs and
            ensuring data integrity, consistency, security, and accessibility.
          </li>
          <li>
            Developing database-driven web applications using appropriate
            languages, access objects, and mapping tools.
          </li>
          <li>
            Integrating content into the logic of a web application by
            developing data access components according to specifications.
          </li>
          <li>
            Creating interfaces in web applications following a style guide,
            utilizing markup languages and web standards.
          </li>
          <li>
            Developing multimedia components for integration into web
            applications, employing specific tools and adhering to established
            specifications.
          </li>
          <li>
            Integrating multimedia components into the web application
            interface, analyzing interactivity, accessibility, and usability.
          </li>
          <li>
            Developing and integrating software components within the web server
            environment, using specific tools and languages to meet application
            requirements.
          </li>
          <li>
            Building services to integrate their functionality into other web
            applications, ensuring their proper functioning.
          </li>
          <li>
            Integrating distributed services and content into web applications,
            ensuring their functionality.
          </li>
        </ul>
        <div className="intraTitulo">
            <h4>The modules covered in this curriculum include:</h4>
        </div>
        <ul>
          <li>Computer Systems</li>
          <li>Databases</li>
          <li>Programming</li>
          <li>Markup Languages and Information Management Systems</li>
          <li>Development Environments</li>
          <li>Client-Side Web Development</li>
          <li>Server-Side Web Development</li>
          <li>Web Application Deployment</li>
          <li>Web Interface Design</li>
          <li>Web Application Development Project</li>
          <li>Training and Employment Orientation</li>
          <li>Entrepreneurship</li>
          <li>Workplace Training</li>
        </ul>
        <p>
          In addition to my academic achievements, I was honored to receive an
          excellence scholarship from the Spanish Army. You can explore some of
          my most relevant academic projects on my GitHub profile.
        </p>
        <img src={ministerioEducacion} alt="" className="w-25 h-25 align-self-center"/>
      </div>
    </>
  );
}
