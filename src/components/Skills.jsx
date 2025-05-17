import { useRef, useEffect } from "react";
import { SKILLS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);
  return (
    <section id="skills" className="pt-16" ref={skillsRef}>
      <div className="px-4 mb-16">
        <h2 className="mb-8 text-center text-2xl font-medium lg:text-4xl">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 mx-8">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="skill-item flex flex-col items-center text-center group"
          >
            <div className="mb-4 scale-100 group-hover:scale-75 hover:!scale-150 transition-all duration-300">
              {skill.icon}
            </div>
            <h3 className="mb-2 text-lg font-medium lg:text-xl">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
