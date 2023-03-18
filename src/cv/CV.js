import React from 'react';
import CVTemplate from './CVTemplate';

function CV() {
    const experience = [
        {
            jobTitle: 'Software Engineer',
            company: 'Acme Inc.',
            dateRange: 'January 2019 - Present',
            responsibilities: [
                'Developed and maintained web applications using React and Node.js',
                'Designed and implemented RESTful APIs using Express.js',
                'Collaborated with team members to plan and execute projects',
            ],
        },
        // ... add more experience items as needed
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of XYZ',
            dateRange: 'August 2015 - May 2019',
        },
        // ... add more education items as needed
    ];

    const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

    return (
        <div className="app">
            <CVTemplate
                name="John Doe"
                jobTitle="Full Stack Developer"
                experience={experience}
                education={education}
                skills={skills}
                email="johndoe@example.com"
                phone="(123) 456-7890"
            />
        </div>
    );
}

export default CV;