import React from 'react'

function MiniAboutUs() {
    return (
        <div className=' px-14 w-full bg-LightGrey  py-14 flex flex-col md:flex-row gap-10 '>
            <div className="aboutArea flex flex-col gap-3 w-full md:w-1/2">
                <span className=' font-semibold'>
                    About Us
                </span>
                <span className=' font-semibold text-3xl'>
                    We are a Community of <br /> content writers  who share their learnings
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat ducimus quam eius, error eveniet.
                </span>
                <span className=' text-Purple'>Read more  </span>
            </div>
            <div className="readArea flex flex-col gap-3 w-full md:w-1/2">
                <span className=' font-semibold'>
                    Reach us
                </span>
                <span className=' font-semibold text-2xl'>
                    Creating valuable content for the creaters all over the world
                </span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illum repudiandae ipsam perferendis, ea enim voluptas possimus accusantium odio optio?
                Lorem ipsum dolor sit amet.
            </div>
        </div>
    )
}

export default MiniAboutUs;
