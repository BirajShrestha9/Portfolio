import React from "react";

const academicsClasses =
  "w-screen flex items-center justify-between   md:w-[44vw] border-2 border-blue-400 rounded-lg bg-black p-6";

export default function Academics() {
  const academicInfo = [
    {
      Education: "Bachelor in Computer Science and Information Technology",
      College: "Amrit Science Campus",
      Location: "Lainchaur, Kathmandu",
      TimePeriod: "2081 - current",
    },
    {
      Education: "12th Grade",
      College: "Everest Innovative College",
      Location: "Solteemode, Kathmandu",
      TimePeriod: "2078 - 2079",
    },
    {
      Education: "10th Grade",
      College: "New Diamond Academy School",
      Location: "Purano Naikap, Kathmandu",
      TimePeriod: "--- 2077",
    },
  ];

  return (
    <div>
      <div>
        <div className="bg-black p-4">
          <h2 className="flex flex-col items-center text-3xl font-bold text-center mb-5 py-10 px-8">
            Academics & Experience
            <span className="bg-blue-400 w-[100] h-1 inline-block mt-3"></span>
          </h2>
          <div className="relative">
            {/* //just a vertical line that works after md: screen */}
            <div className="h-full block md:bg-blue-400 w-0.5 absolute top-0 left-1/2 -translate-x-1/2" />
            {/* ............. */}

            {/* TEST */}
            {academicInfo.map((Info, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative ">
                  <div className="h-full block md:bg-blue-400 w-0.5 absolute top-0 left-1/2 -translate-x-1/2" />
                  {/* item1 */}
                  <div
                    className={`  items-center mb-7 ${
                      isEven ? "" : "flex-row-reverse"
                    } flex`}
                  >
                    <div className="hidden md:block w-[44vw]  text-left p-6">
                      <p className="  text-md  text-gray-400">
                        {Info.TimePeriod}
                      </p>
                    </div>

                    <div className="hidden z-20 md:block mx-auto w-4 h-4 rounded-full bg-blue-400" />
                    <div className={academicsClasses}>
                      <div className="w-65/100 flex flex-col gap-2 justify-between">
                        <h2 className="text-lg text-blue-200 font-bold">
                          {Info.Education}
                        </h2>
                        <p className="text-md font-md">{Info.College}</p>

                        <p className="text-sm text-gray-400">{Info.Location}</p>
                      </div>

                      <p className="min-h-auto md:hidden lg:hidden xl:hidden ">
                        {Info.TimePeriod}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* TEST */}

            {/* 1 */}

            {/* <div className="flex items-center mb-7">
              <div className="hidden md:block w-[44vw]  text-left p-6">
                <p className="   text-md  text-gray-400">2081 - current</p>
              </div>

              <div className="hidden md:block mx-auto w-4 h-4 rounded-full bg-blue-200" />

              <div className={academicsClasses}>
                <div className="w-65/100 flex flex-col gap-2 justify-between">
                  <h2 className="text-lg text-blue-200 font-bold">
                    Bachelor in Computer Science and Information Technology
                  </h2>
                  <p className="text-md font-md">Amrit Science Campus</p>

                  <p className="text-sm text-gray-400"> Lainchaur, Kathmandu</p>
                </div>

                <p className="min-h-auto md:hidden lg:hidden xl:hidden ">
                  2081 - current
                </p>
              </div>
            </div> */}
            {/* 2 */}
            {/* <div className="flex items-center mb-7">
              <div className={academicsClasses}>
                <div className="w-65/100 flex flex-col gap-2 justify-between">
                  <h2 className="text-lg text-blue-200 font-bold">
                    12th Grade
                  </h2>
                  <p className="text-md font-md">Everest Innovative College </p>
                  <p className="text-sm text-gray-400">
                    {" "}
                    Solteemode, Kathmandu
                  </p>
                </div>
                <p className="md:hidden lg:hidden xl:hidden ">2078 - 2079</p>
              </div>
              <div className="hidden md:block mx-auto w-4 h-4 rounded-full bg-blue-200" />
              <div className="hidden md:block w-[44vw]  text-right p-6">
                <p className="   text-md  text-gray-400"> 2078 - 2079</p>
              </div>
            </div> */}
            {/* 3 */}
            {/* <div className="flex items-center mb-7">
              <div className="hidden md:block w-[44vw]  text-left p-6">
                <p className="   text-md  text-gray-400">- 2077</p>
              </div>
              <div className="hidden md:block mx-auto w-4 h-4 rounded-full bg-blue-200" />

              <div className={academicsClasses}>
                <div className="w-65/100 flex flex-col gap-2 justify-between">
                  <h2 className="text-lg text-blue-200 font-bold">
                    10th Grade
                  </h2>
                  <p className="text-md font-md">New Diamond Academy School</p>
                  <p className="text-sm text-gray-400">
                    {" "}
                    Purano Naikap, Kathmandu
                  </p>
                </div>
                <p className="md:hidden lg:hidden xl:hidden ">--- 2077</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
