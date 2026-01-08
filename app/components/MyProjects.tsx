import React from "react";

const myClasses =
  "border-2 hover:cursor-pointer hover:shadow-[0_0_10px_4px_rgb(100,100,100)]  hover:-translate-y-2  hover:border-amber-50 rounded-lg flex flex-col  items-start p-6 py-7 mb-15 border-blue-400  transition-all duration-300 gap-3 ease-in-out bg-[rgba(245,242,242,0.05)] ";

export default function MyProjects() {
  const academicInfo = [
    {
      ProjectName: "AirBnb Clone",
      webLink: "https://airbnb-silk-ten.vercel.app/",
      Description:
        "A responsive rental app clone with property listings, search filters, and booking flow built using React/Next.js and Tailwind CSS.",
    },
    {
      ProjectName: "Netflix Clone",
      webLink: "https://netflix3-0.vercel.app/",
      Description:
        "A streaming UI clone featuring movie browsing, responsive design, with React/Next.js and Tailwind CSS.",
    },
  ];

  return (
    <div className="bg-black  pt-25">
      <div className="flex flex-col items-center text-3xl font-bold text-center mb-5 px-8">
        <h1>My Projects</h1>
        <span className="bg-blue-400 w-[100] h-1 inline-block mt-3"></span>
      </div>

      <div className="p-5 pt-15 w-full md:grid grid-cols-2 gap-x-15 ">
        {academicInfo.map((Info, index) => {
          return (
            <a href={Info.webLink} key={index} className={`${myClasses}`}>
              <p className="font-bold flex gap-3 text-blue-400 text-xl">
                {Info.ProjectName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </p>
              <p>{Info.Description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
