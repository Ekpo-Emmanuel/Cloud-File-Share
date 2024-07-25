"use client"

import { FolderUp } from 'lucide-react';
import { Files } from 'lucide-react';
import { Shield } from 'lucide-react';
import Image from 'next/image';
import {React, useState} from 'react'
import { useAuth } from '../../(pages)/dashboard/layout';

import Link from 'next/link';

function SideNav() {
    const { user, loading } = useAuth();
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            path: '/dashboard/upload',
            icon: FolderUp
        },
        {
            id: 2,
            name: 'Files',
            path: '/dashboard/files',
            icon: Files,
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/dashboard/upgrade',
            icon: Shield
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div class="flex h-screen flex-col justify-between border-e bg-white">
        <div class="px-0 py-6 md:px-4">
            <div class='px-4'>
                <Image src="/logo.svg" alt="logo" width={80} height={50}/>
            </div>
            <ul class="mt-10 space-y-1">
                {menuList.map((item, index) => (
                   <li key={index} >
                    <Link href={item.path}>
                    <button class={`flex w-full items-center gap-4 p-4 sm:rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-200 
                    ${activeIndex == index ? 'bg-blue-50 text-blue-500' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    >
                        <span>{item.icon && <item.icon size={20}/>}</span>
                        <span >{item.name}</span>
                    </button>
                    </Link>
                   </li>
                ))}
            </ul>
        </div>
        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <div class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                <div>
                    <p class="text-xs flex items-center gap-2">
                    <strong class="block font-medium">
                        {user ? 
                            <div afterSignOutUrl="/" > 
                                <img 
                                    className="h-8 w-8 rounded-full" 
                                    src={user.photoURL} 
                                /> 
                            </div> : 
                            ''
                        }
                        </strong>
                    <span class="text-gray-500"> {user ? user.email : ''} </span>
                    </p>
                </div>
            </div>
        </div>
    </div>        
  )
}

export default SideNav