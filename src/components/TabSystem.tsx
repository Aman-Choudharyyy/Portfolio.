import React from 'react';
import { X } from 'lucide-react';

interface Tab {
  id: string;
  title: string;
  component: string;
}

interface TabSystemProps {
  tabs: Tab[];
  activeTab: string | null;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  renderContent: (component: string) => React.ReactNode;
}

const TabSystem: React.FC<TabSystemProps> = ({
  tabs,
  activeTab,
  onTabClick,
  onTabClose,
  renderContent
}) => {
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="fixed inset-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl max-h-[90vh] bg-light-card dark:bg-dark-card rounded-xl shadow-2xl overflow-hidden relative">
          {/* Close Button - Top Right */}
          <button
            onClick={() => {
              // Close all tabs by closing the last one
              if (tabs.length > 0) {
                onTabClose(tabs[tabs.length - 1].id);
              }
            }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white transition-all duration-200 shadow-lg"
            aria-label="Close tab"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Tab Content */}
          <div className="h-[90vh] overflow-y-auto">
            {activeTabData ? (
              <div className="pt-16 px-6 pb-6">
                {renderContent(activeTabData.component)}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  Select a tab to view content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSystem;