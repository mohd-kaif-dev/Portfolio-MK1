import { useRef, useEffect } from "react";
import { EXPERIENCES } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);
  return (
    <section id="works" className="py-16" ref={experienceRef}>
      <div className="mx-auto max-w-4xl px-12">
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
          Experience
        </h2>
        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="experience-item flex flex-col items-start justify-between md:flex-row relative"
            >
              <div className="w-full text-sm font-semibold text-stone=300 md:w-1/4 lg:text-lg">
                {experience.yearRange}
              </div>
              <div className="hidden md:block absolute left-1/4 h-full w-[4px]">
                <svg width="4" height="100%" className="overflow-visible">
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="100%"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-purple-400"
                  />
                </svg>
              </div>
              <div className="w-full md:w-3/4 md:pl-8">
                <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                  {experience.role} -{" "}
                  <span className="bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {experience.company}
                  </span>
                </h3>
                <p className="mb-4 text-sm lg:text-base">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <ul>
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="mr-2 mb-1 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
