import React from 'react'
import { AuthorsData } from '../../DummyData/AuthorsData';
import companyIcon from '../../Assets/Client-First - icons/Negative (2).svg'
import companyIcon2 from '../../Assets/Client-First - icons/Negative (4).svg'

function ListofAuthors() {
    return (
        <div className=' grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2 md:px-12'>

            {AuthorsData?.slice(0,4)?.map((itm) => {
                return <div className='border bg-LightGrey hover:bg-Skin hover:shadow-xl duration-150 rounded flex flex-col items-center justify-center gap-1 px-3 py-6'>
                    <span className=' w-[80px] h-[80px] rounded-full'>

                        <img src={itm?.img} className=' h-full w-full bg-cover' alt="" />
                    </span>
                    <span className=' font-semibold text-lg'>
                        {itm?.name}
                    </span>
                    <span>{itm?.description}</span>
                    <span className=' flex gap-2 pt-1'>
                        <img src={companyIcon} alt="" />
                        <img src={companyIcon2} alt="" />
                        <img src={companyIcon} alt="" />
                        <img src={companyIcon2} alt="" />

                    </span>
                </div>
            })}
        </div>
    )
}

export default ListofAuthors
