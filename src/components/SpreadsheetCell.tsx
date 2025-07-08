import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface SpreadsheetCellProps {
  value: string;
  isSelected: boolean;
  isEditing: boolean;
  onSelect: () => void;
  onStartEdit: () => void;
  onStopEdit: () => void;
  onValueChange: (value: string) => void;
  className?: string;
}

export const SpreadsheetCell: React.FC<SpreadsheetCellProps> = ({
  value,
  isSelected,
  isEditing,
  onSelect,
  onStartEdit,
  onStopEdit,
  onValueChange,
  className,
}) => {
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  const handleDoubleClick = () => {
    onStartEdit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    onValueChange(editValue);
    onStopEdit();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onValueChange(editValue);
      onStopEdit();
    } else if (e.key === 'Escape') {
      setEditValue(value);
      onStopEdit();
    }
  };

  return (
    <div
      className={cn(
        'h-8 px-3 py-1 relative cursor-cell bg-white',
        isSelected && !isEditing && 'ring-2 ring-[#3b82f6] ring-inset z-10',
        className
      )}
      onClick={onSelect}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          className="w-full h-full bg-white border border-[#3b82f6] px-2 text-sm outline-none z-20"
        />
      ) : (
        <div className="text-sm text-[#111827] truncate h-full flex items-center">
          {value}
        </div>
      )}
    </div>
  );
};