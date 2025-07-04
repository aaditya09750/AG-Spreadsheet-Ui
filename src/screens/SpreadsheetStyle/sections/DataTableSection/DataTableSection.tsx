import React from 'react';
import {
  Hash,
  Briefcase,
  Calendar,
  CircleDot,
  User,
  Globe,
  Smile,
  Plus,
  Link,
  RotateCcw,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';
import { Badge } from '../../../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { SpreadsheetCell } from '../../../../components/SpreadsheetCell';
import { ColumnResizer } from '../../../../components/ColumnResizer';
import { useKeyboardNavigation } from '../../../../hooks/useKeyboardNavigation';

interface DataTableSectionProps {
  selectedCell: { row: number; col: number } | null;
  editingCell: { row: number; col: number } | null;
  columnWidths: Record<number, number>;
  hiddenColumns: Set<number>;
  onSelectCell: (row: number, col: number) => void;
  onStartEditing: (row: number, col: number) => void;
  onStopEditing: () => void;
  onResizeColumn: (colIndex: number, width: number) => void;
  onToggleColumnVisibility: (colIndex: number) => void;
}

export const DataTableSection: React.FC<DataTableSectionProps> = ({
  selectedCell,
  editingCell,
  columnWidths,
  hiddenColumns,
  onSelectCell,
  onStartEditing,
  onStopEditing,
  onResizeColumn,
  onToggleColumnVisibility,
}) => {
  const rowNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  const [cellData, setCellData] = React.useState<Record<string, string>>({
    '0-0': 'Launch social media campaign for product XYZ',
    '0-1': '15-11-2024',
    '0-2': 'In-process',
    '0-3': 'Aisha Patel',
    '0-4': 'www.aishapatel.com',
    '0-5': 'Sophie Choudhury',
    '0-6': 'Medium',
    '0-7': '20-11-2024',
    '0-8': '6,200,000',
    '1-0': 'Update press kit for company redesign',
    '1-1': '28-10-2024',
    '1-2': 'Need to start',
    '1-3': 'Irfan Khan',
    '1-4': 'www.irfankhanportfolio.com',
    '1-5': 'Tejas Pandey',
    '1-6': 'High',
    '1-7': '30-10-2024',
    '1-8': '3,500,000',
    '2-0': 'Finalize user testing feedback for app update',
    '2-1': '05-12-2024',
    '2-2': 'In-process',
    '2-3': 'Mark Johnson',
    '2-4': 'www.markjohnsondesigns.com',
    '2-5': 'Rachel Lee',
    '2-6': 'Medium',
    '2-7': '10-12-2024',
    '2-8': '4,750,000',
    '3-0': 'Design new features for the website',
    '3-1': '10-01-2025',
    '3-2': 'Complete',
    '3-3': 'Emily Green',
    '3-4': 'www.emilygreenart.com',
    '3-5': 'Tom Wright',
    '3-6': 'Low',
    '3-7': '15-01-2025',
    '3-8': '5,900,000',
    '4-0': 'Prepare financial report for Q4',
    '4-1': '25-01-2025',
    '4-2': 'Blocked',
    '4-3': 'Jessica Brown',
    '4-4': 'www.jessicabrowncreative.com',
    '4-5': 'Kevin Smith',
    '4-6': 'Low',
    '4-7': '30-01-2025',
    '4-8': '2,800,000',
  });

  const updateCellValue = (row: number, col: number, value: string) => {
    const key = `${row}-${col}`;
    setCellData(prev => ({ ...prev, [key]: value }));
    console.log(`Cell ${key} updated to: ${value}`);
  };

  useKeyboardNavigation({
    selectedCell,
    editingCell,
    onSelectCell,
    onStartEditing,
    onStopEditing,
    maxRows: 25,
    maxCols: 9,
  });

  const columnHeaders = [
    { icon: Hash, label: '#', bgColor: 'bg-[#eeeeee]' },
    { icon: Briefcase, label: 'Job Request', bgColor: 'bg-[#eeeeee]' },
    { icon: Calendar, label: 'Submitted', bgColor: 'bg-[#eeeeee]' },
    { icon: CircleDot, label: 'Status', bgColor: 'bg-[#eeeeee]' },
    { icon: User, label: 'Submitter', bgColor: 'bg-[#eeeeee]' },
    { icon: Globe, label: 'URL', bgColor: 'bg-[#eeeeee]' },
    {
      icon: Smile,
      label: 'Assigned',
      bgColor: 'bg-[#e8f0e9]',
      textColor: 'text-[#666c66]',
      headerBg: 'bg-[#d2e0d4]',
      headerText: 'text-[#505450]',
      headerTitle: 'ABC',
    },
    {
      icon: null,
      label: 'Priority',
      bgColor: 'bg-[#eae3fc]',
      textColor: 'text-[#645c7f]',
      headerBg: 'bg-[#dccffc]',
      headerText: 'text-[#463e59]',
      headerTitle: 'Answer a question',
    },
    {
      icon: null,
      label: 'Due Date',
      bgColor: 'bg-[#eae3fc]',
      textColor: 'text-[#645c7f]',
      headerBg: 'bg-[#dccffc]',
      headerText: 'text-[#463e59]',
      headerTitle: 'Answer a question',
    },
    {
      icon: null,
      label: 'Est. Value',
      bgColor: 'bg-[#ffe9e0]',
      textColor: 'text-[#8c6b61]',
      headerBg: 'bg-[#fac2af]',
      headerText: 'text-[#695149]',
      headerTitle: 'Extract',
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-[#fff3d6] text-[#84640a]';
      case 'Need to start':
        return 'bg-slate-200 text-slate-600';
      case 'Complete':
        return 'bg-[#d2f2e2] text-[#0a6d3c]';
      case 'Blocked':
        return 'bg-[#ffe1dd] text-[#c12119]';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-[#ef4c43]';
      case 'Medium':
        return 'text-[#c1920f]';
      case 'Low':
        return 'text-[#1a8cff]';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex flex-col h-[872px] w-full bg-white overflow-hidden">
      <div className="flex flex-1 w-full overflow-auto">
        {/* Row numbers column */}
        <div className="flex-none w-8 flex flex-col border-r border-[#e0e0e0]">
          <div className="h-8 bg-[#e2e2e2] border-b border-[#e0e0e0]"></div>
          <div className="h-8 bg-[#eeeeee] flex items-center pl-2 border-b border-[#e0e0e0]">
            <Hash className="w-4 h-4 text-[#757575]" />
          </div>

          {rowNumbers.map((num) => (
            <div
              key={`row-${num}`}
              className="h-8 bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer border-b border-[#e0e0e0]"
              onClick={() => onSelectCell(num - 1, 0)}
            >
              <span className="text-[#757575] text-xs font-paragraph-14-s-regular-14-20">
                {num}
              </span>
            </div>
          ))}
        </div>

        {/* Main table content */}
        <div className="flex-1 overflow-x-auto">
          <Table className="border-collapse">
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="h-8 px-0 bg-[#e2e2e2] border-b border-r border-[#e0e0e0]" colSpan={4}>
                  <div className="h-8 flex items-center px-2 gap-2 bg-[#e2e2e2]">
                    <div className="inline-flex items-center gap-1 p-1 bg-[#eeeeee] rounded">
                      <Link className="w-4 h-4 text-[#545454]" />
                      <span className="text-[#545454] text-xs font-paragraph-12-XS-regular-12-16">
                        Q3 Financial Overview
                      </span>
                    </div>
                    <button 
                      onClick={() => console.log('Refresh Q3 Financial Overview')}
                      className="hover:bg-gray-200 p-1 rounded transition-colors"
                    >
                      <RotateCcw className="w-4 h-4 text-[#545454]" />
                    </button>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-white border-b border-r border-[#e0e0e0]"></TableHead>
                <TableHead className="h-8 px-0 bg-[#d2e0d4] border-b border-r border-[#e0e0e0]">
                  <div className="h-8 flex items-center justify-center gap-2 px-2 bg-[#d2e0d4]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort ABC column')}>
                        <ArrowUpDown className="w-4 h-4 text-[#757575] hover:text-[#505450]" />
                      </button>
                      <span className="text-sm font-medium text-[#505450]">ABC</span>
                      <button onClick={() => console.log('ABC column options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#757575] hover:text-[#505450]" />
                      </button>
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-[#dccffc] border-b border-r border-[#e0e0e0]" colSpan={2}>
                  <div className="h-8 flex items-center justify-center gap-2 px-2 bg-[#dccffc]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort Answer a question')}>
                        <ArrowUpDown className="w-4 h-4 text-[#757575] hover:text-[#463e59]" />
                      </button>
                      <span className="text-sm font-medium text-[#463e59]">
                        Answer a question
                      </span>
                      <button onClick={() => console.log('Answer a question options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#757575] hover:text-[#463e59]" />
                      </button>
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-[#fac2af] border-b border-r border-[#e0e0e0]">
                  <div className="h-8 flex items-center justify-center gap-2 px-4 bg-[#fac2af]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort Extract')}>
                        <ArrowUpDown className="w-4 h-4 text-[#757575] hover:text-[#695149]" />
                      </button>
                      <span className="text-sm font-medium text-[#695149]">Extract</span>
                      <button onClick={() => console.log('Extract options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#757575] hover:text-[#695149]" />
                      </button>
                    </div>
                  </div>
                </TableHead>
              </TableRow>
              <TableRow className="border-none">
                {columnHeaders.slice(1).map((header, index) => {
                  const colIndex = index + 1;
                  const IconComponent = header.icon;
                  const isHidden = hiddenColumns.has(colIndex);
                  const width = columnWidths[colIndex] || 150;

                  if (isHidden) return null;

                  return (
                    <TableHead
                      key={`subheader-${index}`}
                      className={`h-8 ${header.bgColor} border-b border-r border-[#e0e0e0] relative`}
                      style={{ width: `${width}px`, minWidth: `${width}px` }}
                    >
                      <div className="flex h-8 items-center gap-1 pl-2 pr-1">
                        <div className="flex items-center gap-1 flex-1">
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 text-[#757575]" />
                          )}
                          <span
                            className={`text-xs font-semibold ${
                              header.textColor || 'text-[#757575]'
                            }`}
                          >
                            {header.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {header.label !== 'Priority' &&
                            header.label !== 'Due Date' &&
                            header.label !== 'Est. Value' && (
                              <button
                                onClick={() => console.log(`Sort ${header.label}`)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                              >
                                <ChevronDown className="w-3 h-3 text-[#757575]" />
                              </button>
                            )}
                        </div>
                      </div>
                      <ColumnResizer
                        onResize={(newWidth) => onResizeColumn(colIndex, newWidth)}
                        initialWidth={width}
                      />
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 25 }, (_, rowIndex) => (
                <TableRow key={`row-${rowIndex}`} className="border-none">
                  {columnHeaders.slice(1).map((header, colIndex) => {
                    const actualColIndex = colIndex + 1;
                    const isHidden = hiddenColumns.has(actualColIndex);
                    const width = columnWidths[actualColIndex] || 150;
                    const cellKey = `${rowIndex}-${colIndex}`;
                    const cellValue = cellData[cellKey] || '';

                    if (isHidden) return null;

                    const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                    const isEditing = editingCell?.row === rowIndex && editingCell?.col === colIndex;

                    // Special rendering for status and priority columns
                    if (header.label === 'Status' && cellValue) {
                      return (
                        <TableCell
                          key={`cell-${rowIndex}-${colIndex}`}
                          className="h-8 px-2 py-0 bg-white border-b border-r border-[#e0e0e0]"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <Badge
                            className={`${getStatusBadgeColor(cellValue)} rounded-full font-medium text-xs px-2 py-1`}
                          >
                            {cellValue}
                          </Badge>
                        </TableCell>
                      );
                    }

                    if (header.label === 'Priority' && cellValue) {
                      return (
                        <TableCell
                          key={`cell-${rowIndex}-${colIndex}`}
                          className="h-8 px-2 py-0 bg-white border-b border-r border-[#e0e0e0] text-center"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <div className={`text-xs font-semibold ${getPriorityColor(cellValue)}`}>
                            {cellValue}
                          </div>
                        </TableCell>
                      );
                    }

                    if (header.label === 'Est. Value' && cellValue) {
                      return (
                        <TableCell
                          key={`cell-${rowIndex}-${colIndex}`}
                          className="h-8 px-2 py-0 bg-white border-b border-r border-[#e0e0e0]"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <div className="flex justify-end items-center gap-1">
                            <span className="text-xs text-[#121212] text-right">
                              {cellValue}
                            </span>
                            <span className="text-xs text-[#afafaf] font-medium">₹</span>
                          </div>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="h-8 px-0 py-0 bg-white border-b border-r border-[#e0e0e0]"
                        style={{ width: `${width}px`, minWidth: `${width}px` }}
                      >
                        <SpreadsheetCell
                          value={cellValue}
                          isSelected={isSelected}
                          isEditing={isEditing}
                          onSelect={() => onSelectCell(rowIndex, colIndex)}
                          onStartEdit={() => onStartEditing(rowIndex, colIndex)}
                          onStopEdit={onStopEditing}
                          onValueChange={(value) => updateCellValue(rowIndex, colIndex, value)}
                          className={header.label === 'URL' ? 'underline' : ''}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add column */}
        <div className="flex-none w-[126px] border border-dashed border-[#cbcbcb] flex flex-col">
          <div className="h-8 bg-[#eeeeee] flex items-center justify-center border-b border-[#e0e0e0]">
            <button
              onClick={() => console.log('Add new column')}
              className="hover:bg-gray-200 p-1 rounded transition-colors"
            >
              <Plus className="w-5 h-5 text-[#757575]" />
            </button>
          </div>
          <div className="h-8 bg-[#eeeeee] flex items-center justify-center border-b border-[#e0e0e0]"></div>
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
};