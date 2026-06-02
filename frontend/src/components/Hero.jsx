import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { IoArrowForwardOutline } from "react-icons/io5";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import Prism from '../components/Prism';

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Hero = () => {
  const loadingRef = useRef(null);
  const counterContainerRef = useRef(null);
  const comp = useRef(null);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem("hasVisitedBefore", "true");
    } else {
      setIsFirstVisit(false);
      if (loadingRef.current) {
        gsap.set(loadingRef.current, { display: "none" });
      }
    }
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: isFirstVisit ? 0.3 : 0, 
        defaults: {
          ease: "hop",
        },
      });

      if (isFirstVisit) {
        const counts = gsap.utils.toArray(counterContainerRef.current.children);
        counts.forEach((count, index) => {
          const digits = count.querySelectorAll(".digit h1");

          tl.to(digits, { y: "0%", duration: 1, stagger: 0.075 }, index * 1);
          tl.to(
            digits,
            { y: "-100%", duration: 1, stagger: 0.075 },
            index * 1 + 1
          );
        });

        tl.to(".spinner", { opacity: 0, duration: 0.5 });
        // Join animation: "Code" from left and "Botix" from right
        tl.fromTo(
          "#word-1 h1",
          { x: "-120%", opacity: 0 },
          { x: 0, y: "0%", opacity: 1, duration: 1 },
          "<"
        );
        tl.fromTo(
          "#word-2 h1",
          { x: "120%", opacity: 0 },
          { x: 0, y: "0%", opacity: 1, duration: 1 },
          "<"
        );
        // Keep original exit timing and flow
        tl.to("#word-1 h1", { y: "120%", duration: 0.9, delay: 0.3 });
        tl.to("#word-2 h1", { y: "-120%", duration: 0.9 }, "<");

        tl.to(".block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () =>
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
        });
      } else {
        gsap.set(".hero-img", { scale: 1 });
        gsap.set(".block", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        });
      }

      tl.to(
        [".nav", ".line h1", ".line p"],
        {
          y: "0%",
          duration: isFirstVisit ? 1.5 : 0.8,
          stagger: isFirstVisit ? 0.2 : 0.1,
        },
        isFirstVisit ? "<" : "0"
      );
      tl.to(
        [".cta", ".cta-icon"],
        {
          scale: 1,
          duration: isFirstVisit ? 1.5 : 0.8,
          stagger: isFirstVisit ? 0.75 : 0.3,
          delay: isFirstVisit ? 0.75 : 0,
        },
        "<"
      );
      tl.to(
        ".cta-label p",
        {
          y: "0%",
          duration: isFirstVisit ? 1.5 : 0.8,
          delay: isFirstVisit ? 0.5 : 0,
        },
        "<"
      );
    }, comp);

    return () => ctx.revert();
  }, [isFirstVisit]);

  const counterValues = ["Robotics","AI", "3D Designs", "Lots of LEARNING", "Let's Hop ON!"];

  return (
    <main ref={comp} className="w-screen h-dvh overflow-hidden font-gilroy">
      {isFirstVisit && (
        <div
          ref={loadingRef}
          className="loading fixed top-0 left-0 w-screen h-dvh overflow-hidden z-[2] pointer-events-none"
        >
          <div className="overlay absolute top-0 w-full h-full flex pointer-events-none">
            <div className="block w-full h-full bg-brand-green [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"></div>
            <div className="block w-full h-full bg-brand-green [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"></div>
          </div>

          <div className="intro-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[0.25em]">
            <div className="word overflow-hidden" id="word-1">
              <h1 className="text-black text-[2rem] font-medium -translate-y-[120%]">
                <span className="font-editorial italic text-[2.8rem] pr-[0.25rem]">
                  Code
                </span>
              </h1>
            </div>
            <div className="word overflow-hidden" id="word-2">
              <h1 className="text-black text-[2.8rem] font-medium translate-y-[120%]">
                Botix
              </h1>
            </div>
          </div>

          <div className="spinner-container absolute bottom-[10%] left-1/2 -translate-x-1/2">
            <div className="spinner w-[50px] h-[50px] border-[1.4px] border-white rounded-full border-t-[rgba(255,255,255,0.125)] animate-spin"></div>
          </div>

          <div
            ref={counterContainerRef}
            className="counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
          >
            {counterValues.map((value, idx) => (
              <div
                key={idx}
                className="count absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex"
              >
                <div className="digit overflow-hidden pt-4">
                  <h1 className="font-editorial text-[4rem] lg:text-[10rem] text-white font-normal translate-y-[120%] text-center whitespace-nowrap">
                    {value}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <div className="container w-screen h-svh overflow-hidden">
        <div className="hero-img absolute top-0 w-full h-dvh -z-[1] scale-[1.5]">
          <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
  <Prism
    animationType="rotate"
    timeScale={0.7}
    height={4.3}
    baseWidth={5.8}
    scale={3.9}
    hoverStrength={2}
    transparent
    hueShift={-1.04}
    colorFrequency={1}
    noise={0}
    glow={1}
  />
</div>
        </div>

        {/* Wrap Nav so GSAP can target `.nav` without changing Nav.jsx */}
        <div className={isFirstVisit ? "nav -translate-y-[120%]" : "nav"}>
          <Nav />
        </div>
        

        <header className="header w-full flex flex-col items-center gap-[1.5em] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        
          <div className="hero-copy w-full flex flex-col items-center justify-center ">
            <div className="line overflow-hidden">
              <h1 className="text-white text-[1.5rem] text-center lg:text-[5rem] font-medium leading-none -translate-y-[120%]">
                <span className="text-center font-editorial italic text-[2.7rem] lg:text-[5.5rem] pr-[1rem]">
                  Stories
                </span>
                that empowers.
              </h1>
            </div>
            <div className="line overflow-hidden mt-3 lg:mt-0">
              <h1 className="text-white text-[1.3rem] text-center lg:text-[5rem] font-medium leading-none -translate-y-[120%]">
                Build your own{" "}
                <span className="font-editorial italic text-[2.7rem] lg:text-[5.5rem] pr-[0.7rem]">
                  ROBOT.
                </span>
              </h1>
            </div>
          </div>
          <div className="line overflow-hidden">
            <p className="text-white text-[0.9rem] font-medium uppercase text-center translate-y-[120%]">
              Where IDEAS dont go into WASTE.
            </p>
          </div>
        </header>

        <div className="cta group absolute left-1/2 bottom-6 sm:bottom-8 md:bottom-12 w-[94%] sm:w-[90%] md:w-4/5 lg:w-1/2 xl:max-w-[800px] h-[56px] sm:h-[60px] md:h-[68px] px-2 md:px-3 grid grid-cols-[auto_1fr_auto] items-center bg-transparent rounded-full border-2 border-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] scale-0 -translate-x-1/2 z-10 cursor-pointer transition-colors duration-200 hover:bg-black/5 backdrop-blur-sm active:translate-y-[1px]">
          <div className="h-full aspect-square" aria-hidden="true"></div>
          <div className="cta-label justify-self-center overflow-hidden">
            <a
              href="https://online.codebotix.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[0.9rem] sm:text-sm md:text-base font-medium uppercase tracking-wide transition-all duration-200 group-hover:tracking-wider"
            >
              EXPLORE COURSES
            </a>
          </div>
          <a
            href="https://online.codebotix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-icon justify-self-end h-full aspect-square flex items-center justify-center text-white bg-transparent rounded-full cursor-pointer scale-0 text-xl sm:text-2xl md:text-3xl transition-colors duration-200 group-hover:bg-black active:translate-y-[1px]"
          >
            <IoArrowForwardOutline />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
