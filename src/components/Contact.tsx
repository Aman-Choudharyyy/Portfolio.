import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-light-text dark:text-dark-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Let's discuss cybersecurity opportunities and collaborate on defensive security projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border">
                  <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg">
                    <Mail className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <p className="text-light-text dark:text-dark-text font-medium">Email</p>
                    <p className="text-light-text-muted dark:text-dark-text-muted">aman.r.choudharyy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border">
                  <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <p className="text-light-text dark:text-dark-text font-medium">Location</p>
                    <p className="text-light-text-muted dark:text-dark-text-muted">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Aman-Choudharyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-choudhary-53305b263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/Cybeast_inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="X (Twitter) Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="mailto:aman.r.choudharyy@gmail.com"
                  className="p-4 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl border border-light-border dark:border-dark-border">
            <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-light-text dark:text-dark-text"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-light-text dark:text-dark-text"
                  placeholder="your.email@gmail.com"
                />
              </div>

              <div>
                <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 text-light-text dark:text-dark-text resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-light-primary dark:bg-dark-primary text-white rounded-lg font-semibold hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;