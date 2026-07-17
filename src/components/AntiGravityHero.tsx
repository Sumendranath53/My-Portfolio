"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AntiGravityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const subjectLayerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const uiLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cleanups: (() => void)[] = [];

      // 1. Entrance animation for SUMENDRA NATH and Roles Text (sequenced/staggered)
      const tl = gsap.timeline();

      tl.to(".sn-word", {
        y: "0%",
        opacity: 0.9,
        duration: 1.4,
        stagger: 0.35,
        ease: "power4.out",
        delay: 0.3,
      });

      tl.to(".role-line", {
        x: "0%",
        opacity: 1,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
      }, "-=0.4");

      // 2. Hover ripple effect on the portrait image
      const portrait = portraitRef.current;
      if (portrait) {
        const displacementMap = document.querySelector("#displacement-map");
        const turbulence = document.querySelector("#turbulence");

        const onPortraitEnter = () => {
          gsap.timeline()
            .to(displacementMap, {
              attr: { scale: 50 },
              duration: 0.3,
              ease: "power1.out",
            })
            .to(displacementMap, {
              attr: { scale: 0 },
              duration: 0.8,
              ease: "power2.out",
            });

          gsap.fromTo(
            turbulence,
            { attr: { baseFrequency: 0.06 } },
            { attr: { baseFrequency: 0.005 }, duration: 1.1, ease: "power1.inOut" }
          );
        };

        portrait.addEventListener("mouseenter", onPortraitEnter);
        cleanups.push(() => {
          portrait.removeEventListener("mouseenter", onPortraitEnter);
        });
      }

      // 3. Magnetic UI Elements Setup
      const magneticElements = document.querySelectorAll(".magnetic-btn");

      magneticElements.forEach((el) => {
        const htmlEl = el as HTMLElement;

        const xTo = gsap.quickTo(htmlEl, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(htmlEl, "y", { duration: 0.4, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
          const rect = htmlEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distanceX = (e.clientX - centerX) * 0.4;
          const distanceY = (e.clientY - centerY) * 0.4;

          xTo(distanceX);
          yTo(distanceY);
        };

        const onMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        htmlEl.addEventListener("mousemove", onMouseMove);
        htmlEl.addEventListener("mouseleave", onMouseLeave);

        cleanups.push(() => {
          htmlEl.removeEventListener("mousemove", onMouseMove);
          htmlEl.removeEventListener("mouseleave", onMouseLeave);
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: containerRef }
  );

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-neutral-950 text-white flex items-center justify-center font-sans"
      >
        {/* Layer 1: Desktop Background Text (Z: 10) */}
        <div
          ref={textLayerRef}
          className="hidden md:flex absolute z-10 w-full bottom-0 left-0 justify-center pointer-events-none"
        >
          <h1 className="text-[18vw] leading-[0.8] font-black text-[#FF4500] uppercase tracking-tighter text-center drop-shadow-2xl opacity-90 overflow-hidden">
            <span className="inline-block translate-y-[100%] opacity-0 sn-word">SUMENDRA</span><br />
            <span className="inline-block translate-y-[100%] opacity-0 sn-word">NATH</span>
          </h1>
        </div>

        {/* Layer 2: Subject (Z: 20) */}
        <div
          ref={subjectLayerRef}
          className="absolute z-20 w-full h-full flex justify-center items-end pointer-events-none"
        >
          <div
            ref={portraitRef}
            className="relative w-[720px] h-[100vh] md:h-[75vh] max-w-full pointer-events-auto cursor-pointer"
          >
            <Image
              src="/placeholder-portrait.png"
              alt="Sumendra Nath Portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] filter-none md:[filter:url(#ripple-filter)]"
              priority
            />
          </div>
        </div>

        {/* Layer 3: Foreground UI (Z: 30) */}
        <div
          ref={uiLayerRef}
          className="absolute inset-0 z-30 flex flex-col justify-between p-8 pointer-events-none"
        >

          {/* Desktop Left-Aligned Vertical Block */}
          <div className="hidden md:block absolute top-32 left-12 pointer-events-auto mix-blend-difference">
            <p className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white">
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Machine Learning Researcher</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Patent-Backed AI Innovator</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Web Application Engineer</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Visual Media Specialist</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Digital Creator</span>
            </p>
          </div>

          {/* Mobile Combined Block (Stacked vertically, Z: 30 above image) */}
          <div className="absolute bottom-[12vh] left-4 right-4 text-center md:hidden flex flex-col items-center gap-2 pointer-events-none">
            <p className="text-lg md:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white pointer-events-auto mix-blend-difference">
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Machine Learning Researcher</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Patent-Backed AI Innovator</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Web Application Engineer</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Visual Media Specialist</span><br />
              <span className="inline-block translate-x-[50px] opacity-0 role-line">Digital Creator</span>
            </p>
            <h1 className="text-[14vw] leading-[0.8] font-black text-[#FF4500] uppercase tracking-tighter drop-shadow-2xl opacity-90 overflow-hidden">
              <span className="inline-block translate-y-[100%] opacity-0 sn-word">SUMENDRA</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 sn-word">NATH</span>
            </h1>
          </div>

        </div>

        {/* SVG Ripple Filter Definition */}
        <svg className="hidden">
          <defs>
            <filter id="ripple-filter">
              <feTurbulence
                id="turbulence"
                type="fractalNoise"
                baseFrequency="0.05"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                id="displacement-map"
                in="SourceGraphic"
                in2="noise"
                scale="0"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </ReactLenis>
  );
}
