import { useParams, Navigate } from "react-router";
import { useEffect } from "react";
import projectDetails from "../constants/projectdetails";

export const ProjectPage = () => {
    const { projectslug } = useParams();
    const project = projectDetails[projectslug]

    if (!project) {
        return (
            <Navigate to="/"/>
        )
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectslug]);

    return (
     <main className="px-6 text-textColor">
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>

      {project.mainImg && (
        <img
          src={project.mainImg}
          
          alt={`${project.title} main`}
          className="rounded-lg shadow-md lg:w-2/3 object-cover"
        />
      )}

      {project.techStack && (
        <section className="pb-12 pt-12">
          <h2 className="text-2xl font-semibold mb-3">Tech stack</h2>
          <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-base"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.about && (
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Prototyping</h2>
            <p className="mb-4">{project.about.prototype}</p>
            {project.about.prototypeImg && (
              <img
                src={project.about.prototypeImg}
                alt={`${project.title} prototype`}
                className="rounded-lg shadow-md object-cover"
              />
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Final result</h2>
            <p className="mb-4">{project.about.result}</p>
            <h3 className="text-xl font-semibold pt-6 mb-2">Images</h3>
            <div className="flex flex-wrap pt-4 gap-3">
        
              {project.about.imgs?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} result ${i + 1}`}
                  className="rounded-lg shadow-md w-full lg:w-2/3 lg:h-160 object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pt-10 pb-10">
        <h2 className="text-2xl font-semibold mb-3">Links</h2>
        <div className="flex gap-6">
            {project.livelink || project.githublink ? (
            <>
                {project.livelink && (
                <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline px-4 py-2 bg-base text-accent border-2 border-accent rounded-lg hover:bg-accent hover:text-base transition"
                >
                    Live site
                </a>
                )}
                {project.githublink && (
                <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline px-4 py-2 bg-base text-accent border-2 border-accent rounded-lg hover:bg-accent hover:text-base transition"
                >
                    GitHub
                </a>
                )}
            </>
            ) : (
            <p className="text-gray-400 italic">No links available</p>
            )}
        </div>
      </section>
    </main>
    )
}