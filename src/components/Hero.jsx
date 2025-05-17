import { useRef, useEffect } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import heroImage from "../assets/Mohd-Kaif.webp";
import { gsap } from "gsap";
import TiltedCard from "./TiltedCard";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.6,
        },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-12 px-8 md:px-16"
      ref={heroRef}
    >
      {/* <div className="absolute inset-0 z-50" id="wrapper-canvas"></div> */}
      <div className="flex flex-col gap-2 justify-center items-center md:items-start">
        <div className="mt-0 lg:mt-24 text-center md:text-left">
          <h1 className="hero-title text-5xl uppercase lg:text-8xl font-extrabold">
            <span className="bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-950 bg-clip-text text-transparent">
              {PROFILE.firstName}
            </span>{" "}
            <span className="bg-gradient-to-b from-purple-100 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              {PROFILE.lastName}
            </span>
          </h1>
          <h2 className="hero-subheading bg-gradient-to-r from-pink-200 to-purple-700 bg-clip-text text-lg text-transparent lg:text-3xl font-bold">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl text-sm tracking-tighter lg:text-xl font-medium bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent text-center md:text-left">
          {PROFILE.subheading}
        </p>
        <div className="hero-btn mt-2 md:mt-12">
          <a
            href="./Mohd_Kaif_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mb-3 lg:mb-6 flex gap-1 rounded-full border border-pink200/50 px-3 py-2 tracking-tighter scale-100 hover:scale-105 transition-all duration-300 ease-in-out w-fit"
          >
            <span className="text-sm lg:text-lg">Download Resume</span>
            <RiArrowRightUpLine className="h-4 w-4" />
          </a>
        </div>
      </div>
      {/* <div className="hero-img border-2 border-purple-400/30 rounded-3xl p-2">
        <img
          src={heroImage}
          alt={PROFILE.name}
          width={400}
          height={400}
          className=" rounded-3xl border border-purple-300/20"
        />
      </div> */}
      <div className="hero-img mt-12">
        <TiltedCard
          imageSrc={heroImage}
          altText={PROFILE.name}
          captionText={"A Web Developer"}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={true}
          showTooltip={true}
          displayOverlayContent={false}
          overlayContent={<p className="tilted-card-demo-text">Mohd Kaif</p>}
        />
      </div>
    </section>
  );
};

export default Hero;
