"use client"

import React from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'
import { useState } from 'react'

function layout({children}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='max-w-[1920px] mx-auto'>
      {/* <div className='hidden h-full md:first-letter:w-64 flex-col fixed inset-y-0 z-50'> */}
      <div className={`h-full md:w-64 fixed top-0 inset-y-0 z-50 ${isSidebarOpen ? 'md:block' : 'hidden'}`}>
        <SideNav />
      </div>
      <div class={`md:ml-64 ${isSidebarOpen ? 'ml-0' : ''}`}>
        <TopHeader toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  )
}

export default layout