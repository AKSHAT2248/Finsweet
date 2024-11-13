import React from 'react';
import image from '../../Assets/Client-First - IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg'
import image2 from '../../Assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'

function HeadAboutUs() {
    return (
        <div className=' flex flex-col gap-10'>
            <div className=' px-14 w-full bg-LightGrey  py-14 flex flex-col md:flex-row gap-10 '>
            <div className="aboutArea flex flex-col gap-3 w-full md:w-1/2">
                <span className=' font-semibold'>
                    New Mission
                </span>
                <span className=' font-semibold text-3xl'>
                    We are a Community of <br /> content writers  who share their learnings
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat ducimus quam eius, error eveniet.
                </span>
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
        <div className=' flex md:flex-row flex-col px-12 pb-12'>
            <div className="textArea flex flex-col gap-3 w-1/2 justify-center">
                <span className='font-semibold text-2xl'>Our teams of Creatives</span>
                <span className=' font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat.</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, aliquid rerum. Porro odio deleniti quaerat, non dolores sapiente fuga accusantium odit laborum, vero at quos.</span>
            </div>
            <div className="imageArea w-1/2 h-[380px]">
                <img src={image} className=' h-full w-full' alt="" />
            </div>
        </div>
        <div className=' flex md:flex-row flex-col px-12 pb-12 gap-16'>
            
            <div className="imageArea w-1/2 h-[380px]">
                <img src={image2} className=' h-full w-full' alt="" />
            </div>
            <div className="textArea flex flex-col gap-3 w-1/2 justify-center">
                <span className='font-semibold text-2xl'>Our teams of Creatives</span>
                <span className=' font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat.</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, aliquid rerum. Porro odio deleniti quaerat, non dolores sapiente fuga accusantium odit laborum, vero at quos.</span>
            </div>
        </div>
        </div>

    )
}

export default HeadAboutUs;