import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function Navbar(){
    return(
        <Router>
            <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Daniel Valcarce</a>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav text-white">
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Academic Titles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Volunteering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </Router>
    );

}