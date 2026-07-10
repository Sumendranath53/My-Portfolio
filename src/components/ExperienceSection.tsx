"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".experience-card",
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

  const experiences = [
    {
      role: "Assistant Professor",
      company: "JSS University",
      location: "Sector 62, Noida, Uttar Pradesh, India",
      date: "02 Jan 2026 – Present",
      tasks: [
        "Delivered lectures in Theory of Automata and other core Computer Science subjects.",
        "Served as Conference & FDP Coordinator, contributing to successful academic events.",
        "Contributed to examination-related activities as part of the Examinations Cell.",
        "Conducted industry exposure visits and placement-readiness sessions for students."
      ]
    },
    {
      role: "Assistant Professor",
      company: "Noida International University",
      location: "Greater Noida",
      date: "15 Aug 2025 – 30 Dec 2025",
      tasks: [
        "Assisted in academic scheduling, timetable planning, and departmental coordination.",
        "Served as Conference & FDP Coordinator, contributing to academic event success.",
        "Conducted industry exposure visits and placement-readiness sessions for students."
      ]
    },
    {
      role: "Assistant Professor",
      company: "Babu Banarasi Das University (BBDU)",
      location: "Lucknow",
      date: "Apr 2025 – Aug 2025",
      tasks: [
        "Delivered lectures on Data Mining and Data Warehousing for postgraduate programs.",
        "Utilized academic analytics to assess student performance and guide improvements.",
        "Supported conference organization and research paper review as part of the technical committee."
      ]
    },
    {
      role: "Assistant Professor",
      company: "Raja Balwant Singh Engineering Technical Campus",
      location: "Agra",
      date: "04 Jan 2023 – 14 Apr 2025",
      tasks: [
        "Taught Algorithms, Cloud Computing, Theory of Computation, and NLP.",
        "Guided project-based learning and contributed to curriculum enhancement.",
        "Organized technical workshops, seminars, and hackathons to improve student engagement."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Agra, UP",
      date: "2022 – Present",
      tasks: [
        "Designed and developed responsive web applications using HTML5, CSS3, and JavaScript.",
        "Built and deployed Career Mapper and Archana Travels projects, enhancing UX/UI and SEO."
      ]
    },
    {
      role: "Freelance Photographer & Social Media Marketer",
      company: "AuSu Creations",
      location: "Agra, UP",
      date: "2019 – 2022",
      tasks: [
        "Part-time freelance photographer at a local studio start-up in Agra, contributing to various organisational projects and digital marketing initiatives."
      ]
    },
    {
      role: "Business Development Executive",
      company: "Byju's",
      location: "Bangalore (Remote)",
      date: "Oct 2020 – Dec 2021",
      tasks: [
        "Consulted parents regarding their children's studies, identified educational needs, and clarified doubts to support learning outcomes."
      ]
    },
    {
      role: "Web Application Development Trainee",
      company: "NinePages Techsolutions Pvt. Ltd.",
      location: "Agra, UP",
      date: "Feb 2019 – Sep 2019",
      tasks: [
        "Summer trainee in Web Application Development; worked on HTML, CSS frameworks (Bootstrap, Uikit, Materialize), JavaScript, jQuery, JSON, PHP, Angular JS, Node.js, React.js, AJAX, and MongoDB."
      ]
    }
  ];

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-24 text-white overflow-hidden" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 uppercase">
            Work <span className="text-orange-500">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Experience Cards */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-orange-500 mb-8 border-b border-neutral-800 pb-4">Experience</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-transparent">
              
              {experiences.map((exp, idx) => (
                <div key={idx} className="experience-card relative pl-8">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-orange-500 border-4 border-neutral-900" />
                  <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 hover:border-orange-500/50 transition-colors">
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-orange-400 font-medium mb-1">{exp.company} <span className="text-neutral-500 text-sm">| {exp.location}</span></p>
                    <p className="text-neutral-500 text-sm mb-2">{exp.date}</p>
                    <ul className="list-disc pl-4 text-sm text-neutral-400 space-y-1">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: Technical Skills & Frameworks */}
          <div className="space-y-12">
            
            <div>
              <h3 className="text-3xl font-semibold text-orange-500 mb-8 border-b border-neutral-800 pb-4">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { name: "HTML", percent: "95%" },
                  { name: "CSS", percent: "91%" },
                  { name: "JavaScript", percent: "90%" },
                  { name: "C", percent: "94%" },
                  { name: "Java", percent: "95%" },
                  { name: "Python", percent: "91%" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2 font-bold uppercase tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-orange-500">{skill.percent}</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden border border-neutral-800">
                      <div className="experience-card bg-orange-500 h-full rounded-full" style={{ width: skill.percent }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-orange-500 mb-8 border-b border-neutral-800 pb-4">Frameworks</h3>
              <div className="space-y-6">
                {[
                  { name: "Bootstrap", percent: "90%" },
                  { name: "UiKit", percent: "94%" },
                  { name: "Materialize CSS", percent: "94%" },
                  { name: "Materialize Bootstrap", percent: "94%" },
                  { name: "Font Awesome", percent: "94%" },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2 font-bold uppercase tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-orange-500">{skill.percent}</span>
                    </div>
                    <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden border border-neutral-800">
                      <div className="experience-card bg-orange-500 h-full rounded-full" style={{ width: skill.percent }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
