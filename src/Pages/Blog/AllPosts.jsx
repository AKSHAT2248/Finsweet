import React from 'react'
import { AllPost } from '../../DummyData/AllPost'

function AllPosts() {
  return (
    <div className=' flex w-full flex-col gap-8 px-12'>
      <span className=' font-semibold text-2xl'>All Posts</span>
      <div className=' flex flex-col gap-10'>

        {AllPost?.map((itm) => {
          return <div className=' flex flex-col md:flex-row gap-5'>
            <div className=' h-[300px] w-1/2'>
              <img src={itm?.url} className=' h-full w-full bg-cover object-cover' alt="" />
            </div>
            <div className=' flex flex-col gap-3 justify-center'>
              <span className=' font-semibold text-lg'>

              {itm?.author}
              </span>
              <span className='font-bold text-2xl'>
                {itm?.heading}
              </span>
              <span className=' text-lg'>
                {itm?.description}
              </span>
            </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default AllPosts
