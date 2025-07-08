import { Plus } from 'lucide-react';
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../../../../components/ui/tabs';

interface HeaderSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabItems = [
    { id: 'all', label: 'All Orders' },
    { id: 'pending', label: 'Pending' },
    { id: 'reviewed', label: 'Reviewed' },
    { id: 'arrived', label: 'Arrived' },
  ];

  return (
    <header className="flex items-center gap-6 px-4 py-0 relative w-full bg-white border-t border-[#e5e7eb] h-12">
      <Tabs value={activeTab} onValueChange={onTabChange} className="flex items-center h-full">
        <TabsList className="bg-transparent p-0 h-full border-b-0">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`gap-2 px-4 py-3 rounded-none transition-all duration-200 h-full border-b-2 ${
                activeTab === tab.id
                  ? 'bg-[#E8F0E9] border-b-[#4b6a4f] text-[#111827] font-semibold'
                  : 'bg-transparent border-b-transparent text-[#6b7280] font-medium hover:text-[#374151] hover:bg-gray-50'
              }`}
            >
              <span className="text-sm">{tab.label}</span>
            </TabsTrigger>
          ))}
          <div className="gap-1 px-2 py-3 self-stretch inline-flex items-center justify-center">
            <button 
              className="inline-flex items-center gap-2 p-1 bg-white rounded hover:bg-gray-50 transition-colors"
              onClick={() => console.log('Add new tab clicked')}
            >
              <Plus className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
            </button>
          </div>
        </TabsList>
      </Tabs>
    </header>
  );
};