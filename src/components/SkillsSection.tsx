"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const container = useRef<HTMLDivElement>(null);

  const softwareSkills = [
    { name: "Web Development", subtitle: "Full Stack", img: "/img/web design.jpg" },
    { name: "Photography", subtitle: "Macro, Portraits", img: "/img/photography.jpg" },
    { name: "Photo-Editing", subtitle: "PhotoShop CC, Snapseed, PicsArt", img: "/img/photo-editing1.jpg" },
    { name: "Video-Editor", subtitle: "Camtasia, Movavi", img: "/img/video-editing.jpg" },
    { name: "UI Designer", subtitle: "Wire framing, Frontend", img: "/img/ui design.jpg" },
    { name: "Graphic-Designer", subtitle: "Pamphlet, Logo", img: "/img/graphic-designer.jpg" },
  ];


  useGSAP(() => {
    // 3D Staggered flip-up animation for skill cards
    gsap.fromTo(
      ".skill-card",
      { 
        y: 80, 
        opacity: 0, 
        rotationX: -45, 
        transformPerspective: 800 
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="relative z-20 bg-neutral-900 py-32 text-white overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-[url('/assets/img/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Skills</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card group relative h-80 rounded-2xl overflow-hidden border border-neutral-800"
            >
              <Image 
                src={skill.img} 
                alt={skill.name} 
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-bold text-2xl text-white mb-1">
                  {skill.name}
                </h3>
                <span className="text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {skill.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
