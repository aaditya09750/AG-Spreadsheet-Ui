import { useState, useCallback } from 'react';

export interface CellData {
  id: string;
  value: string;
  isEditing: boolean;
}

export interface SpreadsheetState {
  selectedCell: { row: number; col: number } | null;
  editingCell: { row: number; col: number } | null;
  columnWidths: Record<number, number>;
  hiddenColumns: Set<number>;
  activeTab: string;
  toolbarExpanded: boolean;
}

export const useSpreadsheetState = () => {
  const [state, setState] = useState<SpreadsheetState>({
    selectedCell: null,
    editingCell: null,
    columnWidths: {},
    hiddenColumns: new Set(),
    activeTab: 'all',
    toolbarExpanded: false,
  });

  const selectCell = useCallback((row: number, col: number) => {
    console.log(`Cell selected: Row ${row}, Column ${col}`);
    setState(prev => ({
      ...prev,
      selectedCell: { row, col },
      editingCell: null,
    }));
  }, []);

  const startEditing = useCallback((row: number, col: number) => {
    console.log(`Started editing: Row ${row}, Column ${col}`);
    setState(prev => ({
      ...prev,
      editingCell: { row, col },
      selectedCell: { row, col },
    }));
  }, []);

  const stopEditing = useCallback(() => {
    console.log('Stopped editing');
    setState(prev => ({
      ...prev,
      editingCell: null,
    }));
  }, []);

  const resizeColumn = useCallback((colIndex: number, width: number) => {
    console.log(`Column ${colIndex} resized to ${width}px`);
    setState(prev => ({
      ...prev,
      columnWidths: {
        ...prev.columnWidths,
        [colIndex]: width,
      },
    }));
  }, []);

  const toggleColumnVisibility = useCallback((colIndex: number) => {
    setState(prev => {
      const newHiddenColumns = new Set(prev.hiddenColumns);
      if (newHiddenColumns.has(colIndex)) {
        newHiddenColumns.delete(colIndex);
        console.log(`Column ${colIndex} shown`);
      } else {
        newHiddenColumns.add(colIndex);
        console.log(`Column ${colIndex} hidden`);
      }
      return {
        ...prev,
        hiddenColumns: newHiddenColumns,
      };
    });
  }, []);

  const setActiveTab = useCallback((tab: string) => {
    console.log(`Tab changed to: ${tab}`);
    setState(prev => ({
      ...prev,
      activeTab: tab,
    }));
  }, []);

  const toggleToolbar = useCallback(() => {
    setState(prev => {
      const newExpanded = !prev.toolbarExpanded;
      console.log(`Toolbar ${newExpanded ? 'expanded' : 'collapsed'}`);
      return {
        ...prev,
        toolbarExpanded: newExpanded,
      };
    });
  }, []);

  return {
    state,
    selectCell,
    startEditing,
    stopEditing,
    resizeColumn,
    toggleColumnVisibility,
    setActiveTab,
    toggleToolbar,
  };
};