import { AcademicDAW } from "../components/Academic-DAW";
import { AcademicSkills } from "../components/AcademicSkills";
import "./styles/AcademicStyle.css";

export function Academic() {
    return (
        <>
            <main className="mx-auto col-12 col-md-10 offset-md-2">
                <h4 id="educationTitle">EDUCATION, QUALIFICATIONS AND SKILLS</h4>
                <AcademicDAW />
                <AcademicSkills />
            </main>
        </>
    );
}

export default Academic;