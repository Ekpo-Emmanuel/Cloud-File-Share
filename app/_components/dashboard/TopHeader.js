"use client";

import { React, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useAuth } from "../../(pages)/dashboard/layout";

function TopHeader({ toggleSidebar }) {
  const { user, loading } = useAuth();
  return (
    <div
      className="flex p-5 border-b items-center justify-between 
    md:justify-end"
    >
      <div class="md:hidden" onClick={toggleSidebar}>
        <Menu />
      </div>
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={50}
        class="md:hidden"
      />
      <div class="flex items-center gap-2 cursor-default">
        <div>
          <p class="text-xs flex items-center gap-2">
            <span class="hidden text-gray-500 sm:block">
              {" "}
              {user ? user.email : ""}{" "}
            </span>
            <strong class="font-medium sm:block">
              {user ? (
                <div afterSignOutUrl="/">
                  <img className="h-8 w-8 rounded-full" src={user.photoURL} />
                </div>
              ) : (
                ""
              )}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
