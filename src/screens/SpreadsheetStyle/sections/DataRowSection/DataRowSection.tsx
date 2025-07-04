import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  DownloadIcon,
  FilterIcon,
  LayoutIcon,
  ShareIcon,
  SplitIcon,
  UploadIcon,
} from 'lucide-react';
import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Separator } from '../../../../components/ui/separator';

interface DataRowSectionProps {
  toolbarExpanded: boolean;
  onToggleToolbar: () => void;
  onHideFields: () => void;
  onSort: () => void;
  onFilter: () => void;
  onCellView: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  onNewAction: () => void;
}

export const DataRowSection: React.FC<DataRowSectionProps> = ({
  toolbarExpanded,
  onToggleToolbar,
  onHideFields,
  onSort,
  onFilter,
  onCellView,
  onImport,
  onExport,
  onShare,
  onNewAction,
}) => {
  const toolbarActions = [
    { icon: <ArrowUpDownIcon className="w-5 h-5" />, label: 'Sort', onClick: onSort },
    { icon: <FilterIcon className="w-5 h-5" />, label: 'Filter', onClick: onFilter },
    { icon: <LayoutIcon className="w-5 h-5" />, label: 'Cell view', onClick: onCellView },
  ];

  const rightActions = [
    { icon: <DownloadIcon className="w-5 h-5" />, label: 'Import', onClick: onImport },
    { icon: <UploadIcon className="w-5 h-5" />, label: 'Export', onClick: onExport },
    { icon: <ShareIcon className="w-5 h-5" />, label: 'Share', onClick: onShare },
  ];

  return (
    <header className="flex items-center gap-2 px-2 py-1.5 w-full bg-white border-b border-[#eeeeee] z-[2]">
      <Button
        variant="ghost"
        className="flex items-center justify-center gap-1 p-2 rounded hover:bg-gray-50 transition-colors"
        onClick={onToggleToolbar}
      >
        <span className="font-paragraph-14-s-regular-14-20 text-[#121212]">
          Tool bar
        </span>
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform duration-200 ${
            toolbarExpanded ? 'rotate-180' : ''
          }`} 
        />
      </Button>

      <Separator orientation="vertical" className="h-6 bg-[#eeeeee]" />

      <div className="flex items-center gap-1 flex-1">
        {toolbarActions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-1 pl-2 pr-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
            onClick={action.onClick}
          >
            {action.icon}
            <span className="font-paragraph-14-s-regular-14-20 text-[#121212]">
              {action.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2">
        <div className="flex items-start gap-2">
          {rightActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center gap-1 pl-2 pr-3 py-2 rounded-md border-[#eeeeee] hover:bg-gray-50 transition-colors"
              onClick={action.onClick}
            >
              {action.icon}
              <span className="font-paragraph-14-s-regular-14-20 text-[#545454]">
                {action.label}
              </span>
            </Button>
          ))}
        </div>

        <Button 
          className="flex items-center justify-center gap-1 px-6 py-2 bg-[#4b6a4f] text-white rounded-md hover:bg-[#3e5741] transition-colors"
          onClick={onNewAction}
        >
          <SplitIcon className="w-5 h-5" />
          <span className="font-paragraph-14-s-medium-14-20">New Action</span>
        </Button>
      </div>
    </header>
  );
};