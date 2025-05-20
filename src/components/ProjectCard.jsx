import ExternalLink from "../assets/external_link.svg?react";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8`}
    >
      <div className="w-full lg:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold mb-4 ">{project.title}</h3>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          {project.description}
        </p>
        <div>
          <strong className="block mb-3">Tech Stack:</strong>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-200/20 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-64 lg:w-1/2 border-2 border-purple-400/50 rounded-3xl p-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative rounded-xl overflow-hidden"
        >
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-60 rounded-2xl object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-[0.3]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-12 h-12" />
            <span className="text-sm font-medium text-white">
              Click to Open
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
