import React from 'react'

function MiniBlog() {
    return (
        <div className=' px-14 w-full bg-Skin  py-14 flex flex-col md:flex-row gap-10 '>
            <div className="aboutArea border-r-2 flex flex-col gap-3 w-full md:w-1/2">
                <span className=' font-semibold'>
                    Heres details of  Us
                </span>
                <span className=' font-semibold text-3xl'>
                    What people say about our blog
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat ducimus quam eius, error eveniet.
                </span>
            </div>
            <div className="readArea flex flex-col gap-3 w-full md:w-1/2">
                <span className=' font-semibold text-lg md:text-2xl'>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo hic mollitia facere animi vitae voluptatibus velit voluptates Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </div>
        </div>
    )
}

export default MiniBlog
