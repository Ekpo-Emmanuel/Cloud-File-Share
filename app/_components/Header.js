
'use client';

import { useUserSession } from '../../hooks/use-user-session';
import { useAuth } from '../../contexts/AuthContext';
import { signInWithGoogle, signOutWithGoogle } from '../../libs/firebase/auth';
import { createSession, removeSession } from '../../actions/auth-actions';
import Image from 'next/image'
import React from 'react'

function Header({ session }) {
    const userSessionId = useUserSession(session);
    const { user } = useAuth();

    const handleSignIn = async () => {
      const userUid = await signInWithGoogle();
      if (userUid) {
        await createSession(userUid);
      }
    };
  
    const handleSignOut = async () => {
      await signOutWithGoogle();
      await removeSession();
    };


  return (
    <>
    <header class="bg-white  fixed right-0 left-0 z-50 top-0" >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <Image src="/logo.svg" alt="logo" width={100} height={100} loading="eager"  />

            <div class="hidden md:block">
                <nav aria-label="Global">
                <ul class="flex items-center gap-6 text-sm">
                    <li>
                    <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                    </li>


                    <li>
                    <a class="text-gray-500 transition hover:text-gray-500/75" href="/about"> About Us </a>
                    </li>

                    <li>
                    <a class="text-gray-500 transition hover:text-gray-500/75" href="/contact"> Contact </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div class="flex items-center gap-4">
                {user ? (
                    <div onClick={handleSignOut} class="sm:flex sm:gap-4">
                        <div class="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white" >
                        Sign Out
                        </div>
                    </div>
                ): (
                    <div onClick={handleSignIn} class="sm:flex sm:gap-4">
                        <div class="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white" >
                        Sign In
                        </div>
                    </div>
                )}

                <div class="block md:hidden">
                    <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </header>
    </>
  )
}

export default Header