import React, { useState } from 'react';
import { Bell, X, User, Briefcase, Code, Mail, Home } from 'lucide-react';

interface NotificationBarProps {
  onOpenTab: (id: string, title: string, component: string) => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ onOpenTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    {
      id: 'home',
      title: 'Home',
      description: 'Back to main page',
      icon: <Home className="w-5 h-5" />,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn about my background and education',
      icon: <User className="w-5 h-5" />,
      action: () => {
        onOpenTab('about', 'about', 'about');
        setIsOpen(false);
      }
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'View my cybersecurity projects',
      icon: <Code className="w-5 h-5" />,
      action: () => {
        onOpenTab('projects', 'projects', 'projects');
        setIsOpen(false);
      }
    },
    {
      id: 'experience',
      title: 'Skills',
      description: 'My technical skills and expertise',
      icon: <Briefcase className="w-5 h-5" />,
      action: () => {
        onOpenTab('skills', 'skills', 'skills');
        setIsOpen(false);
      }
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      icon: <Mail className="w-5 h-5" />,
      action: () => {
        onOpenTab('contact', 'contact', 'contact');
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      {/* Notification Button */}
      <button
        onClick={toggleNotification}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary hover:dark:bg-dark-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg"
        aria-label="Open navigation menu"
        tabIndex={0}
      >
        <div className="relative">
          <Bell className="w-5 h-5" />
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleNotification}
        />
      )}

      {/* Notification Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-light-card dark:bg-dark-card border-r border-light-border dark:border-dark-border shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-border dark:border-dark-border">
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text font-poppins">
            Navigation
          </h2>
          <button
            onClick={toggleNotification}
            className="p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
            >
              <div className="p-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg text-light-primary dark:text-dark-primary group-hover:bg-light-accent/20 dark:group-hover:bg-dark-accent/20 transition-colors duration-200">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-light-border dark:border-dark-border">
          <p className="text-sm text-light-text-muted dark:text-dark-text-muted text-center">
            Aman Choudhary - Defensive Security Specialist
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationBar;