import {
  ArrowUpDown,
  Download,
  Filter,
  Grid3X3,
  Share,
  Plus,
  Upload,
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
    { icon: <ArrowUpDown className="w-4 h-4 stroke-[1.5]" />, label: 'Sort', onClick: onSort },
    { icon: <Filter className="w-4 h-4 stroke-[1.5]" />, label: 'Filter', onClick: onFilter },
    { icon: <Grid3X3 className="w-4 h-4 stroke-[1.5]" />, label: 'Cell view', onClick: onCellView },
  ];

  const rightActions = [
    { icon: <Download className="w-4 h-4 stroke-[1.5]" />, label: 'Import', onClick: onImport },
    { icon: <Upload className="w-4 h-4 stroke-[1.5]" />, label: 'Export', onClick: onExport },
    { icon: <Share className="w-4 h-4 stroke-[1.5]" />, label: 'Share', onClick: onShare },
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
        <img 
          src="/Chevron Double.png" 
          alt="chevron" 
          className={`w-4 h-4 transition-transform duration-200 ${
            toolbarExpanded ? 'rotate-180' : ''
          }`}
          style={{
            filter: 'brightness(0) saturate(100%) invert(7%) sepia(7%) saturate(1115%) hue-rotate(314deg) brightness(98%) contrast(88%)'
          }}
        />
      </Button>

      <Separator orientation="vertical" className="h-6 bg-[#eeeeee]" />

      <div className="flex items-center gap-1 flex-1">
        <Button
          variant="ghost"
          className="flex items-center gap-1 pl-2 pr-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
          onClick={onHideFields}
        >
          <img 
            src="/Eye.png" 
            alt="hide fields" 
            className="w-4 h-4"
            style={{
              filter: 'brightness(0) saturate(100%) invert(7%) sepia(7%) saturate(1115%) hue-rotate(314deg) brightness(98%) contrast(88%)'
            }}
          />
          <span className="font-paragraph-14-s-regular-14-20 text-[#121212]">
            Hide fields
          </span>
        </Button>
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
          <Plus className="w-4 h-4 stroke-[1.5]" />
          <span className="font-paragraph-14-s-medium-14-20">New Action</span>
        </Button>
      </div>
    </header>
  );
};