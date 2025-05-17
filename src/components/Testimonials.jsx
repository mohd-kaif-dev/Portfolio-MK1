import React, { useRef, useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants";
import { gsap } from "gsap";

const Testimonials = () => {
  const testimonialRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideInterval = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideInterval.current = gsap.to(
        {},
        {
          duration: 8,
          repeat: -1,
          onRepeat: () => {
            setCurrentSlide((prev) =>
              prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
            );
          },
        }
      );
    }, testimonialRef);

    return () => {
      ctx.revert();
      if (slideInterval.current) {
        slideInterval.current.kill();
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseEnter = () => {
    if (slideInterval.current) {
      slideInterval.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (slideInterval.current) {
      slideInterval.current.resume();
    }
  };

  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
      <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
        Testimonials
      </h2>

      <div className="max-w-2xl mx-auto relative">
        <div className="overflow-hidden mx-4 md:mx-0">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center text-center gap-8 border-2 border-purple-300/30 rounded-lg p-4 select-none"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mb-4 h-24 w-24 rounded-full border-4 object-cover"
                />
                <blockquote className="max-w-xl text-md leading-relaxed lg:text-lg">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="mt-4 text-lg">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-stone-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-purple-500" : "bg-purple-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
