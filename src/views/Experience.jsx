import "./styles/ExperienceStyle.css"
import {Projects} from "../components/Projects"

export function Experience() {
    return (
        <>
            <main id="mainExperience" className="mx-auto col-12 col-md-10 offset-md-2">
                <h4 id="experienceTitle">EXPERIENCE</h4>
                <Projects />
            </main>
        </>
    )
}

export default Experience;