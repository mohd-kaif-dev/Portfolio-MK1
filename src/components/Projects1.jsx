import { useLayoutEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects1 = () => {
  const wrapperRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card:not(:first-child):not(:nth-child(2))",
        {
          x: (index) => (index % 2 === 0 ? 1800 : -1800), // Reduced initial offset
          rotate: (index) => (index % 2 === 0 ? 50 : -50),
        },
        {
          x: 0,
          rotate: (index) => (index % 2 === 0 ? 2 : -2),
          stagger: 0.5, // Reduced stagger time
          scrollTrigger: {
            pin: wrapperRef.current,
            start: () => (window.innerWidth < 768 ? "top 15%" : "top 32%"),
            end: "+=800", // Define an end point
            scrub: 1, // Increased scrub value for smoother scrolling
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section id="projects" className="py-24 min-h-screen px-0 lg:px-32 ">
      <div className="mx-auto px-4 max-w-5xl">
        <div
          ref={wrapperRef}
          className="grid grid-cols-1  mt-12 relative w-full h-[650px] lg:h-[500px] p-16"
        >
          <h2 className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 text-2xl font-medium lg:text-4xl ">
            Projects
          </h2>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`project-card border-2 border-purple-400/20 rounded-3xl p-8 backdrop-blur-xl ${
                index % 2 == 0 ? "bg-[#1C102A]" : "bg-[#180317]"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects1;
