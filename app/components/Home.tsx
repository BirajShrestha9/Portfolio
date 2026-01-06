import React from "react";
import Image from "next/image";
import myAvatar from "../../public/avtar-dz7QYeYu.png";
function Home() {
  return (
    <div className="px-8 w-screen min-h-screen bg-linear-to-b from-blue-600  to-black  flex flex-col justify-center -gap-2 md:flex-row items-center  md:pl-20 transform ">
      <div className="px-7 my-auto order-1 text-center md:text-left md:order-0">
        <h1 className="text-4xl  font-bold md:text-6xl ">
          Hi, I&#39;m <span className="text-biraj-red-light">Biraj</span>
        </h1>
        <h2 className="text-xl  md:text2xl pt-3 pb-3">
          I am a Frontend Developer
        </h2>
        <p className=" text-sm  md:text-xl  ">
          I am a dedicated developer who designs responsive, user-friendly
          websites with elegant design and great functionality. I prioritize
          frontend excellence supported by sturdy backend logic, continuously
          evolving to build the future of the web.
        </p>
      </div>
      <div className="mx-auto">
        <Image
          src={myAvatar}
          alt="image"
          objectFit="contain"
          className="w-60 mt-18 md:w-400 lg:w-400 "
        />
      </div>
    </div>
  );
}

export default Home;
