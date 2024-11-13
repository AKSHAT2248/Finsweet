import React from 'react';
import { companiesData } from '../../DummyData/CompaniesLogo';


function Collabration() {
  return (
    <div className=' grid sm:grid-cols-2 grid-cols-2 md:grid-cols-4 px-10 py-6 lg:grid-cols-5 gap-4'>
        {companiesData?.map((itm)=>
        {
            return <div className=' w-full flex items-center justify-center'>
                    <img src={itm?.img} className=' self-center ' alt="" />
            </div>
        })}
    </div>
  )
}

export default Collabration;