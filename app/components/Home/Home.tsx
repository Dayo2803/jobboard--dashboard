import React from 'react'
import Hero from './Hero'
import CandidateCategory from './CandidateCategory'
import JobCategory from './JobCategory'
import FeaturedJobs from './FeaturedJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <CandidateCategory/>
      <JobCategory/>
      <FeaturedJobs/>
      <Footer />
    </div>
  )
}

export default Home

