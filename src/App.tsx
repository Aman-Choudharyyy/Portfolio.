import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NotificationBar from './components/NotificationBar';
import TabSystem from './components/TabSystem';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openTabs, setOpenTabs] = useState<Array<{id: string, title: string, component: string}>>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Listen for projects tab open event
    const handleOpenProjectsTab = () => {
      openTab('projects', 'projects', 'projects');
    };

    window.addEventListener('openProjectsTab', handleOpenProjectsTab);

    return () => {
      window.removeEventListener('openProjectsTab', handleOpenProjectsTab);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const openTab = (id: string, title: string, component: string) => {
    // Check if tab is already open
    const existingTab = openTabs.find(tab => tab.id === id);
    if (existingTab) {
      setActiveTab(id);
      return;
    }

    // Add new tab
    const newTab = { id, title, component };
    setOpenTabs(prev => [...prev, newTab]);
    setActiveTab(id);
  };

  const closeTab = (tabId: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.id !== tabId));
    if (activeTab === tabId) {
      const remainingTabs = openTabs.filter(tab => tab.id !== tabId);
      setActiveTab(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1].id : null);
    }
  };

  const renderTabContent = (component: string) => {
    switch (component) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Content not found</div>;
    }
  };
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-inter transition-colors duration-300">
      {/* Notification Bar */}
      <NotificationBar onOpenTab={openTab} />

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary hover:dark:bg-dark-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg"
        aria-label="Toggle dark mode"
        tabIndex={0}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Tab System */}
      {openTabs.length > 0 && (
        <TabSystem
          tabs={openTabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onTabClose={closeTab}
          renderContent={renderTabContent}
        />
      )}

      {/* Main Content */}
      <main className={openTabs.length > 0 ? 'blur-sm pointer-events-none' : ''}>
        <Hero />
      </main>
    </div>
  );
}

export default App;