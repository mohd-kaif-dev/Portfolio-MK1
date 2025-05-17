import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiDiscordFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        opacity: 0,
        y: -30,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-icon", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);
  return (
    <section id="contact" className="py-16" ref={contactRef}>
      <div className="text-center px-4">
        <h2 className="contact-text mb-12 text-center text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="contact-text mb-4 text-md md:text-xl">
          Feel free to reach out to me via email or social media:{" "}
          <a
            href="mailto:mk.kaif.dev@gmail.com"
            className="border-b text-lg hover:text-purple-400 transition-colors duration-300"
          >
            mk.kaif.dev@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-4 md:space-x-6 group">
          <div className="contact-icon">
            <a
              href="https://www.linkedin.com/in/mohd-kaif74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <RiLinkedinBoxFill className="w-8 h-8 hover:text-purple-400 transition-all duration-300 hover:scale-150 group-hover:scale-80" />
            </a>
          </div>

          <div className="contact-icon">
            <a
              href="https://www.instagram.com/humaan_7.5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Instagram profile"
            >
              <RiInstagramFill className="w-8 h-8 hover:text-purple-400 transition-all duration-300 hover:scale-150 group-hover:scale-80" />
            </a>
          </div>

          <div className="contact-icon">
            <a
              href="https://discord.gg/feXYQf6G"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Discord server"
            >
              <RiDiscordFill className="w-8 h-8 hover:text-purple-400 transition-all duration-300 hover:scale-150 group-hover:scale-80" />
            </a>
          </div>

          <div className="contact-icon">
            <a
              href="https://www.x.com/Kaicifer7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X profile"
            >
              <RiTwitterXFill className="w-8 h-8 hover:text-purple-400 transition-all duration-300 hover:scale-150 group-hover:scale-80" />
            </a>
          </div>

          <div className="contact-icon">
            <a
              href="https://github.com/mohd-kaif-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <RiGithubFill className="w-8 h-8 hover:text-purple-400 transition-all duration-300 hover:scale-150 group-hover:scale-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
