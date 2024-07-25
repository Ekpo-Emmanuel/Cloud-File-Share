"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import SideNav from "../../_components/dashboard/SideNav";
import TopHeader from "../../_components/dashboard/TopHeader";
import { onAuthStateChanged } from "../../../libs/firebase/auth";

const AuthContext = createContext({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <div className="max-w-[1920px] mx-auto">
        <div
          className={`h-full md:w-64 fixed top-0 inset-y-0 z-50 ${
            isSidebarOpen ? "md:block" : "hidden"
          }`}
        >
          <SideNav />
        </div>
        <div className={`md:ml-64 ${isSidebarOpen ? "ml-0" : ""}`}>
          <TopHeader toggleSidebar={toggleSidebar} />
          {children}
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default DashboardLayout;
