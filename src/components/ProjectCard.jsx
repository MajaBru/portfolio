import React from "react";
import { Link } from "react-router";

export const ProjectCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden bg-secondary w-full mx-auto mb-8">
  <div className="md:w-2/3 h-70 md:h-[500px] lg:h-[500px] overflow-hidden">
    <img
      src={props.image}
      alt={props.title}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="md:w-1/3 p-6 md:p-9 flex flex-col justify-between">
    <div className="pt-4 md:pt-7">
      <h3 className="text-xl md:text-2xl font-semibold text-textColor mb-2">{props.title}</h3>
      <p className="text-textColor pt-2 md:pt-3 mb-4">{props.description}</p>
    </div>

    <div className="flex flex-wrap gap-3 pb-6 md:pb-8">
      {props.livelink && (
        <a
          href={props.livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white p-1 outline-1 rounded-md outline-textColor"
        >
          Live site
        </a>
      )}

      {props.githublink && (
        <a
          href={props.githublink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white p-1 outline-1 rounded-md outline-textColor"
        >
          GitHub
        </a>
      )}
    </div>

    <Link
      to={`/${props.slug}`}
      className="w-full cursor-pointer text-center text-accent hover:underline px-4 py-2 hover:bg-accent hover:text-base transition duration-300 ease-in-out rounded-xl bg-base"
    >
      Read more
    </Link>
  </div>
</div>

  );
};
