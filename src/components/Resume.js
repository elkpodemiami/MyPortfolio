import React from 'react';
import { resume } from '../data/resume.js';

const Resume = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Resume</h1>
      <section className='section'>
        <h2 className='section__title'>Personal Information</h2>
        <div className='info'>
          <p><strong>Name:</strong> {resume.personalInfo.name}</p>
          <p><strong>Title:</strong> {resume.personalInfo.title}</p>
          <p><strong>Email:</strong> {resume.personalInfo.email}</p>
          <p><strong>Phone:</strong> {resume.personalInfo.phone}</p>
          <p><strong>Address:</strong> {resume.personalInfo.address}</p>
          <p><strong>Website:</strong> {resume.personalInfo.website}</p>
          <p><strong>Summary:</strong> {resume.personalInfo.summary}</p>
        </div>
      </section>

      <section className='section'>
        <h2 className='section__title'>Education</h2>
        <div className='info'>
          {resume.education.map((edu, index) => (
            <div key={index}>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>University:</strong> {edu.university}</p>
              <p><strong>Location:</strong> {edu.location}</p>
              <p><strong>Graduation Year:</strong> {edu.graduationYear}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section'>
        <h2 className='section__title'>Experience</h2>
        <div className='info'>
          {resume.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>Title:</strong> {exp.title}</p>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Location:</strong> {exp.location}</p>
              <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>
              <p><strong>Description:</strong> {exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section'>
        <h2 className='section__title'>Skills</h2>
        <div className='info'>
          <ul className='skills-list'>
            {resume.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;

