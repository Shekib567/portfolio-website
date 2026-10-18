import "./styles/Career.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const getDisplayYear = (period: string) => {
  return period.match(/\b\d{4}\b/)?.[0] ?? period;
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Berufserfahrung <span>&</span>
          <br /> Ausbildung
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
          <Link
            to="/resume"
            className="career-resume-link"
            data-cursor="disable"
          >
            Vollständigen Lebenslauf ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
