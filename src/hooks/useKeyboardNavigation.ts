import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  selectedCell: { row: number; col: number } | null;
  editingCell: { row: number; col: number } | null;
  onSelectCell: (row: number, col: number) => void;
  onStartEditing: (row: number, col: number) => void;
  onStopEditing: () => void;
  maxRows: number;
  maxCols: number;
}

export const useKeyboardNavigation = ({
  selectedCell,
  editingCell,
  onSelectCell,
  onStartEditing,
  onStopEditing,
  maxRows,
  maxCols,
}: UseKeyboardNavigationProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;

      // If editing, only handle Escape and Enter
      if (editingCell) {
        switch (event.key) {
          case 'Escape':
            event.preventDefault();
            onStopEditing();
            break;
          case 'Enter':
            event.preventDefault();
            onStopEditing();
            if (row < maxRows - 1) {
              onSelectCell(row + 1, col);
            }
            break;
        }
        return;
      }

      // Navigation keys
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          if (row > 0) {
            onSelectCell(row - 1, col);
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (row < maxRows - 1) {
            onSelectCell(row + 1, col);
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (col > 0) {
            onSelectCell(row, col - 1);
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (col < maxCols - 1) {
            onSelectCell(row, col + 1);
          }
          break;
        case 'Enter':
        case 'F2':
          event.preventDefault();
          onStartEditing(row, col);
          break;
        case 'Tab':
          event.preventDefault();
          if (event.shiftKey) {
            if (col > 0) {
              onSelectCell(row, col - 1);
            }
          } else {
            if (col < maxCols - 1) {
              onSelectCell(row, col + 1);
            }
          }
          break;
      }
    },
    [selectedCell, editingCell, onSelectCell, onStartEditing, onStopEditing, maxRows, maxCols]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};