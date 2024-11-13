import React from 'react'
import HeadAboutUs from './HeadAboutUs'
import AboutBanner from './AboutBanner'
import ListofAuthors from '../Home/ListofAuthors'

function AboutUs() {
  return (
    <div className=' flex flex-col gap-12 pb-12'>
      <HeadAboutUs/>
      <span className=' mx-auto font-bold text-2xl'>
        List of Authors
      </span>
      <ListofAuthors/>
    </div>
  )
}

export default AboutUs
