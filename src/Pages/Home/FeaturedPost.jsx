import React from 'react';
import  MainImg from '../../Assets/Client-First - IMAGES/white-concrete-building-1838640.svg'
import ButtonAtm from '../../Components/ButtonAtm';
import { AllPost } from '../../DummyData/AllPost';

function FeaturedPost() {
    return (
        <div className=' w-full px-12 flex pb-16 flex-col md:flex-row gap-4 '>
            <div className="featureArea w-full md:w-[60%] flex flex-col gap-4">
                <span className='font-bold text-2xl'>
                    Featured Post
                </span>
                <div className="imageandhead border-2 w-full rounded px-6 py-5 flex flex-col gap-3">
                    <div className=' w-full object-cover bg-cover'>
                    {/* <MainImg/> */}
                    <img src={MainImg} className=' rounded object-cover bg-cover  h-full w-full' alt="" />
                    </div>
                        
                    <span className=' font-semibold'>Lorem building</span>
                    <span className=' font-semibold text-lg md:text-2xl'>This is a Demo Heading Lorem ipsum dolor sit, adipisicing elit. Repudiandae et  praesentium?</span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <ButtonAtm label={"Read More"} orange={true}/>
                </div> 
            </div>
            <div className="allPostArea w-full content-stretch md:w-[40%] flex flex-col gap-4">
                <div className=' flex justify-between'>

                <span className=' font-bold text-2xl'>
                    All Posts
                </span>
                <span className=' text-Purple cursor-pointer'>
                    View All
                </span>
                </div>
                <div className=' flex flex-col gap-1 max-h-[600px] scrollbar-hide  overflow-y-scroll'>
                    {AllPost?.map((itm)=>
                    {
                        return <div className='flex flex-col gap-2 rounded cursor-default px-3 py-3 hover:bg-YelloWish duration-300'>
                            <span>{itm?.author}</span>
                            <span className=' font-semibold text-xl'>{itm?.heading}</span>
                        </div>
                    })}
                </div>

            </div>
        </div>
      
    )
}

export default FeaturedPost
