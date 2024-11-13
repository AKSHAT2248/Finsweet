import React from 'react'
import PrivacyHeader from './PrivacyHeader'
import PrivacyBody from './PrivacyBody'

function PrivacyPolicy() {
  return (
    <div className=' w-full flex flex-col gap-12 pb-12 '>
        <PrivacyHeader/>
        <PrivacyBody/>
    </div>
  )
}

export default PrivacyPolicy
