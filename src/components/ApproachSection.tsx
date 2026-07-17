"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, Lightbulb, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ApproachSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".approach-item",
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

  const recognitions = [
    { count: "1x", title: "Published Patent", desc: "Indian Patent No. 202531130529 A" },
    { count: "10+", title: "Academic Papers", desc: "International Journals & Conferences" },
    { count: "3+", title: "Years Teaching", desc: "CS & Information Technology" },
    { count: "7+", title: "Web Design Projects", desc: "Responsive, high-end builds" },
    { count: "20+", title: "Photography Highlights", desc: "Creative editing & capture" }
  ];

  return (
    <section ref={container} className="relative z-20 bg-[#faf6ef] py-24 text-neutral-900 overflow-hidden" id="approach">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="text-center mb-20 approach-item">
          <span className="text-[#2e54fe] uppercase tracking-widest text-sm font-bold block mb-2">My Framework</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-neutral-950">
            Approach & <span className="text-[#f99e76]">Philosophy</span>
          </h2>
          <div className="h-1 w-24 bg-[#2e54fe] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Two Column details: Approach & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div className="bg-white/80 backdrop-blur border border-neutral-200/50 p-10 rounded-3xl shadow-sm approach-item space-y-6">
            <div className="w-12 h-12 bg-[#2e54fe]/10 rounded-2xl flex items-center justify-center text-[#2e54fe]">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 uppercase tracking-tight">The Approach</h3>
            <p className="text-neutral-600 leading-relaxed text-justify">
              I start with understanding the core problem, looking at projects and teaching methodologies from the user&apos;s and students&apos; perspective first. From there, I help define the direction and bring ideas to life—not just to make things look better, but to make them work better, scale securely, and deliver actionable insights.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-neutral-200/50 p-10 rounded-3xl shadow-sm approach-item space-y-6">
            <div className="w-12 h-12 bg-[#f99e76]/10 rounded-2xl flex items-center justify-center text-[#f99e76]">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 uppercase tracking-tight">The Philosophy</h3>
            <p className="text-neutral-600 leading-relaxed text-justify">
              I don&apos;t follow trends blindly; I use them when they serve the purpose. My goal is always to create something distinctive, something people actually remember. Every project, no matter the size, deserves the same level of care—thoughtful, well-crafted, and built to last.
            </p>
          </div>

        </div>

        {/* Awards and Recognitions Row */}
        <div className="border-t border-neutral-200/80 pt-16 approach-item">
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="text-[#f99e76]" size={28} />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-neutral-950">Achievements & Metrics</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {recognitions.map((item, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-black text-[#2e54fe] mb-2">{item.count}</div>
                <h4 className="font-bold text-neutral-950 text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
