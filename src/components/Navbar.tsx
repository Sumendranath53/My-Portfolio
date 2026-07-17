"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#software-skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Highlights", href: "#highlights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // 1. Handling background transparency transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Desktop Magnetic Hover Animation using GSAP
  useGSAP(
    () => {
      const cleanups: (() => void)[] = [];
      const magneticElements = document.querySelectorAll(".nav-magnetic-btn");

      magneticElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const xTo = gsap.quickTo(htmlEl, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(htmlEl, "y", { duration: 0.4, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
          const rect = htmlEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distanceX = (e.clientX - centerX) * 0.35;
          const distanceY = (e.clientY - centerY) * 0.35;

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

  // 3. Mobile Fullscreen Overlay GSAP Entrance/Exit Animation
  useGSAP(
    () => {
      if (isOpen) {
        // Stop body scrolling when overlay is active
        document.body.style.overflow = "hidden";

        // Slide down the menu overlay
        gsap.to(menuOverlayRef.current, {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        });

        // Stagger in links
        const activeLinks = linksRef.current.filter((link) => link !== null);
        gsap.fromTo(
          activeLinks,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
            delay: 0.1,
          }
        );
      } else {
        document.body.style.overflow = "";

        // Slide up the menu overlay
        gsap.to(menuOverlayRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power4.in",
        });
      }
    },
    { dependencies: [isOpen] }
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef}>
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-neutral-950/90 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-5 bg-neutral-950/85 backdrop-blur-md md:py-6 md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-8 md:gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white mix-blend-difference"
          >
            <span className="text-white">SN</span>
            <span className="hidden md:inline text-neutral-400 hover:text-white transition-colors">Sumendra Nath</span>
            <span className="inline md:hidden text-white font-bold tracking-[0.2em] uppercase">SUMENDRA NATH</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors nav-magnetic-btn py-2 px-1 inline-block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action button / Burger Wrapper */}
          <div className="flex items-center gap-4">
            <a
              href="#footer"
              onClick={(e) => handleLinkClick(e, "#footer")}
              className="hidden lg:inline-flex bg-white/10 hover:bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-white/10 hover:border-transparent transition-all duration-300"
            >
              Contact Me
            </a>

            {/* Responsive Hamburger Toggle Button */}
            <button
              onClick={toggleMenu}
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none md:hidden bg-white/5 rounded-full p-2 border border-white/5"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 translate-y-[-8px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 w-full h-screen z-40 bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-center items-center -translate-y-full opacity-0 md:hidden"
      >
        <nav className="flex flex-col gap-6 text-center text-xl font-bold tracking-[0.25em] uppercase text-neutral-400">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              ref={(el) => {
                linksRef.current[idx] = el;
              }}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#FF4500] transition-colors text-white duration-300 hover:scale-105 inline-block py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            ref={(el) => {
              linksRef.current[navLinks.length] = el;
            }}
            href="#footer"
            onClick={(e) => handleLinkClick(e, "#footer")}
            className="mt-6 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-[#FF4500]/20 inline-block"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </div>
  );
}
