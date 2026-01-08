import React from "react";
import Image from "next/image";
function MySkills() {
  const skillStyle =
    "text-lg flex gap-3 items-center font-medium mb-4 mx-auto w-[65vw] md:w-[40vw] p-2 hover:bg-[rgba(245,242,242,0.08)] rounded-lg transition duration-150 bg-[rgba(245,242,242,0.05)]";
  const skillsArray = [
    { name: "React", imageLink: "icons8-react-96.png" },
    {
      name: "Javascript & Typescript",
      imageLink: "javascriptIcon8.png",
    },
    { name: "HTML & CSS", imageLink: "icons8-html-96.png" },
    { name: "Tailwind CSS", imageLink: "tailwindcssIcons8.png" },
    { name: "Node.js", imageLink: "icons8-node-js-96.png" },
    { name: "Framer motion", imageLink: "icons8-framer-100.png" },
  ];
  return (
    <div id="mySkills" className=" bg-black pt-25 ">
      <div className="flex flex-col items-center text-4xl font-bold text-center mb-12 px-8">
        <h1>Tools & Skills</h1>
        <span className="bg-blue-400 w-[100] h-1 inline-block mt-3"></span>
      </div>
      <div className="md:flex items-center bg-black p-5 w-full gap-4 justify-around">
        <div className="flex flex-col  ">
          <h2 className="text-2xl font-bold text-blue-500 text-center mb-8">
            Tools I Use
          </h2>
          <div className={skillStyle}>
            <Image
              src="/icons8vscode48.png"
              alt="vscode"
              width={30}
              height={30}
            />
            Visual Studio Code
          </div>
          <div className={skillStyle}>
            {" "}
            <Image
              src="/icons8-github.svg"
              alt="github"
              width={30}
              height={30}
            />
            Git & Github
          </div>
          <div className={skillStyle}>
            {" "}
            <Image
              src="/icons8-vite-48.png"
              alt="vite"
              width={30}
              height={30}
            />
            Vite
          </div>
          <div className={skillStyle}>
            {" "}
            <Image
              src="/icons8-powershell-32.png"
              alt="github"
              width={25}
              height={25}
            />
            Powershell/Gitbash
          </div>
        </div>
        <div className="pt-25 mx-auto w-[80vw] md:pt-0 md:mx-0 md:w-[40vw] bg-black ">
          <h2 className="text-2xl font-bold text-blue-500 text-center mb-8">
            My Skills
          </h2>
          {skillsArray.map((skill, index) => {
            return (
              <div key={index} className="text-lg mb-5 font-medium   mx-auto">
                <span className="flex gap-2">
                  {" "}
                  <Image
                    src={`/${skill.imageLink}`}
                    alt="vscode"
                    width={28}
                    height={20}
                  />
                  {skill.name}
                </span>

                <span className="w-full block bg-linear-to-r from-blue-500 to-teal-500  h-0.5 " />
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="text-2xl flex flex-col items-center font-bold text-blue-500 text-center pt-20 bg-black px-8">
        View My Resume
        <span className="bg-blue-400 w-[100] h-1 inline-block mt-3"></span>
      </h2>
      <div className="flex justify-center bg-black">
        <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 h-10 px-7 hover:cursor-pointer py-8 mt-12 flex items-center rounded-xl gap-2 text-white">
          <Image src={`/icons8-eye-96.png`} alt="cv" width={28} height={20} />
          <span> View CV</span>
        </button>
      </div>
    </div>
  );
}

export default MySkills;
