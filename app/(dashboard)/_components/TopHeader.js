"use client"

import {React, useState} from 'react'
import { Menu } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useUser } from "@clerk/nextjs";


/**
 * Renders the top header component.
 *
 * @param {Object} toggleSidebar - A function to toggle the sidebar.
 * @return {JSX.Element} The rendered top header component.
 */
function TopHeader({toggleSidebar}) {
  const { isSignedIn, user } = useUser();

  return (
    <div className='flex p-5 border-b items-center justify-between 
    md:justify-end'>
        <div class='md:hidden' onClick={toggleSidebar}>
            <Menu/>
        </div>
        <Image src='/logo.svg' alt='logo' width={80} height={50}  class='md:hidden'/>
        <div class="flex items-center gap-2 cursor-default">
                <div>
                    <p class="text-xs flex items-center gap-2">
                    <span class="hidden text-gray-500 sm:block"> {isSignedIn ? user.emailAddresses[0].emailAddress : ''} </span>
                    <strong class="font-medium sm:block">{isSignedIn ? <UserButton afterSignOutUrl="/"/> : ''}</strong>
                    </p>
                </div>
            </div>
    </div>
  )
}

export default TopHeader