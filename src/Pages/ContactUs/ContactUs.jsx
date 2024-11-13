import React from 'react'
import ButtonAtm from '../../Components/ButtonAtm'

function ContactUs() {
    return (
        <div className=' px-12 pt-12 pb-12 flex flex-col items-center justify-center gap-6'>
            <span className=' font-semibold text-lg'>Contact Us</span>
            <span className=' font-bold text-3xl'>Let's Start a Conversation </span>
            <span className=' text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error  impedit
                tempore saepe veritatis <br />
                repudiandae  rem ad aspernatur consequatur? At, error!
            </span>
            <div className=' w-[60%] bg-Purple px-5 py-8 flex flex-col md:flex-row'>
                <div className=' w-1/2 flex flex-col gap-4 text-white'>
                    <span>Working Hours</span>
                    <span>
                        Monday to Friday <br />
                        10 to 6
                    </span>
                </div>
                <div className=' w-[60%] flex flex-col gap-4 text-white'>
                    <span>
                        Contact Us
                    </span>
                    <span>
                        08089899897 <br />
                    <span>test@gmail.com</span>
                    </span>
                </div>
            </div>
            <div className=' flex flex-col gap-2 w-[60%]'>
                <input type="text" className=' w-full px-6 py-2 outline-none border ' placeholder='First Name' />
                <input type="text" className=' w-full px-6 py-2 outline-none border ' placeholder='Last Name' />
                <input type="text" className=' w-full px-6 py-2 outline-none border ' placeholder='Email Address' />
                <textarea name="" placeholder='Enter Message' className=' outline-none border px-6 py-2' id="" cols="30" rows="6"></textarea>
                <div className=' w-full flex justify-center items-center '>


                <ButtonAtm label={"Send Message"} orange={true}/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ContactUs
