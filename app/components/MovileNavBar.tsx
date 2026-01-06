import React from "react";
import { useNav } from "./NavProvider";
import { motion } from "framer-motion";
function MovileNavBar() {
  const Nav = ["Home", "Academics", "Projects", "Skills", "Resume", "Contact"];

  const { setIsOpen } = useNav();

  const ParentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const childCOntainer = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,

        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="bg-black/80 bg-opacity-50 absolute top-0 left-0 w-screen z-50 h-screen sm:hidden backdrop-blur-md "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 rotate-45 absolute top-3 right-3 cursor-pointer"
        onClick={() => setIsOpen((e) => !e)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <motion.div
        variants={ParentContainer}
        initial="hidden"
        animate="visible"
        className="flex text-xl text-center gap-10 absolute top-40 left-1/2 transform -translate-x-1/2 flex-col i"
      >
        {Nav.map((NavItem) => (
          <motion.a
            href="./"
            key={NavItem}
            variants={childCOntainer}
            className="hover:text-blue-500 cursor-pointer"
          >
            {NavItem}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MovileNavBar;
