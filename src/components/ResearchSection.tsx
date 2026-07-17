"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ResearchSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up sections staggeredly
    gsap.fromTo(
      ".research-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: container });

  const patents = [
    {
      title: "Machine Learning-Based System for Optimizing Document Ranking in Information Retrieval",
      status: "Published (Grant Pending)",
      details: "Indian Patent Application No. 202531130529 A, published January 2026.",
      desc: "The invention focuses on an ML-driven document ranking system that leverages contextual embeddings, reinforcement learning, and user feedback loops to improve search relevance and personalization in information retrieval systems. Filed with the Indian Patent Office, Government of India."
    }
  ];

  const journals = [
    {
      title: "Predictive Design Customization Using Machine Learning",
      authors: "Sumendra Nath Singh, Vandna Kumari",
      journal: "Journal of Recent Innovations in Computer Science and Technology (JRICST), Vol. 03, No. 02, Page 66-76.",
      date: "April 2026",
      doi: "10.70454/JRICST.2026.30206"
    }
  ];

  const conferences = [
    {
      title: "A Study on the Defect of Plants and Diseases Using Deep Learning",
      authors: "Sumendra Nath Singh, Dr. Ashok Kumar, Dr. Brajesh Kumar Singh",
      publishedIn: "International Conference on Machine Learning & Data Science Innovations (MacDatt‘22), organized by Yazhli Global Multidisciplinary Research Organization (YGMRO), 02 September 2022. Subsequently published in the ISBN book Machine Learning and Data Science Innovations (ISBN: 978-81-953467-3-8).",
      desc: "The research presents a comprehensive study on how deep learning can be utilized to detect plant defects and diseases, contributing significantly to the application of artificial intelligence in agricultural technologies."
    },
    {
      title: "Plant Disease Detection Using Machine Learning",
      authors: "Sumendra Nath Singh, Dr. Ashok Kumar, Dr. Brajesh Kumar Singh",
      publishedIn: "7th International Conference on Engineering Research and Innovations (ICERI-2022), organized by Terna Engineering College, Maharashtra & IFERP, 22-23 September 2022.",
      desc: "Focuses on the innovative use of machine learning to enhance the detection and identification of plant diseases, offering supportive insights for sustainable agricultural practices. This work contributes to the growing body of research that aims to use machine learning to improve agricultural productivity and sustainability."
    }
  ];

  return (
    <section ref={container} className="relative z-20 bg-neutral-950 py-32 text-white overflow-hidden" id="research">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Research & Publications</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          
          {/* Patents Subsection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-4">Patents</h3>
            <div className="grid gap-6">
              {patents.map((patent, idx) => (
                <div key={idx} className="research-card bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold text-white max-w-2xl">{patent.title}</h4>
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {patent.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">{patent.details}</p>
                  <p className="text-neutral-300 leading-relaxed">{patent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journal Publications Subsection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-4">Journal Publications</h3>
            <div className="grid gap-6">
              {journals.map((journal, idx) => (
                <div key={idx} className="research-card bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white mb-2">{journal.title}</h4>
                  <p className="text-sm text-neutral-400 mb-4">
                    <span className="font-semibold text-neutral-300">Authors:</span> {journal.authors}
                  </p>
                  <div className="space-y-2 text-neutral-300">
                    <p className="text-sm"><span className="text-neutral-500">Journal:</span> {journal.journal}</p>
                    <p className="text-sm"><span className="text-neutral-500">Published:</span> {journal.date}</p>
                    {journal.doi && (
                      <p className="text-sm">
                        <span className="text-neutral-500">DOI: </span>
                        <a 
                          href={`https://doi.org/${journal.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-orange-400 hover:underline"
                        >
                          {journal.doi}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Papers Subsection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-4">Conference Papers & Book Chapters</h3>
            <div className="grid gap-6">
              {conferences.map((conf, idx) => (
                <div key={idx} className="research-card bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white mb-2">{conf.title}</h4>
                  <p className="text-sm text-neutral-400 mb-4">
                    <span className="font-semibold text-neutral-300">Authors:</span> {conf.authors}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    <span className="text-neutral-500">Published In:</span> {conf.publishedIn}
                  </p>
                  {conf.desc && (
                    <p className="text-sm text-neutral-400 leading-relaxed border-l-2 border-neutral-700 pl-3 italic">
                      &ldquo;{conf.desc}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
