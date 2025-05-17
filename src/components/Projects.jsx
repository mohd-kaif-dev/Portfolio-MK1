import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiArrowRightUpBoxLine } from "@remixicon/react";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Set initial positions
    gsap.set(cards, {
      position: "absolute",
      width: "80%",
      opacity: 0,
      y: (i) => i * 50, // Offset each card slightly
    });

    // Make first card visible initially
    gsap.set(cards[0], { opacity: 1, y: 0 });

    // Create scroll animations
    cards.forEach((card, i) => {
      if (i === 0) return; // Skip first card

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: () => `top+=${i * 25}% center`,
        end: () => `top+=${(i + 1) * 25}% center`,
        scrub: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });

          // Slide previous card up slightly
          if (i > 0) {
            gsap.to(cards[i - 1], {
              y: -50,
              opacity: 0.3,
              duration: 0.5,
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(card, {
            opacity: 0,
            y: 50,
            duration: 0.5,
          });

          // Restore previous card
          if (i > 0) {
            gsap.to(cards[i - 1], {
              y: 0,
              opacity: 1,
              duration: 0.5,
            });
          }
        },
      });
    });

    // Pin the entire section
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 20%",
      end: "bottom center",
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-center text-3xl font-bold mb-8 pt-16"
        >
          Projects
        </h2>

        <div ref={wrapperRef} className="relative min-h-[80vh] mt-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-xl"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
