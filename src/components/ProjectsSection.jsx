import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import superassessor from "../assets/super-assessor.png";
import itpimg from "../assets/itp-home2.png";
import wildlifeimg from "../assets/wildlife.png"
import { motion, useReducedMotion } from "framer-motion";

export const ProjectsSection = () => {

    const projects = [
    {
        slug: "the-super-assessor",
        title: "The SUPER Assessor",
        description: "A card game for creating assessment methods solo or in multiplayer. Share results and explore schemas created by the community.",
        image: superassessor,
    },
    {
        slug: "itp-association",
        title: "ITP Association Norway (bachelor's project)",
        description: "During our bachelor project, we created a new solution for the ITP association's website.",
        image: itpimg,
    },
    {
        slug: "saving-wildlife",
        title: "Saving Wildlife",
        description: "A fictional accessible website about saving and protecting the norwegian wildlife. The website is compliant with WCAG 2.1 Level AA",
        image: wildlifeimg,
        githublink: "https://github.com/MajaBru/Saving-Wildlife-IDG2012",
        livelink: "https://majabru.github.io/Saving-Wildlife-IDG2012/",
    },
    ];

  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="bg-bgBase text-base pb-30">
      <h2 className="text-3xl font-bold mb-2 text-textColor">Projects</h2>
      <div className="flex flex-col w-full lg:p-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 0.4,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
