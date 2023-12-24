import React, { useState } from "react";

function Menu() {

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [textColor, setTextColor] = useState('text-white')
  const [shadow, setShadow] = useState('')

  function isClicked()
  { 
    setOpen(prev => !prev)
  }
  function isScroll()
  {
    if(window.scrollY > 0)
    {
      setScroll(true)
      setTextColor('text-black')
      setShadow('shadow-md shadow-gray-500')
    }
    else
    {
      setScroll(false)
      setTextColor('text-white')
      setShadow('')
    }
  }
  window.addEventListener('scroll', isScroll)
  return (
    <>
      <div className={`w-[99vw] h-[99dvh] bg-[url('https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-no-repeat bg-cover bg-fixed `}>
        <div className={` z-50 fixed top-0 w-full ${scroll ? 'bg-white': 'bg-transparent'} ${shadow} transition-all duration-500 ease-in `}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              <span className={`font-bold text-2xl ${textColor}`}>DevUI</span>
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex space-x-8">
                <li>
                  <a
                    href="#"
                    className={`text-lg font-semibold ${textColor} hover:text-gray-900`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-lg font-semibold ${textColor} hover:text-gray-900`}
                  >
                    My Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-lg font-semibold ${textColor} hover:text-gray-900`}
                  >
                    My Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-lg font-semibold ${textColor} hover:text-gray-900`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-lg font-semibold ${textColor} hover:text-gray-900`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Button text
              </button>
            </div>
            <div className="lg:hidden">
              <svg
                onClick={isClicked}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        {/* Responve menu */}
        <div className={`justify-center items-center flex-col ${open ? 'flex' : 'hidden'} lg:hidden xl:hidden 2xl:hidden `}>
              <ul className="relative top-10 flex justify-center items-center flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white hover:text-gray-900 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white hover:text-gray-900 "
                  >
                    My Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white hover:text-gray-900 "
                  >
                    My Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
        {/* Menu container and name heading */}
        <div className="pl-12 pt-[50%] sm:pt-[40%] md:pt-[35%] lg:pt-[30%] xl:pt-[20%] sm:pl-14 md:pl-20 lg:pl-32 xl:pl-80 2xl:pl-80">
          <div className="namecontainer">
            <div className="p-2">
              <span className="text-yellow-50 text-6xl font-serif ">Hello, My name is</span>
            </div>
            <div className="p-2">
              <span className="text-yellow-50 text-6xl font-serif">Mohd Sameer</span>
            </div>
            <div className="p-2">
              <span className="text-yellow-50 text-2xl font-serif">I am a fullstack web developer, stack what i use is MERN </span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Menu;
