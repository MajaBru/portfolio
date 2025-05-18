import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiPhp, DiMysql, DiMongodb, DiSass, DiVisualstudio, DiRasberryPi, DiNodejs, DiPython } from "react-icons/di";

const IconWithLabel = ({ Icon, label }) => (
  <div className="relative group flex flex-col items-center">
    <span className="absolute bottom-[60px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
      {label}
    </span>
    <Icon size={50} className="text-white" />
  </div>
);

export const AboutMe = () => {
  return (
    <section className="px-6 py-12 pb-70">
      <h2 className="text-3xl font-bold mb-4">About me</h2>
      <div className="mb-12">
        <p className="text-lg text-base-900">
          Hello! My name is Maja and I am 25 years old. I am currently finishing my bachelor's degree in <a href="https://www.ntnu.no/studier/bwu" target="_blank" rel="noopener noreferrer" className="text-accent underline">
        Web Development </a> at NTNU Gjøvik.
          I have always been interested in technology, which led me into this field. Throughout my studies,
          I have learned to work with both frontend and backend technologies.
          In my spare time, I enjoy gaming, hiking and traveling.
        </p>
      </div>

      <h3 className="text-2xl font-bold pb-12">Technologies</h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
        <IconWithLabel Icon={DiHtml5} label="HTML5" />
        <IconWithLabel Icon={DiCss3} label="CSS3" />
        <IconWithLabel Icon={DiSass} label="SASS" />
        <IconWithLabel Icon={DiJavascript1} label="JavaScript" />
        <IconWithLabel Icon={DiReact} label="React" />
        <IconWithLabel Icon={DiMongodb} label="MongoDB" />
        <IconWithLabel Icon={DiNodejs} label="NodeJS" />
        <IconWithLabel Icon={DiMysql} label="MySQL" />
        <IconWithLabel Icon={DiRasberryPi} label="Raspberry Pi" />
        <IconWithLabel Icon={DiPhp} label="PHP" />
        <IconWithLabel Icon={DiPython} label="Python" />
        <IconWithLabel Icon={DiVisualstudio} label="Visual Studio Code" />
      </div>
    </section>
  );
};
