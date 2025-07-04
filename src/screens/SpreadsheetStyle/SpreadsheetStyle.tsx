import React from 'react';
import { DataRowSection } from './sections/DataRowSection';
import { DataTableSection } from './sections/DataTableSection/DataTableSection';
import { HeaderSection } from './sections/HeaderSection';
import { NavigationBarSection } from './sections/NavigationBarSection';
import { useSpreadsheetState } from '../../hooks/useSpreadsheetState';

export const SpreadsheetStyle = (): JSX.Element => {
  const {
    state,
    selectCell,
    startEditing,
    stopEditing,
    resizeColumn,
    toggleColumnVisibility,
    setActiveTab,
    toggleToolbar,
  } = useSpreadsheetState();

  const handleToolbarActions = {
    onHideFields: () => console.log('Hide fields clicked'),
    onSort: () => console.log('Sort clicked'),
    onFilter: () => console.log('Filter clicked'),
    onCellView: () => console.log('Cell view clicked'),
    onImport: () => console.log('Import clicked'),
    onExport: () => console.log('Export clicked'),
    onShare: () => console.log('Share clicked'),
    onNewAction: () => console.log('New Action clicked'),
  };

  return (
    <div className="flex w-full min-w-[1440px] bg-white">
      <div className="flex flex-col w-full items-start bg-slate-50">
        <NavigationBarSection />
        <DataRowSection
          toolbarExpanded={state.toolbarExpanded}
          onToggleToolbar={toggleToolbar}
          {...handleToolbarActions}
        />
        <DataTableSection
          selectedCell={state.selectedCell}
          editingCell={state.editingCell}
          columnWidths={state.columnWidths}
          hiddenColumns={state.hiddenColumns}
          onSelectCell={selectCell}
          onStartEditing={startEditing}
          onStopEditing={stopEditing}
          onResizeColumn={resizeColumn}
          onToggleColumnVisibility={toggleColumnVisibility}
        />
        <HeaderSection
          activeTab={state.activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};