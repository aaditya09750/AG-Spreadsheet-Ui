import React, { useState, useRef } from 'react';

interface ColumnResizerProps {
  onResize: (width: number) => void;
  initialWidth?: number;
}

export const ColumnResizer: React.FC<ColumnResizerProps> = ({
  onResize,
  initialWidth = 150,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(initialWidth);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = initialWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const diff = e.clientX - startXRef.current;
      const newWidth = Math.max(50, startWidthRef.current + diff);
      onResize(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={`absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-blue-500 ${
        isResizing ? 'bg-blue-500' : ''
      }`}
      onMouseDown={handleMouseDown}
    />
  );
};