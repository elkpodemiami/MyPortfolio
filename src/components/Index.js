import React from 'react'
import { Link } from 'react-router-dom'
import ListedProjects from './ListedProjects'

const Index = () => {
  return (
    <div className="index">
      <h1>
        Hi, I'm Lucas!
        <br /><br />
        I'm a seasoned <strong>Software Designer</strong> with a passion for crafting innovative solutions. With over a decade of experience in <strong>PHP development</strong>, I'm now venturing into exciting new territories like <strong>JavaScript, React, and Python</strong>.
        <br /><br />
        My journey in programming spans <strong>10-15 years</strong>, during which I've honed my skills and embraced challenges to grow both personally and professionally.
        <br /><br />
        Explore my portfolio to see my latest projects and delve into my diverse skill set!
      </h1>
      <h2 className='title'>
        If you're interested in working together, please feel free to <Link to="/contact">Contact Me!</Link>
        <br /><br />
        I'm always looking for new opportunities and exciting projects.
      </h2>
      <section className="latest-projects">
        <hr />
        <h2 className='heading'>Latest Projects</h2>
        <p>
          These are some of my latest projects.
        </p>

        <ListedProjects limit={3} />
      </section>
    </div>
  )
}

export default Index
