import React from 'react'
import Constant from '../_utils/Constant'

/**
 * Renders the Hero component.
 *
 * @return {JSX.Element} The rendered Hero component.
 */
function Hero() {
  return (
  <>
    <section class="bg-white mx-auto max-w-screen-xl mt-0 sm:mt-28 px-4 py-16 lg:flex ">
      <div class="text-left">
        <div class='sm:px-28'>
          <section class="relative flex items-center w-full">
            <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div class="relative flex-col items-start m-auto align-middle">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-24">
                  <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                    <div class="max-w-xl text-center lg:text-left">
                      <div>

                        <p class="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                          Upload, Save and easily share your files in One place
                        </p>
                        <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                          {/* {Constant.desc} */}
                        </p>
                      </div>
                      <div class="block justify-center gap-3 mt-10 lg:justify-start sm:flex">
                        <a class="flex items-center w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring active:bg-indigo-600 sm:w-auto sm:text-center" href="/get-started" >
                          <span> Get Started </span>
                        </a>
                        <a class="flex items-center rounded px-4 py-3 text-sm font-medium transition-colors  duration-200 ease-in-out  hover:text-indigo-600" href="/get-started" >
                          <span> Demo &nbsp; → </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                    <img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif" />
                    {/* <div className='mt-10 flex justify-center'>
                        <img src="/icons/firebase.svg" height={30} width={30}  class='m-4 mt-0 mb-0'/>
                        <img src="/icons/react.svg" height={40} width={40}  class='m-4 mt-0 mb-0'/>
                        <img src="/icons/tailwind.svg" height={40} width={40}  class='m-4 mt-0 mb-0'/>
                        <img src="/icons/clerk.svg" height={80} width={80}  class='m-4 mt-0 mb-0'/>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  </>

  )
}

export default Hero