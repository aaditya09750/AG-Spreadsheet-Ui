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
        <div className="flex-none flex flex-col border-r border-[#e5e7eb]" style={{ width: '32px' }}>
          <div style={{ height: '32px' }} className="bg-[#f9fafb] border-b border-[#e5e7eb]"></div>
          <div style={{ height: '32px' }} className="bg-[#f3f4f6] flex items-center justify-center border-b border-[#e5e7eb]">
            <Hash className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
          </div>

          {rowNumbers.map((num) => (
            <div
              key={`row-${num}`}
              className="bg-white flex items-center justify-center hover:bg-gray-50 cursor-pointer border-b border-[#f3f4f6] text-sm text-[#6b7280] font-medium"
              style={{ width: '32px', height: '32px' }}
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
                <TableHead className="px-0 border-b border-r border-[#e5e7eb]" colSpan={4} style={{ height: '32px', background: '#E2E2E2' }}>
                  <div className="flex items-center gap-2" style={{ height: '32px', width: '631px', gap: '8px', padding: '8px' }}>
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
                <TableHead className="px-0 bg-white border-b border-r border-[#e5e7eb]" style={{ height: '32px' }}></TableHead>
                <TableHead className="px-0 border-b border-r border-[#e5e7eb]" style={{ height: '32px', background: '#D2E0D4' }}>
                  <div className="flex items-center justify-center gap-2" style={{ height: '32px', width: '124px', gap: '8px', paddingRight: '16px', paddingLeft: '16px' }}>
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
                <TableHead className="px-0 border-b border-r border-[#e5e7eb]" colSpan={2} style={{ height: '32px', background: '#DCCFFC' }}>
                  <div className="flex items-center justify-center gap-2" style={{ height: '32px', width: '251px', gap: '8px', paddingRight: '16px', paddingLeft: '16px' }}>
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
                <TableHead className="px-0 border-b border-r border-[#e5e7eb]" style={{ height: '32px', background: '#FAC2AF' }}>
                  <div className="flex items-center justify-center gap-2" style={{ height: '32px', width: '124px', gap: '8px', paddingRight: '16px', paddingLeft: '16px' }}>
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
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '256px', minWidth: '256px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <Briefcase className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">Job Request</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(1, newWidth)}
                    initialWidth={256}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <Calendar className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">Submitted</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(2, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <CircleDot className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">Status</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(3, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <User className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">Submitter</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(4, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <Globe className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">URL</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(5, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EEEEEE' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <UserCheck className="w-4 h-4 text-[#6b7280] stroke-[1.5]" />
                      <span className="text-sm font-medium text-[#6b7280]">Assigned</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(6, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EAE3FC' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm font-medium text-[#6b7280]">Priority</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(7, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#EAE3FC' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm font-medium text-[#6b7280]">Due Date</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(8, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
                <TableHead
                  className="border-b border-r border-[#e5e7eb] relative"
                  style={{ width: '124px', minWidth: '124px', height: '32px', background: '#FFE9E0' }}
                >
                  <div className="flex items-center gap-2" style={{ height: '32px', gap: '8px', padding: '8px' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm font-medium text-[#6b7280]">Est. Value</span>
                    </div>
                  </div>
                  <ColumnResizer
                    onResize={(newWidth) => onResizeColumn(9, newWidth)}
                    initialWidth={124}
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 25 }, (_, rowIndex) => (
                <TableRow key={`row-${rowIndex}`} className="border-none">
                  {/* Job Request Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '256px', minWidth: '256px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-0`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 0}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 0}
                      onSelect={() => onSelectCell(rowIndex, 0)}
                      onStartEdit={() => onStartEditing(rowIndex, 0)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 0, value)}
                    />
                  </TableCell>
                  
                  {/* Submitted Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-1`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 1}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 1}
                      onSelect={() => onSelectCell(rowIndex, 1)}
                      onStartEdit={() => onStartEditing(rowIndex, 1)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 1, value)}
                    />
                  </TableCell>

                  {/* Status Column */}
                  <TableCell
                    className="bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px', gap: '8px', padding: '8px' }}
                  >
                    {cellData[`${rowIndex}-2`] && (
                      <Badge
                        className={`${getStatusBadgeColor(cellData[`${rowIndex}-2`])} rounded-full text-xs px-2 py-1 border`}
                      >
                        {cellData[`${rowIndex}-2`]}
                      </Badge>
                    )}
                  </TableCell>

                  {/* Submitter Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-3`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 3}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 3}
                      onSelect={() => onSelectCell(rowIndex, 3)}
                      onStartEdit={() => onStartEditing(rowIndex, 3)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 3, value)}
                    />
                  </TableCell>

                  {/* URL Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-4`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 4}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 4}
                      onSelect={() => onSelectCell(rowIndex, 4)}
                      onStartEdit={() => onStartEditing(rowIndex, 4)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 4, value)}
                      className="underline text-blue-600"
                    />
                  </TableCell>

                  {/* Assigned Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-5`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 5}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 5}
                      onSelect={() => onSelectCell(rowIndex, 5)}
                      onStartEdit={() => onStartEditing(rowIndex, 5)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 5, value)}
                    />
                  </TableCell>

                  {/* Priority Column */}
                  <TableCell
                    className="bg-white border-b border-r border-[#f3f4f6] text-center"
                    style={{ width: '124px', minWidth: '124px', height: '32px', gap: '8px', padding: '8px' }}
                  >
                    {cellData[`${rowIndex}-6`] && (
                      <div className={`text-sm ${getPriorityColor(cellData[`${rowIndex}-6`])}`}>
                        {cellData[`${rowIndex}-6`]}
                      </div>
                    )}
                  </TableCell>

                  {/* Due Date Column */}
                  <TableCell
                    className="px-0 py-0 bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px' }}
                  >
                    <SpreadsheetCell
                      value={cellData[`${rowIndex}-7`] || ''}
                      isSelected={selectedCell?.row === rowIndex && selectedCell?.col === 7}
                      isEditing={editingCell?.row === rowIndex && editingCell?.col === 7}
                      onSelect={() => onSelectCell(rowIndex, 7)}
                      onStartEdit={() => onStartEditing(rowIndex, 7)}
                      onStopEdit={onStopEditing}
                      onValueChange={(value) => updateCellValue(rowIndex, 7, value)}
                    />
                  </TableCell>

                  {/* Est. Value Column */}
                  <TableCell
                    className="bg-white border-b border-r border-[#f3f4f6]"
                    style={{ width: '124px', minWidth: '124px', height: '32px', gap: '8px', padding: '8px' }}
                  >
                    {cellData[`${rowIndex}-8`] && (
                      <div className="flex justify-end items-center gap-1">
                        <span className="text-sm text-[#111827] text-right font-medium">
                          {cellData[`${rowIndex}-8`]}
                        </span>
                        <span className="text-sm text-[#9ca3af] font-medium">₹</span>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add column */}
        <div className="flex-none border border-dashed border-[#d1d5db] flex flex-col" style={{ width: '124px' }}>
          <div className="flex items-center justify-center border-b border-[#e5e7eb]" style={{ height: '32px', width: '124px', gap: '8px', padding: '8px', background: '#EEEEEE' }}>
            <button
              onClick={() => console.log('Add new column')}
              className="hover:bg-gray-200 p-1 rounded transition-colors"
            >
              <Plus className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
            </button>
          </div>
          <div className="flex items-center justify-center border-b border-[#e5e7eb]" style={{ height: '32px', background: '#EEEEEE' }}></div>
          <div className="flex-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
};