import React from "react";
import Image from "next/image";
import myAvatar from "../../public/avtar-dz7QYeYu.png";
function Home() {
  return (
    <div className="px-8 w-full min-h-screen bg-linear-to-b from-blue-600  to-black  flex flex-col justify-center  md:flex-row items-center  md:pl-15 transform ">
      <div className="pl-7 order-1 text-center md:text-left md:order-0">
        <h1 className="text-5xl  font-bold md:text-6xl ">
          Hi, I&#39;m <span className="text-blue-500">Biraj</span>
        </h1>
        <h2 className="text-lg sm:text-xl  md:text2xl my-5 sm:my-7">
          I am a <span className="text-blue-500">Frontend Developer</span>
        </h2>
        <p className=" text-md sm:text-lg  md:w-80/100  ">
          I am a dedicated developer who designs responsive, user-friendly
          websites with elegant design and great functionality. I prioritize
          frontend excellence supported by sturdy backend logic, continuously
          evolving to build the future of the web.
        </p>
      </div>
      <div className="mx-auto lg:mr-30">
        <Image
          src={myAvatar}
          alt="image"
          objectFit="contain"
          className="w-75 my-10 md:w-250 "
        />
      </div>
    </div>
  );
}

export default Home;
