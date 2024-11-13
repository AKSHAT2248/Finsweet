import React from 'react'

function ButtonAtm(
    {
        label,
        orange,
        onClick
    }
) {
  return (
    <div onClick={onClick} className={` rounded w-fit hover:opacity-90 cursor-pointer px-9 py-2 ${orange ? 'bg-YelloWish':'bg-white '} text-black `}>
      {label}
    </div>
  )
}

export default ButtonAtm
