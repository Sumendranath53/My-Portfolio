"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up main about section content
    gsap.fromTo(
      ".about-fade-up",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );

    // Animate skill progress bars
    const bars = gsap.utils.toArray<HTMLElement>(".skill-progress");
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-width") || "0%";
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: width,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          },
        }
      );
    });
  }, { scope: container });

  const skills = [
    { name: "Communication", percentage: "95%" },
    { name: "Conflict resolution", percentage: "91%" },
    { name: "Leadership", percentage: "90%" },
    { name: "Teamwork / Collaboration", percentage: "94%" },
  ];

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-24 text-white overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Image, Contact Info, Basic Skills */}
          <div className="about-fade-up space-y-8 bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 relative rounded-2xl overflow-hidden shrink-0 border border-neutral-700">
                {/* Fallback image if testimonial-2.jpg is not found */}
                <Image src="/resume-assets/testimonial-2.jpg" alt="Sumendra Nath Singh" fill className="object-cover" />
              </div>
              <div className="space-y-3 text-sm">
                <p><span className="text-orange-500 font-bold">Name:</span> Sumendra Nath Singh</p>
                <p><span className="text-orange-500 font-bold">Profile:</span> Front End Developer</p>
                <p><span className="text-orange-500 font-bold">Email:</span> sumendranath36@gmail.com</p>
                <p><span className="text-orange-500 font-bold">Phone:</span> +919027619344</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">Basic Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="skill-progress bg-orange-500 h-full rounded-full" data-width={skill.percentage}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: About Me, Education */}
          <div className="about-fade-up space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6 uppercase border-b-2 border-orange-500 inline-block pb-2">About Me</h2>
              <p className="text-neutral-300 leading-relaxed text-lg text-justify">
                Assistant Professor in Computer Science & Information Technology with 3+ years of combined academic and technical experience across undergraduate teaching, academic administration, and applied research. Demonstrated expertise in Outcome-Based Education (OBE), curriculum delivery, lesson planning, assessment and evaluation, and examination coordination through active involvement in the Examinations Cell. Contributor to applied AI/ML research with a published Indian patent in information retrieval systems and international conference publications. Strong background in Machine Learning, Deep Learning concepts, Web Technologies, and project-based learning, with a proven ability to mentor students, support NAAC/NBA-aligned academic processes, and enhance teaching–learning outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6 uppercase border-b-2 border-orange-500 inline-block pb-2">Education</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-orange-500">BACHELOR'S OF TECHNOLOGY-COMPUTER SCIENCE ENGG. (2016-2020)</h4>
                  <p className="text-neutral-400">Hindustan Institute of Technology & Management, Agra / RBSEngg. Technical Campus, Agra</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">INTERMEDIATE SCIENCE & COMPUTER (2016)</h4>
                  <p className="text-neutral-400">St.George's College, Agra</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">HIGH SCHOOL SCIENCE (2014)</h4>
                  <p className="text-neutral-400">St.George's College, Agra</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
