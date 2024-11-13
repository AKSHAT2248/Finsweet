import React from 'react';
import { ReactComponent as BannerImg } from '../../Assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'
import ButtonAtm from '../../Components/ButtonAtm';

function MainBanner() {
    return (
        <div className="relative w-full h-[300px] md:h-[510px]  overflow-hidden">
            <div className="absolute w-full object-bottom bg-bottom ">
                <BannerImg className="w-full h-full self-stretch object-cover bg-cover bg-bottom object-bottom " />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/60  to-transparent"></div>

            <div className=' absolute text-white top-2  md:top-24 w-full flex px-1 md:px-12 '>
                <div className=' text-center md:text-left flex flex-col gap-4'>
                    <span className='  tracking-wide'>POSTED  in  <span className=' tracking-wider capitalize font-semibold'> STARTUP </span> </span>
                    <h1 className="text-2xl md:text-4xl font-bold text-white">Step-by-step guide to choosing <br />  great font pairs</h1>
                    <p className=" text-sm md:text-base">By <span className=' text-YelloWish'> James Doe </span> | May 22, 2022</p>
                    <p>
                    There's a short summary or introductory text below the title, though  it’s a bit <br /> blurry  in the image. It likely provides additional context for the article
                    </p>
                    {/* <ButtonAtm className="mt-4 rounded">Read More</ButtonAtm> */}
                    <span className=' mx-auto md:mx-0'>

                    <ButtonAtm orange={true} label={"Read More"} />
                    </span>

                </div>
            </div>
          
        </div>
    )
}

export default MainBanner;