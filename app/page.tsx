"use client";
import { useEffect, useState } from "react";
import MyHome from "./components/Home";
import NavBar from "./components/NavBar";
import Academics from "./components/Academics";
import MovileNavBar from "./components/MovileNavBar";
import { useNav } from "./components/NavProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { isOpen } = useNav();
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen ">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.1), transparent 70%)`,
        }}
      />
      <AnimatePresence>{isOpen && <MovileNavBar />}</AnimatePresence>

      <header className="fixed top-0  ">
        <NavBar />
      </header>
      <main>
        <MyHome />

        <Academics />
      </main>
    </div>
  );
}
