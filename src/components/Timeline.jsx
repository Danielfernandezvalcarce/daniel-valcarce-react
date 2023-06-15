import React from "react";
import "./styles/TimelineStyle.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <ul className="timeline-events">
        <li>
          <div className="event-content">
            <h3>Present</h3>
          </div>
        </li>
        <li>
          <div className="event-content">
            <h3>Web Tek Innovations</h3>
            <p>
              Founder & CEO |{" "}
              <span className="timeline-highlight">2023 - Present</span>
            </p>
            <p>
              Web Tek Innovations is a leading technology company specializing
              in web development and innovation. As the founder and CEO, I have
              been driving the company's growth and overseeing various projects
              and initiatives.
            </p>
          </div>
        </li>
        <li>
            <div className="event-content">
              <h3>Web applications development</h3>
              <p>
              Student |{" "}
              <span className="timeline-highlight">2021 - 2023</span>
            </p>
              <p>
                Started studying web application development at Web Tek
                Innovations, where I founded and became the CEO.
              </p>
              <p>
                Embarked on a journey to learn the latest technologies and best
                practices in web development, paving the way for my career in
                the industry.
              </p>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
