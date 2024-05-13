import React from 'react'
import { projects } from '../data/projects.js'
import { Link } from 'react-router-dom'

const ListedProjects = ({limit}) => {
  return (
    <section className='projects'>
      {
        projects.slice(0, limit).map((project, index) => {
        return (
            <article key={index} className='project'>
              <div className='mask'>
                <img src={project.image} alt={project.name} />
              </div>
              <h2 className='project__heading'>{project.name}</h2>
              <p className='project__description'>{project.description}</p>
              <ul className='project__categories'>{ project.categories.map((category, index) => {
                return <li key={index} className='project__category'>{category}</li>
              })}</ul>
              <h2><Link className='project__url' to={"/project/" + project.id}>{project.url}</Link></h2>
              <ul className='project__technologies'>{ project.technologies.map((technology, index) => {
                return <li key={index} className='project__technology'>{technology}</li>
              })}</ul>
              <button className='button'>View Project</button>
            </article>
          )
        })
      }
      </section>
  )
}

export default ListedProjects
