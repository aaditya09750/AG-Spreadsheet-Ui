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
    <header className="flex items-center w-full bg-white border-b border-[#e5e7eb]" style={{ width: '1440px', height: '48px', gap: '8px', paddingTop: '6px', paddingRight: '8px', paddingBottom: '6px', paddingLeft: '8px' }}>
      <Button
        variant="ghost"
        className="flex items-center justify-center gap-2 px-2 py-1 rounded hover:bg-gray-50 transition-colors h-8"
        onClick={onToggleToolbar}
      >
        <span className="text-sm font-medium text-[#111827]">
          Tool bar
        </span>
        <img 
          src="/Chevron Double.png" 
          alt="chevron" 
          className={`w-3 h-3 transition-transform duration-200 ${
            toolbarExpanded ? 'rotate-180' : ''
          }`}
          style={{
            filter: 'brightness(0) saturate(100%) invert(7%) sepia(7%) saturate(1115%) hue-rotate(314deg) brightness(98%) contrast(88%)'
          }}
        />
      </Button>

      <Separator orientation="vertical" className="h-5 bg-[#e5e7eb]" />

      <div className="flex items-center gap-2 flex-1">
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors h-8"
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
          <span className="text-sm font-medium text-[#111827]">
            Hide fields
          </span>
        </Button>
        {toolbarActions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors h-8"
            onClick={action.onClick}
          >
            {action.icon}
            <span className="text-sm font-medium text-[#111827]">
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border-[#d1d5db] hover:bg-gray-50 transition-colors h-8 text-sm"
              onClick={action.onClick}
            >
              {action.icon}
              <span className="font-medium text-[#6b7280]">
                {action.label}
              </span>
            </Button>
          ))}
        </div>

        <Button 
          className="flex items-center justify-center text-white rounded-md hover:bg-[#3e5741] transition-colors"
          style={{ width: '150px', height: '36px', gap: '4px', paddingTop: '8px', paddingRight: '24px', paddingBottom: '8px', paddingLeft: '24px', borderRadius: '6px', background: '#4B6A4F' }}
          onClick={onNewAction}
        >
          <Plus className="w-4 h-4 stroke-[1.5]" />
          <span className="text-sm font-medium">New Action</span>
        </Button>
      </div>
    </header>
  );
};