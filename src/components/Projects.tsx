import React from 'react';
import { ExternalLink, Github, Shield, Lock, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Security Monitoring Dashboard",
      description: "Real-time security monitoring dashboard with threat detection and incident response capabilities.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: <Shield className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated vulnerability scanning tool for web applications with detailed reporting.",
      tech: ["Python", "Flask", "SQLite", "Nmap"],
      icon: <Eye className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Incident Response System",
      description: "Comprehensive incident response management system for security teams.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Redis"],
      icon: <Lock className="w-6 h-6" />,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-light-text dark:text-dark-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Cybersecurity projects showcasing defensive security implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg text-light-primary dark:text-dark-primary">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {project.title}
                </h3>
              </div>

              <p className="text-light-text-muted dark:text-dark-text-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-primary dark:text-dark-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-lg hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;