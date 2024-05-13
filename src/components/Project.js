import React, { useEffect, useState } from 'react'
import { projects } from '../data/projects.js'
import { useParams } from 'react-router-dom'

const Project = () => {
  const [project, setProject] = useState(null);
  const params = useParams();

  useEffect(() => {
    let project = projects.find(project => project.id === parseInt(params.id));
    setProject(project);
  }, [params.id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page project-item'>
      <div className='mask'>
        <img src={project.image} alt={project.name} />
      </div>
      <h1 className='heading'>{project.name}</h1>
      <ul className='project__categories'>
        {project.categories.map((category, index) => (
          <li key={index} className='project__category'>{category}</li>
        ))}
      </ul>
      <p className='project__description'>{project.description}</p>
      <ul className='project__technologies'>
        {project.technologies.map((technology, index) => (
          <li key={index} className='project__technology'>{technology}</li>
        ))}
      </ul>
      <h2><a className='project__url' href={project.url} target='_blank' rel='noreferrer'> Go to the project</a></h2>
    </div>
  );
}

export default Project;
