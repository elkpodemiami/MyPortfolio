import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Index from '../components/Index'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'
import Project from '../components/Project'

const MyRoutes = () => {
  return (
    <BrowserRouter>

      {/*Header and navigation*/}
      <HeaderNav />

      {/*Main Content*/}
      <section className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="/index" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path="*" element={
            <div className="page">
              <h1 className='heading'>Error 404</h1>
            </div>
          } />
        </Routes>
      </section>

      {/*Footer*/}
      <Footer />

    </BrowserRouter>
  )
}

export default MyRoutes
