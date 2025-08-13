import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-light-text dark:text-dark-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Passionate about cybersecurity and building secure digital environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
              I'm a final-year B.Tech Computer Science student with a deep passion for cybersecurity, 
              particularly in defensive security strategies. My journey in tech has been driven by 
              curiosity and a commitment to protecting digital assets.
            </p>
            <p className="text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
              Specializing in threat detection, incident response, and security automation, 
              I'm constantly learning and adapting to the evolving cybersecurity landscape.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">Education</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">B.Tech Computer Science</p>
                </div>
              </div>
              <p className="text-light-text-muted dark:text-dark-text-muted">
                Final year student focusing on cybersecurity and defensive security strategies.
              </p>
            </div>

            <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg">
                  <Award className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">Specialization</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">Defensive Security</p>
                </div>
              </div>
              <p className="text-light-text-muted dark:text-dark-text-muted">
                Focused on threat detection, incident response, and security automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;