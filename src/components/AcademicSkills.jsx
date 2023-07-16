import "./styles/AcademicSkillsStyle.css";
import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import SASS from "../assets/img/sass.png";
import JAVA from "../assets/img/java.png";
import JAVASCRIPT from "../assets/img/js.png";
import PYTHON from "../assets/img/python.png";
import PHP from "../assets/img/php.png";
import SQL from "../assets/img/sql.png";
import LARAVEL from "../assets/img/laravel.png";
import VUE from "../assets/img/vue.png";
import REACT from "../assets/img/react.png";
import GIT from "../assets/img/gitColor.png";

export function AcademicSkills() {
  return (
    <>
      <div>
        <div id="skills" className="skills">
          <h3 id="tituloSkills">Skills</h3>
          <div className="skill">
            <img src={HTML} alt="" className="imgSkills" />
            <h4>HTML</h4>
          </div>
          <div className="skill">
            <img src={CSS} alt="" className="imgSkills" />
            <h4>CSS</h4>
          </div>
          <div className="skill">
            <img src={SASS} alt="" className="imgSkills" />
            <h4>SASS</h4>
          </div>
          <div className="skill">
            <img src={JAVA} alt="" className="imgSkills" />
            <h4>JAVA</h4>
          </div>
          <div className="skill">
            <img src={JAVASCRIPT} alt="" className="imgSkills" />
            <h4>JAVASCRIPT</h4>
          </div>
          <div className="skill">
            <img src={PYTHON} alt="" className="imgSkills" />
            <h4>PYTHON</h4>
          </div>
          <div className="skill">
            <img src={PHP} alt="" className="imgSkills" />
            <h4>PHP</h4>
          </div>
          <div className="skill">
            <img src={SQL} alt="" className="imgSkills" />
            <h4>SQL</h4>
          </div>
          <div className="skill">
            <img src={LARAVEL} alt="" className="imgSkills" />
            <h4>Laravel</h4>
          </div>
          <div className="skill">
            <img src={VUE} alt="" className="imgSkills" />
            <h4>Vue</h4>
          </div>
          <div className="skill">
            <img src={REACT} alt="" className="imgSkills" />
            <h4>React</h4>
          </div>
          <div className="skill">
            <img src={GIT} alt="" className="imgSkills" />
            <h4>GIT</h4>
          </div>
        </div>
      </div>
    </>
  );
}
