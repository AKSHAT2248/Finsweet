import React from 'react'
import { CategoryData } from '../../DummyData/CategoryData'

function Categories() {
  return (
    <div className=' w-full px-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 '>
      {CategoryData?.map((itm)=>
      {
        return <div className=' hover:bg-YelloWish cursor-default duration-150 flex flex-col gap-2 py-7  px-5 border hover:shadow-md rounded-lg'>
            <span className=' bg-white w-fit rounded'>
                <img src={itm.logo} className='h-[40px] w-[40px]' alt="" />
            </span>
            <span className=' font-semibold text-xl'>
                {itm?.heading}
            </span>
            <span>
                {itm?.description}
            </span>
        </div>
      })}
    </div>
  )
}

export default Categories;