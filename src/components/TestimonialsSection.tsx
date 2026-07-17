"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Akarsh Lavania",
    image: "/resume-assets/testimonial-5.jpg",
    text: "I was impressed by Sumendra's ability to handle any situation calmly and patiently, even with the toughest time. This natural skill of his has helped us throughout our journey.",
  },
  {
    name: "Abhishek Gupta",
    image: "/resume-assets/testimonial-4.jpg",
    text: "Working with him is buttery smooth, we both had good understanding of work between us and his creativity is like on another level. He's never out of ideas. His designing skills are remarkable and he's a really good team player. Will like to work with him once again in coming future.",
  }
];

export default function TestimonialsSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-card",
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
    <section ref={container} className="relative z-20 bg-black py-24 text-white overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 uppercase">
            Testi<span className="text-orange-500">monials</span>
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card relative bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-orange-500/50 transition-colors">
              <Quote className="absolute top-8 right-8 text-neutral-800" size={64} />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-orange-500">
                  <Image src={test.image} alt={test.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{test.name}</h4>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed italic relative z-10">
                &ldquo;{test.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
