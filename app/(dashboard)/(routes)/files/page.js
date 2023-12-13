import React from 'react'
import Link from 'next/link';
import { Plus } from 'lucide-react';


/**
 * Renders an empty state component.
 *
 * @return {JSX.Element} The rendered empty state component.
 */
const Empty = () => (

<div class="bg-white mt-10 divide-y divide-gray-200">
    <div class="w-full text-center mx-auto py-12" colspan="5">
      <img class="w-32 h-32 mx-auto" src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690261234/di7tvpnzsesyo7vvsrq4.svg" alt="image empty states" />
      <p class="text-gray-700 font-medium text-lg text-center">Start organizing your files</p>
      {/* <p class="text-gray-500 text-center text-sm">Open Documentation</p> */}
      <Link href='/upload'>
        <button class="flex items-center m-auto mt-4 gap-3 rounded first-letter:rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo -500 disabled:bg-gray-300 " >
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
          <Plus />
          Add Your First File 
        </button>
      </Link>
    </div>
</div>
);


function Files() {
  return (
    
    <div>
      <Empty />
    </div>
  )
}

export default Files