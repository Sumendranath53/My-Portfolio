"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase, Coffee, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CounterSection() {
  const container = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 80%",
      onEnter: () => setHasAnimated(true),
      once: true,
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative z-20 bg-neutral-900 py-16 text-white overflow-hidden border-y border-neutral-800" id="counters">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          <div className="p-6">
            <div className="w-16 h-16 mx-auto bg-neutral-950 rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-lg border border-neutral-800">
              <Briefcase size={32} />
            </div>
            <div className="text-4xl font-bold mb-2">
              {hasAnimated ? <Counter target={100} /> : "0"}
            </div>
            <p className="text-neutral-400 uppercase tracking-widest text-sm font-semibold">Works Completed</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 mx-auto bg-neutral-950 rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-lg border border-neutral-800">
              <Coffee size={32} />
            </div>
            <div className="text-4xl font-bold mb-2">
              {hasAnimated ? <Counter target={200} /> : "0"}
            </div>
            <p className="text-neutral-400 uppercase tracking-widest text-sm font-semibold">Cups of Coffee</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 mx-auto bg-neutral-950 rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-lg border border-neutral-800">
              <Users size={32} />
            </div>
            <div className="text-4xl font-bold mb-2">
              {hasAnimated ? <Counter target={40} /> : "0"}
            </div>
            <p className="text-neutral-400 uppercase tracking-widest text-sm font-semibold">Happy Clients</p>
          </div>

        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  return <>{count}</>;
}
