"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const container = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);


  const webProjects = [
    {
      title: "Swachh Sansar",
      desc: "A web design project to promote cleanliness and environmental awareness.",
      img: "/resume-assets/work-1.jpg",
      link: "https://sumendranath53.github.io/swachhsansar/",
      date: "18 Sep. 2020"
    },
    {
      title: "Career-Mapper",
      desc: "A career counseling platform offering psychometric tests and NEP 2020 guidance.",
      img: "/resume-assets/carrer mapper.jpg",
      link: "https://sumendranath53.github.io/career-Mapper/",
      date: "24 Aug. 2024"
    },
    {
      title: "Archana Travels",
      desc: "This a Travel Agency Website made according to Customer Requirements",
      img: "/resume-assets/work-2.jpg",
      link: "https://sumendranath53.github.io/archanatravels53/",
      date: "20 Aug. 2018"
    },
    {
      title: "Covid 19 Tracker",
      desc: "A Covid-19 Live Tracker dashboard designed by Swachh Sansar.",
      img: "/resume-assets/work-3.jpg",
      link: "https://sumendranath53.github.io/covid19/",
      date: "30 Sep. 2020"
    },
    {
      title: "Sample Template",
      desc: "A customized web template designed for modern digital needs.",
      img: "/resume-assets/work-10.jpg",
      link: "https://sumendranath53.github.io/summ/",
      date: "30 Sep. 2020"
    },
    {
      title: "SunShine Zoom",
      desc: "An interactive project showcasing sleek layouts and responsive styling.",
      img: "/resume-assets/work-11.jpeg",
      link: "https://sumendranath53.github.io/SunShine/",
      date: "30 Sep. 2020"
    },
    {
      title: "Intro Template",
      desc: "A creative web template designed for onboarding and introductions.",
      img: "/resume-assets/work-12.JPG",
      link: "https://sumendranath53.github.io/Summi/",
      date: "30 Sep. 2020"
    },
    {
      title: "Sumendra Photography",
      desc: "A premium photography portfolio showcasing creative captures and edits.",
      img: "/resume-assets/work-4.jpg",
      link: "https://vercel.com/sumendra-nath-s-projects/sumendra-photography",
      date: "Last updated recently"
    },
    {
      title: "VidyaSetu App",
      desc: "An educational platform designed to bridge learning and student engagement.",
      img: "/resume-assets/work-6.jpg",
      link: "https://vercel.com/sumendra-nath-s-projects/vidyasetu-app",
      date: "Last updated recently"
    },
  ];

  // Using 20 slider images
  const photographyImages = Array.from({ length: 20 }, (_, i) => `/img/slider/${i + 1}s.jpg`);

  const tutorials = [
    { id: "QNX-x_bb6N0", title: "JS Project to Change Background Color 1" },
    { id: "DuNZtv2cOf8", title: "JS Project to Change Background Color 2" },
  ];

  useGSAP(() => {
    // Floating work cards
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      }
    );

    // Horizontal scroll for gallery
    if (galleryRef.current) {
      const pinWrap = galleryRef.current.querySelector(".gallery-wrap");
      if (pinWrap) {
        const pinWrapWidth = pinWrap.scrollWidth;
        const windowWidth = window.innerWidth;
        
        gsap.to(pinWrap, {
          x: () => -(pinWrapWidth - windowWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => `+=${pinWrapWidth}`,
          }
        });
      }
    }
  }, { scope: container });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, target: HTMLAnchorElement) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(target, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (target: HTMLAnchorElement) => {
    gsap.to(target, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-32 text-white overflow-hidden" id="portfolio">
      {/* Web Design Projects */}
      <div className="max-w-6xl mx-auto px-6 projects-grid mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Web Design</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {webProjects.map((project, idx) => (
            <a 
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card relative group rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-neutral-800 flex flex-col cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="relative h-3/5 w-full overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-neutral-900 transition-colors group-hover:bg-neutral-800">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-500">{project.title}</h3>
                  <p className="text-neutral-400 text-sm">{project.desc}</p>
                </div>
                <small className="text-neutral-500 mt-4 block">{project.date}</small>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={galleryRef} className="h-screen w-full flex flex-col justify-center overflow-hidden mb-40">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Photographs & Edited Photos</h2>
          <p className="text-neutral-400">Scroll down to explore the gallery</p>
        </div>
        <div className="gallery-wrap flex gap-6 px-12 pb-12 items-center w-max">
          {photographyImages.map((src, i) => (
            <div key={i} className="relative w-80 h-[30rem] rounded-xl overflow-hidden shrink-0 border border-neutral-800">
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Tutorials */}
      <div className="max-w-4xl mx-auto px-6 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Web Designing Videos</h2>
          <p className="text-neutral-400">YouTube Channel Videos from Web Tutorials</p>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tutorials.map((vid, idx) => (
            <div key={idx} className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800">
                <iframe 
                  src={`https://www.youtube.com/embed/${vid.id}`} 
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-center text-neutral-300 font-medium">{vid.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photography & Edited Photos */}
      <div className="text-center pb-32">
        <h3 className="text-2xl font-bold mb-8">View More</h3>
        <a 
          href="https://www.instagram.com/summi_photography_zeus" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 ease-out"
        >
          Click Here to Visit Instagram Profile
        </a>
      </div>

    </section>
  );
}
