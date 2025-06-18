import { useRef, useEffect, useState } from "react";
import { PROFILE } from "../constants";
import {
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiArrowUpSLine,
} from "@remixicon/react";
import heroImage from "../assets/Mohd-Kaif.webp";
import { gsap } from "gsap";
import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      let scrollProgress = document.getElementById("progress-bar");
      let position = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((position * 100) / calcHeight);
      setProgress(scrollValue);
      scrollProgress.style.background = `conic-gradient(
        #ff69b4 ${scrollValue}%, 
        transparent ${scrollValue}%
      )`;
    };

    document.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      document.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, [progress]);

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
      className="flex min-h-screen flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 lg:gap-12 px-8 md:px-16"
      ref={heroRef}
    >
      {/* <div className="absolute inset-0 z-50" id="wrapper-canvas"></div> */}
      <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
        <div className="mt-0 lg:mt-24 text-center lg:text-left">
          <h1 className="hero-title text-5xl uppercase md:text-7xl lg:text-8xl font-extrabold">
            <span className="bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-950 bg-clip-text text-transparent">
              {PROFILE.firstName}
            </span>{" "}
            <span className="bg-gradient-to-b from-purple-100 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              {PROFILE.lastName}
            </span>
          </h1>
          <h2 className="hero-subheading bg-gradient-to-r from-pink-200 to-purple-700 bg-clip-text text-lg text-transparent md:text-3xl font-bold">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl text-sm tracking-tighter md:text-xl font-medium bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent text-center lg:text-left">
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
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="progress-bar"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-14 md:bottom-20 lg:bottom-5 right-8 w-12 h-12 rounded-2xl flex items-center justify-center text-white z-50 shadow-md shadow-black cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-transparent backdrop-blur-md ${
          progress < 1 ? "hidden" : ""
        }`}
      >
        {progress <= 98 ? (
          <span
            id="progress-value"
            className="bg-black/90 backdrop-blur-lg border-1 border-purple-500/50 w-9 h-9 rounded-2xl flex items-center justify-center text-xs font-semibold flex-col group p-1"
          >
            {progress}%
            <RiArrowDownSLine className="h-4 w-4 group-hover:hidden" />
            <RiArrowUpSLine className="h-4 w-4 hidden group-hover:block" />
          </span>
        ) : (
          <span className="flex flex-col items-center justify-center text-sm font-semibold tracking-tighter group">
            <RiArrowUpSLine className="h-4 w-6 scale-100 group-hover:scale-150 transiton-all duration-300 ease-in-out" />
            TOP
          </span>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
