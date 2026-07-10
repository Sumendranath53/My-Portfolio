import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 border-t border-neutral-900 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contact Header & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 pb-16 border-b border-neutral-900">
          <div>
            <span className="text-orange-500 uppercase tracking-widest text-sm font-bold">Feel Free to</span>
            <h3 className="text-4xl font-bold mt-2">Contact Me</h3>
          </div>
          <div>
            <form className="flex w-full">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-neutral-900 border border-neutral-800 text-white px-6 py-4 rounded-l-full w-full focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button 
                type="button" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-r-full font-bold transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-500">Summi Creations</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Click here to <a href="/Sumendra Nath Resume ZZ_compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-bold">Download</a> My Resume. If you only have the permission than only you can download <strong className="text-white">The Resume</strong>.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Me</a></li>
              <li><a href="#software-skills" className="hover:text-orange-500 transition-colors">Software Skills</a></li>
              <li><a href="#counters" className="hover:text-orange-500 transition-colors">Work Details</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Work</a></li>
              <li><a href="#highlights" className="hover:text-orange-500 transition-colors">Highlights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="tel:9027619344" className="hover:text-orange-500 transition-colors">Call Me</a></li>
              <li><a href="mailto:sumendranath36@gmail.com" className="hover:text-orange-500 transition-colors">Email Me</a></li>
              <li><a href="https://wa.me/+919027619344" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Whatsapp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">About Me</h4>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Education</a></li>
              <li><a href="#experience" className="hover:text-orange-500 transition-colors">Tech Skills</a></li>
              <li><a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-8 border-t border-neutral-900 text-neutral-500 text-sm">
          <p className="mb-2">Copyright &copy; 2021 All Rights Reserved By <strong className="text-white">Summi Creations</strong>.</p>
          <p>Designed by <a href="https://www.linkedin.com/in/sumendra-nath-7393a316a/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Sumendra Nath Singh</a></p>
        </div>

      </div>
    </footer>
  );
}
