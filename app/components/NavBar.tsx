import React from "react";
import { useNav } from "./NavProvider";
import { easeInOut, motion } from "framer-motion";
function NavBar() {
  const { setIsOpen } = useNav();
  const NavVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    visible: {
      animate: { opacity: 0, y: -100 },

      transition: {
        ease: easeInOut,
        duration: 0.5,
        delay: 0,
      },
      viewport: { once: false, amount: 0.2 },
    },
  };

  return (
    <motion.div
      variants={NavVariants}
      initial="initial"
      whileInView="visible"
      className=" px-4.5 h-15 z-10 md:px-7.5  bg-[rgba(46,205,249,0.45)] flex justify-between gap-8 items-center shadow-[0_0px_10px_2px_rgba(0,0,0,0.3)] backdrop-blur-md"
    >
      <a href="#home" className="font-bold text-sm md:text-xl">
        Biraj Shrestha
      </a>
      <div className="hidden sm:flex gap-8 md:gap-10 items-center  text-sm md:text-md  ">
        <a href="#home">Home</a>
        <a href="#academics">Academic</a>
        <a href="#projects">Projects</a>
        <a href="#mySkills">Skills</a>
        <a href="#mySkills">Resume</a>
        <a href="#contact">Contact</a>
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
    </motion.div>
  );
}

export default NavBar;
