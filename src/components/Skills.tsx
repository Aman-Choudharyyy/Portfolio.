import React from 'react';
import { Shield, Code, Database, Network, Lock, Eye } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Threat Detection", "Incident Response", "Vulnerability Assessment", "Security Monitoring", "Risk Analysis"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C++", "Bash Scripting"]
    },
    {
      title: "Security Tools",
      icon: <Lock className="w-6 h-6" />,
      skills: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"]
    },
    {
      title: "Networking",
      icon: <Network className="w-6 h-6" />,
      skills: ["TCP/IP", "DNS", "Firewalls", "VPN", "Network Analysis"]
    },
    {
      title: "Monitoring",
      icon: <Eye className="w-6 h-6" />,
      skills: ["SIEM", "Log Analysis", "Splunk", "ELK Stack", "Nagios"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-light-text dark:text-dark-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Comprehensive skill set in cybersecurity and defensive security technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-light-card dark:bg-dark-card p-6 rounded-xl border border-light-border dark:border-dark-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg text-light-primary dark:text-dark-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border-light dark:border-dark-border-light hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full"></div>
                    <span className="text-light-text-muted dark:text-dark-text-muted font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;