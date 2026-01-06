import React from "react";
import { useNav } from "./NavProvider";

function NavBar() {
  const { setIsOpen } = useNav();
  return (
    <div className=" px-4.5 h-15 md:px-7.5  bg-[rgba(46,205,249,0.45)] flex justify-between gap-8 items-center shadow-[0_0px_10px_2px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <h2 className="font-bold text-sm md:text-xl">Biraj Shrestha</h2>
      <div className="hidden sm:flex gap-8 md:gap-10 items-center  text-sm md:text-md  ">
        <h2>Home</h2>

        <h2>Academic</h2>
        <h2>Projects</h2>
        <h2>Skills</h2>
        <h2>Resume</h2>
        <h2>Contact</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="sm:hidden cursor-pointer size-6"
        onClick={() => setIsOpen((e) => !e)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* contact should be resume skills hidden in a bar */}
    </div>
  );
}

export default NavBar;
