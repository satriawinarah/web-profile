import React from 'react';
import "./CVTemplate.css";

function CVTemplate(props) {
    return (
        <div className="cv-template">
            <header>
                <h1>{props.name}</h1>
                <p>{props.jobTitle}</p>
            </header>
            <section>
                <h2>Experience</h2>
                {props.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                        <h3>{item.jobTitle}</h3>
                        <p>{item.company}</p>
                        <p>{item.dateRange}</p>
                        <ul>
                            {item.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section>
                <h2>Education</h2>
                {props.education.map((item, index) => (
                    <div className="education-item" key={index}>
                        <h3>{item.degree}</h3>
                        <p>{item.school}</p>
                        <p>{item.dateRange}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    {props.skills.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
            <footer>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </footer>
        </div>
    );
}

export default CVTemplate;
