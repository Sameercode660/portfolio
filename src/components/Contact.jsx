import React from 'react'

function Contact() {
  return (
    <div className='flex items-center justify-center flex-col w-[100vw] h-[300px] border-2'> 
     <div className='w-[100%] flex justify-center items-center'>
        <h1>Contact Me</h1>
     </div>
      <div className="github w-[100%] flex justify-center items-center">
        <a href="">
            <button>
                <span>logo</span>
                <span>GitHub</span>
            </button>
        </a>
      </div>
      <div className="instagram w-[100%] flex justify-center items-center">
        <a href="">
            <button>
                <span>Logo</span>
                <span>Instagram</span>
            </button>
        </a>
      </div>
      <div className="linkedIn w-[100%] flex justify-center items-center">
        <a href="" className=''>
            <button className='border-2'>
                <span>Logo</span>
                <span>LinkedIn</span>
            </button>
        </a>
      </div>
      <div className="twitter w-[100%] flex justify-center items-center">
        <a href="">
            <button>
                <span>Logo</span>
                <span>Twitter</span>
            </button>
        </a>
      </div>
    </div>
  )
}

export default Contact
