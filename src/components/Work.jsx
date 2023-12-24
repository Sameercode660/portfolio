import React from 'react'
import Workcart from './unitComponent/Cart'

function Work() {
  return (
    <div className='flex justify-center flex-col items-center border-2 w-[100vw] h-auto'>
      <div className="heading">
        <h1>My Work</h1>
      </div>
      <div className="cart flex justify-center items-center flex-wrap">
        <Workcart imgUrl={'https://avitechlab.com/images/uploads/tournify-logo.webp'} logoName={'sample'} description={'this is the description of this particular logo'} link={'https://github.com/Sameercode660'}></Workcart>
      </div>
    </div>
  )
}

export default Work
