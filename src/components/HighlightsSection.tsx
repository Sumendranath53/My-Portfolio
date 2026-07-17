"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    image: "/resume-assets/post-1.jpg",
    category: "Travel",
    title: "See more ideas about Travel",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    authorName: "Sumendra Nath Singh",
    authorImage: "/resume-assets/testimonial-2.jpg",
    time: "10 min"
  },
  {
    image: "/resume-assets/post-2.jpg",
    category: "Web Design",
    title: "See more ideas about Travel",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    authorName: "Sumendra Nath Singh",
    authorImage: "/resume-assets/testimonial-2.jpg",
    time: "10 min"
  },
  {
    image: "/resume-assets/post-3.jpg",
    category: "Web Design",
    title: "See more ideas about Travel",
    desc: "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    authorName: "Sumendra Nath Singh",
    authorImage: "/resume-assets/testimonial-2.jpg",
    time: "10 min"
  }
];

export default function HighlightsSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".highlight-card",
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

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-24 text-white overflow-hidden" id="highlights">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 uppercase">
            Instagram <span className="text-orange-500">Post</span>
          </h2>
          <p className="text-neutral-400">Top Highlights</p>
          <div className="h-1 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500 transition-colors group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold uppercase px-3 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 hover:text-orange-500 transition-colors cursor-pointer">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image src={item.authorImage} alt={item.authorName} fill sizes="32px" className="object-cover" />
                    </div>
                    <span className="text-sm text-neutral-300 hover:text-orange-500 cursor-pointer transition-colors">{item.authorName}</span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-500 text-sm">
                    <Clock size={14} />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
