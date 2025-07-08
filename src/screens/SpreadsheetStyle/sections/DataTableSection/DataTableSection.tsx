import React from 'react';
import {
  Hash,
  Briefcase,
  Calendar,
  CircleDot,
  User,
  Globe,
  UserCheck,
  Plus,
  RotateCcw,
  ArrowUpDown,
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
    '0-0': 'Launch social media campaign for pro...',
    '0-1': '15-11-2024',
    '0-2': 'In-process',
    '0-3': 'Aisha Patel',
    '0-4': 'www.aishapatel...',
    '0-5': 'Sophie Choudhury',
    '0-6': 'Medium',
    '0-7': '20-11-2024',
    '0-8': '6,200,000',
    '1-0': 'Update press kit for company redesign',
    '1-1': '28-10-2024',
    '1-2': 'Need to start',
    '1-3': 'Irfan Khan',
    '1-4': 'www.irfankhang...',
    '1-5': 'Tejas Pandey',
    '1-6': 'High',
    '1-7': '30-10-2024',
    '1-8': '3,500,000',
    '2-0': 'Finalize user testing feedback for app...',
    '2-1': '05-12-2024',
    '2-2': 'In-process',
    '2-3': 'Mark Johnson',
    '2-4': 'www.markjohns...',
    '2-5': 'Rachel Lee',
    '2-6': 'Medium',
    '2-7': '10-12-2024',
    '2-8': '4,750,000',
    '3-0': 'Design new features for the website',
    '3-1': '10-01-2025',
    '3-2': 'Complete',
    '3-3': 'Emily Green',
    '3-4': 'www.emilygreen...',
    '3-5': 'Tom Wright',
    '3-6': 'Low',
    '3-7': '15-01-2025',
    '3-8': '5,900,000',
    '4-0': 'Prepare financial report for Q4',
    '4-1': '25-01-2025',
    '4-2': 'Blocked',
    '4-3': 'Jessica Brown',
    '4-4': 'www.jessicabro...',
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
    { icon: Hash, label: '#', bgColor: 'bg-[#f3f4f6]', width: 40 },
    { icon: Briefcase, label: 'Job Request', bgColor: 'bg-[#EEEEEE]', width: 240 },
    { icon: Calendar, label: 'Submitted', bgColor: 'bg-[#EEEEEE]', width: 110 },
    { icon: CircleDot, label: 'Status', bgColor: 'bg-[#EEEEEE]', width: 110 },
    { icon: User, label: 'Submitter', bgColor: 'bg-[#EEEEEE]', width: 110 },
    { icon: Globe, label: 'URL', bgColor: 'bg-[#EEEEEE]', width: 130 },
    {
      icon: UserCheck,
      label: 'Assigned',
      bgColor: 'bg-[#EEEEEE]',
      textColor: 'text-[#6b7280]',
      headerBg: 'bg-[#D2E0D4]',
      headerText: 'text-[#166534]',
      headerTitle: 'ABC',
      width: 110,
    },
    {
      icon: null,
      label: 'Priority',
      bgColor: 'bg-[#EAE3FC]',
      textColor: 'text-[#6b7280]',
      headerBg: 'bg-[#DCCFFC]',
      headerText: 'text-[#7c3aed]',
      headerTitle: 'Answer a question',
      width: 90,
    },
    {
      icon: null,
      label: 'Due Date',
      bgColor: 'bg-[#EAE3FC]',
      textColor: 'text-[#6b7280]',
      headerBg: 'bg-[#DCCFFC]',
      headerText: 'text-[#7c3aed]',
      headerTitle: 'Answer a question',
      width: 110,
    },
    {
      icon: null,
      label: 'Est. Value',
      bgColor: 'bg-[#FFE9E0]',
      textColor: 'text-[#6b7280]',
      headerBg: 'bg-[#FAC2AF]',
      headerText: 'text-[#ea580c]',
      headerTitle: 'Extract',
      width: 110,
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-[#fef3c7] text-[#d97706] border-[#fbbf24]';
      case 'Need to start':
        return 'bg-[#f3f4f6] text-[#6b7280] border-[#d1d5db]';
      case 'Complete':
        return 'bg-[#d1fae5] text-[#065f46] border-[#34d399]';
      case 'Blocked':
        return 'bg-[#fee2e2] text-[#dc2626] border-[#f87171]';
      default:
        return 'bg-[#f3f4f6] text-[#6b7280] border-[#d1d5db]';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-[#dc2626] font-medium';
      case 'Medium':
        return 'text-[#d97706] font-medium';
      case 'Low':
        return 'text-[#2563eb] font-medium';
      default:
        return 'text-[#6b7280] font-medium';
    }
  };

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      <div className="flex w-full overflow-auto">
        {/* Row numbers column */}
        <div className="flex-none w-10 flex flex-col border-r border-[#e5e7eb]">
          <div className="h-8 bg-[#f9fafb] border-b border-[#e5e7eb]"></div>
          <div className="h-8 bg-[#f3f4f6] flex items-center justify-center border-b border-[#e5e7eb]">
            <Hash className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
          </div>

          {rowNumbers.map((num) => (
            <div
              key={`row-${num}`}
              className="h-8 bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer border-b border-[#f3f4f6] text-sm text-[#6b7280] font-medium"
              onClick={() => onSelectCell(num - 1, 0)}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Main table content */}
        <div className="flex-1 overflow-x-auto">
          <Table className="border-collapse">
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="h-8 px-0 bg-[#E2E2E2] border-b border-r border-[#e5e7eb]" colSpan={4}>
                  <div className="h-8 flex items-center px-3 gap-2 bg-[#E2E2E2]">
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#f3f4f6] rounded border">
                      <img 
                        src="/Link.png" 
                        alt="link" 
                        className="w-4 h-4"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(33%) sepia(0%) saturate(1115%) hue-rotate(314deg) brightness(98%) contrast(88%)'
                        }}
                      />
                      <span className="text-[#6b7280] text-sm font-medium">
                        Q3 Financial Overview
                      </span>
                    </div>
                    <button 
                      onClick={() => console.log('Refresh Q3 Financial Overview')}
                      className="hover:bg-gray-200 p-1 rounded transition-colors"
                    >
                      <RotateCcw className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                    </button>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-white border-b border-r border-[#e5e7eb]"></TableHead>
                <TableHead className="h-8 px-0 bg-[#D2E0D4] border-b border-r border-[#e5e7eb]">
                  <div className="h-8 flex items-center justify-center gap-2 px-2 bg-[#D2E0D4]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort ABC column')}>
                        <ArrowUpDown className="w-4 h-4 text-[#166534] hover:text-[#166534] stroke-[1.5]" />
                      </button>
                      <span className="text-sm font-medium text-[#166534]">ABC</span>
                      <button onClick={() => console.log('ABC column options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#166534] hover:text-[#166534] stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-[#DCCFFC] border-b border-r border-[#e5e7eb]" colSpan={2}>
                  <div className="h-8 flex items-center justify-center gap-2 px-2 bg-[#DCCFFC]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort Answer a question')}>
                        <ArrowUpDown className="w-4 h-4 text-[#7c3aed] hover:text-[#7c3aed] stroke-[1.5]" />
                      </button>
                      <span className="text-sm font-medium text-[#7c3aed]">
                        Answer a question
                      </span>
                      <button onClick={() => console.log('Answer a question options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#7c3aed] hover:text-[#7c3aed] stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </TableHead>
                <TableHead className="h-8 px-0 bg-[#FAC2AF] border-b border-r border-[#e5e7eb]">
                  <div className="h-8 flex items-center justify-center gap-2 px-2 bg-[#FAC2AF]">
                    <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded">
                      <button onClick={() => console.log('Sort Extract')}>
                        <ArrowUpDown className="w-4 h-4 text-[#ea580c] hover:text-[#ea580c] stroke-[1.5]" />
                      </button>
                      <span className="text-sm font-medium text-[#ea580c]">Extract</span>
                      <button onClick={() => console.log('Extract options')}>
                        <MoreHorizontal className="w-4 h-4 text-[#ea580c] hover:text-[#ea580c] stroke-[1.5]" />
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
                  const width = columnWidths[colIndex] || header.width;

                  if (isHidden) return null;

                  return (
                    <TableHead
                      key={`subheader-${index}`}
                      className={`h-8 ${header.bgColor} border-b border-r border-[#e5e7eb] relative`}
                      style={{ width: `${width}px`, minWidth: `${width}px` }}
                    >
                      <div className="flex h-8 items-center gap-2 pl-3 pr-2">
                        <div className="flex items-center gap-2 flex-1">
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              header.textColor || 'text-[#6b7280]'
                            }`}
                          >
                            {header.label}
                          </span>
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
                    const width = columnWidths[actualColIndex] || header.width;
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
                          className="h-8 px-3 py-1 bg-white border-b border-r border-[#f3f4f6]"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <Badge
                            className={`${getStatusBadgeColor(cellValue)} rounded-full text-xs px-2 py-1 border`}
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
                          className="h-8 px-3 py-1 bg-white border-b border-r border-[#f3f4f6] text-center"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <div className={`text-sm ${getPriorityColor(cellValue)}`}>
                            {cellValue}
                          </div>
                        </TableCell>
                      );
                    }

                    if (header.label === 'Est. Value' && cellValue) {
                      return (
                        <TableCell
                          key={`cell-${rowIndex}-${colIndex}`}
                          className="h-8 px-3 py-1 bg-white border-b border-r border-[#f3f4f6]"
                          style={{ width: `${width}px`, minWidth: `${width}px` }}
                        >
                          <div className="flex justify-end items-center gap-1">
                            <span className="text-sm text-[#111827] text-right font-medium">
                              {cellValue}
                            </span>
                            <span className="text-sm text-[#9ca3af] font-medium">₹</span>
                          </div>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="h-8 px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
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
                          className={header.label === 'URL' ? 'underline text-blue-600' : ''}
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
        <div className="flex-none w-[80px] border border-dashed border-[#d1d5db] flex flex-col">
          <div className="h-8 bg-[#EEEEEE] flex items-center justify-center border-b border-[#e5e7eb]">
            <button
              onClick={() => console.log('Add new column')}
              className="hover:bg-gray-200 p-2 rounded transition-colors"
            >
              <Plus className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
            </button>
          </div>
          <div className="h-8 bg-[#EEEEEE] flex items-center justify-center border-b border-[#e5e7eb]"></div>
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
};