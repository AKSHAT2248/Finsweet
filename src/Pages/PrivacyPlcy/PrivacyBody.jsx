import React from 'react'

function PrivacyBody() {

    const content =[
        {header:'Lorem ispum is a test Heading and im using this everywhere' , body:'Lorem ipsum dolor is a test Heading and im using this everywhere' , body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima rerum harum odio quam optio cum ea aliquid! Consequatur aliquam ex vitae quidem voluptatibus magni dolorem blanditiis autem suscipit ipsa commodi voluptate exercitationem eveniet id vero, provident modi reprehenderit distinctio veritatis? Molestias atque deleniti, sunt consectetur debitis sit, amet consectetur adipisicing elit. A minima rerum harum odio quam optio cum ea aliquid! Consequatur aliquam ex vitae quidem voluptatibus magni dolorem blanditiis autem suscipit ipsa commodi voluptate exercitationem eveniet id vero, provident modi reprehenderit distinctio veritatis? Molestias atque deleniti, sunt consectetur debitis commodi deserunt laudantium!'},
        {header:'Lorem ispum is a test Heading and im ' , body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima rerum harum odio quam optio cum ea aliquid! Consequatur aliquam ex vitae quidem voluptatibus magni dolorem blanditiis autem suscipit ipsa commodi voluptate exercitationem eveniet id vero, provident modi reprehenderit distinctio veritatis? Molestias atque deleniti, sunt consectetur is a test Heading and im using this everywhere' , body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima rerum harum odio quam optio cum ea aliquid! Consequatur aliquam ex vitae quidem voluptatibus magni dolorem blanditiis autem suscipit ipsa commodi voluptate exercitationem eveniet id vero, provident modi reprehenderit distinctio veritatis? Molestias atque deleniti, sunt consectetur debitis debitis commodi deserunt laudantium!'}
    ]
  return (
    <div className=' px-14 w-full justify-center items-center gap-7 flex flex-col'>
        {content?.map((itm)=>
        {
            return <div className=' w-2/3 flex flex-col gap-3'>
                <span className=' font-semibold text-2xl'>{itm?.header}</span>
                <span>{itm?.body}</span>
            </div>
        })}
     </div>
  )
}

export default PrivacyBody
