"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".education-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: container });

  const education = [
    {
      degree: "Master’s Of Technology (Computer Science Engineering)",
      institution: "Raja Balwant Singh Engineering Technical Campus",
      university: "Dr. APJ Abdul Kalam Technical University",
      location: "Bhicpuri, Agra",
      duration: "2020-2022"
    },
    {
      degree: "Bachelor’s of Technology (Computer Science Engineering)",
      institution: "Hindustan Institute of Technology & Management",
      university: "Dr. APJ Abdul Kalam Technical University",
      location: "Agra",
      duration: "2016-2020"
    },
    {
      degree: "Intermediate (Science & Computer)",
      institution: "St. George’s College",
      university: "Council for Indian Certificate of Secondary Education (CICSE)",
      location: "Agra",
      duration: "2016"
    },
    {
      degree: "High School (Science)",
      institution: "St. George’s College",
      university: "Council for Indian Certificate of Secondary Education (CICSE)",
      location: "Agra",
      duration: "2014"
    }
  ];

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-32 text-white overflow-hidden" id="education">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Education</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-neutral-800 before:to-transparent">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="education-card relative pl-8 md:pl-0">
                <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-orange-500/50 transition-colors backdrop-blur-sm">
                    <h4 className="font-bold text-xl text-orange-500 mb-2">{edu.degree}</h4>
                    <p className="text-white font-medium mb-1">{edu.institution}</p>
                    <p className="text-neutral-400 text-sm mb-2">{edu.university}</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 text-xs text-neutral-500 font-semibold tracking-wider uppercase">
                      <span>{edu.location}</span>
                      <span className="mt-2 md:mt-0 text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">{edu.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-6 h-4 w-4 rounded-full bg-orange-500 border-4 border-neutral-950 md:left-1/2 md:-translate-x-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
