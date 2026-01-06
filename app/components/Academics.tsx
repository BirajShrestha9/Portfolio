import React from "react";

export default function Academics() {
  return (
    <div>
      <div>
        <div className="bg-black p-4">
          <h2 className="flex flex-col items-center text-4xl font-bold text-center mb-5 py-10 bg-black">
            Academics & Experience
            <span className="bg-blue-200 w-24 h-1 inline-block mt-3"></span>
          </h2>
          <div className="relative">
            <div className="h-full block bg-blue-200 w-0.5 absolute top-0 left-1/2 -translate-x-1/2"></div>

            <div className="flex items-center mb-7">
              <div className="hidden md:block w-[44vw]  text-left p-6">
                <p className="   text-md  text-gray-400">2081 - current</p>
              </div>

              <div className="mx-auto w-4 h-4 rounded-full bg-blue-200" />

              <div className="flex flex-col  gap-2 w-[44vw] border border-blue-200 rounded-lg bg-black p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl text-blue-200 font-bold">
                    Bachelor in Computer Science and Information Technology
                  </h2>
                  <p className="md:hidden lg:hidden xl:hidden ">
                    2081 - current
                  </p>
                </div>
                <p className="text-md font-md">Amrit Science Campus</p>

                <p className="text-sm text-gray-400"> Lainchaur, Kathmandu</p>
              </div>
            </div>

            <div className="flex items-center mb-7">
              <div className="flex flex-col  gap-2 w-[44vw] border border-blue-200 rounded-lg bg-black p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl text-blue-200 font-bold">
                    12th Grade
                  </h2>
                  <p className="md:hidden lg:hidden xl:hidden ">2078 - 2079</p>
                </div>
                <p className="text-md font-md">Everest Innovative College </p>
                <p className="text-sm text-gray-400"> Solteemode, Kathmandu</p>
              </div>
              <div className="mx-auto w-4 h-4 rounded-full bg-blue-200" />
              <div className="hidden md:block w-[44vw]  text-right p-6">
                <p className="   text-md  text-gray-400"> 2078 - 2079</p>
              </div>
            </div>
            <div className="flex items-center mb-7">
              <div className="hidden md:block w-[44vw]  text-left p-6">
                <p className="   text-md  text-gray-400">- 2077</p>
              </div>
              <div className="mx-auto w-4 h-4 rounded-full bg-blue-200" />

              <div className="flex flex-col  gap-2 w-[44vw] border border-blue-200 rounded-lg bg-black p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl text-blue-200 font-bold">
                    10th Grade
                  </h2>
                  <p className="md:hidden lg:hidden xl:hidden ">2077</p>
                </div>
                <p className="text-md font-md">New Diamond Academy School</p>
                <p className="text-sm text-gray-400">
                  {" "}
                  Purano Naikap, Kathmandu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
