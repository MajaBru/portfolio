import React from "react";
import portrett from "../assets/portrett_m.jpg";

export const Hero = () => {
return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-7 min-h-screen ">
        <img
            src={portrett}
            alt="Maja"
            className="rounded-full w-50 h-50 md:w-65 md:h-65 lg:h-90 lg:w-90 object-cover"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-color-primary mb-2">
                Hello, I'm Maja!
            </h1>
            <p className=" sm:text-lg text-color-base max-w-xl">
                I'm a web developer interested in creating modern web solutions.
            </p>
        <div>
        <a
            href="#projects"
            className="relative mt-5 inline-block border border-purple-300 group px-8 py-3 text-purple-300 font-medium cursor-pointer rounded-md w-fit"
        >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
            See projects
        </a>
        </div>
        </div>
    </section>
);
};
