import React from 'react'
import ButtonAtm from './ButtonAtm';
import { ReactComponent as LogoIcon } from '../Assets/Client-First - IMAGES/Logo 1.svg';
import NavLinks, { Navlinks } from './NavLinks'
import { useNavigate } from 'react-router-dom';

function Header() {

    const Navigate = useNavigate()

    return (
        <div className=' w-full flex justify-between h-[65px] items-center bg-MainDark px-1 md:px-10'>
            <div className="logo text-white">
                {/* LOGO */}
                <LogoIcon />
            </div>
            <div className="links hidden text-white md:flex gap-5 items-center">
                <ul className=' flex gap-5'>
                    
                    {Navlinks.map((itm) => {
                        return <li className=' cursor-pointer hover:opacity-95  ' onClick={() => Navigate(itm?.url)}>{itm?.label}</li>

                    })}
                </ul>
                <ButtonAtm label={'Subscribe'} onClick={() => console.log('subscribed')} />
            </div>
        </div>
    )
}

export default Header
