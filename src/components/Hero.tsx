import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Picture - Left on desktop, top on mobile */}
          <div className="order-1 lg:order-1 flex-shrink-0">
            <div className="relative group">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-light-accent/20 to-light-primary/20 dark:from-dark-accent/20 dark:to-dark-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-light-accent dark:border-dark-accent group-hover:border-light-primary dark:group-hover:border-dark-primary transition-all duration-300 animate-float">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-light-primary/10 dark:to-dark-primary/10 z-10"></div>
                
                {/* Profile image */}
                <img
                  src="/src/assets/dp.jpg"
                  alt="Aman Choudhary - Defensive Security Specialist"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-105"
                />
                
                {/* Animated ring */}
                <div className="absolute -inset-2 border-2 border-light-accent/30 dark:border-dark-accent/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content - Right on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2 flex-1 text-center lg:text-left">
            <div className="space-y-6">
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins">
                  <span className="text-light-text dark:text-dark-text">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
                    Aman Choudhary
                  </span>
                </h1>
                
                <div className="text-xl lg:text-2xl text-light-text-secondary dark:text-dark-text-secondary font-medium">
                  Defensive Security Specialist
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl leading-relaxed">
                Final-year B.Tech Computer Science student passionate about cybersecurity, 
                specializing in defensive security strategies, threat detection, and incident response. 
                Building secure digital environments for tomorrow.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    // Dispatch custom event to open projects tab
                    window.dispatchEvent(new CustomEvent('openProjectsTab'));
                  }}
                  className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white rounded-lg font-semibold hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <a
                  href="/Aman's Resume.pdf"
                  download="Aman_Choudhary_Resume.pdf"
                  className="inline-block px-8 py-4 border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-lg font-semibold hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start pt-4">
                <a
                  href="https://github.com/Aman-Choudharyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-choudhary-53305b263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/Cybeast_inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="X (Twitter) Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="mailto:aman.r.choudharyy@gmail.com"
                  className="p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;