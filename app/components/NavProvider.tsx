"use client";

import React, { createContext, useState, useContext } from "react";
interface NavContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface navProviderProps {
  children: React.ReactNode;
}

export const NavContext = createContext<NavContextValue | undefined>(undefined);

function NavProvider({ children }: navProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavProvider;

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    // Yadi Provider bhanda baahira use garyo bhane yo error falcha
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
