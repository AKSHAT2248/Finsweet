import React from 'react'
import FeaturedPost from './FeaturedPost'
import AllPosts from './AllPosts'
import Categories from '../Home/Caregories'

function Blog() {
  return (
    <div className=' flex flex-col gap-10 pb-12'>
      <FeaturedPost/>
      <AllPosts/>
      <span className=' text-xl font-semibold px-12'>
        All Categories
      </span>
      <Categories/>
    </div>
  )
}

export default Blog
