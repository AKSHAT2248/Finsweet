import React from 'react';
import mainImage from '../../Assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg'
import ButtonAtm from '../../Components/ButtonAtm';

function FeaturedPost() {
  return (
    <div className=' w-full flex justify-between px-12 py-14 md:flex-row flex-col bg-SlightGrey'>
        <div className="textArea flex flex-col gap-4 py-4">
            <span className=' font-semibold  tracking-wide'>FEATURED POST</span>
            <span className=' text-3xl font-semibold tracking-wide'>Step-By-Step guide to choosing great <br /> font pairs</span>
            <span>By John doe | 2024</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit officia <br /> temporibus maiores repudiandae. Voluptatum.</span>
            <ButtonAtm orange={true} label={"Read Here"}/>
        </div>
        <div className="imageArea">
            <img src={mainImage} alt="" />
        </div>
    </div>
  )
}

export default FeaturedPost
