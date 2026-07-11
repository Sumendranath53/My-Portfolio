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
        y: "0%",
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
        {/* Layer 1: Background Text (Z: 10) */}
        <div
          ref={textLayerRef}
          className="absolute z-10 w-full bottom-0 left-0 flex justify-center pointer-events-none"
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
            className="relative w-[720px] h-[102vh] max-w-full pointer-events-auto cursor-pointer"
          >
            <Image
              src="/placeholder-portrait.png"
              alt="Sumendra Nath Portrait"
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              style={{ filter: "url(#ripple-filter)" }}
              priority
            />
          </div>
        </div>

        {/* Layer 3: Foreground UI (Z: 30) */}
        <div
          ref={uiLayerRef}
          className="absolute inset-0 z-30 flex flex-col justify-between p-8 pointer-events-none"
        >
          {/* Top Navigation */}
          <header className="flex justify-between items-start pointer-events-auto w-full mix-blend-difference">
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="text-white">SN</span>
              <span className="text-neutral-400">Sumendra Nath</span>
            </div>
            
            <nav className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
              <a href="#research" className="hover:text-white transition-colors magnetic-btn p-4 -m-4 inline-block">Research</a>
              <a href="#about" className="hover:text-white transition-colors magnetic-btn p-4 -m-4 inline-block">About</a>
              <a href="#skills" className="hover:text-white transition-colors magnetic-btn p-4 -m-4 inline-block">Skills</a>
              <a href="#portfolio" className="hover:text-white transition-colors magnetic-btn p-4 -m-4 inline-block">Portfolio</a>
            </nav>
            
            <div className="hidden lg:block w-72 text-right text-xs text-neutral-400 leading-relaxed font-medium">
              Building things that make an impact. Coder, founder, researcher, and avid photographer capturing the world.
            </div>
          </header>

          {/* Left-Aligned Vertical Block */}
          <div className="absolute top-32 left-12 pointer-events-auto mix-blend-difference overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white">
              <span className="inline-block translate-y-[100%] opacity-0 role-line">Front End Developer</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 role-line">UI/UX Designer</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 role-line">Freelancer</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 role-line">Photo Editor</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 role-line">Video Editor</span><br />
              <span className="inline-block translate-y-[100%] opacity-0 role-line">Photographer</span>
            </h2>
          </div>

          {/* Bottom Footer Elements */}
          <footer className="flex justify-between items-end pointer-events-auto w-full pb-4 mix-blend-difference">
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-12 bg-neutral-600"></div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold leading-relaxed">
                Scroll to enter<br />
                Scroll to enter
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="magnetic-btn bg-white text-black px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-lg">
                <span className="text-[#FF4500]">✦</span> Premium
              </button>
              <button className="magnetic-btn border border-neutral-600 bg-black/40 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors shadow-lg">
                Commercial licence
              </button>
            </div>
          </footer>
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
