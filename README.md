# AG Spreadsheet UI

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Components-8B5CF6?style=for-the-badge&logo=radix-ui&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

A sophisticated, enterprise-grade spreadsheet interface built with React and TypeScript. This comprehensive solution delivers advanced data manipulation capabilities, intuitive user interactions, and professional-grade performance for modern web applications.

**Live Demo:** [https://ag-spreadsheet-ui.netlify.app/](https://ag-spreadsheet-ui.netlify.app/)

## Core Features

**Interactive Data Grid** - Advanced spreadsheet interface with real-time cell editing, multi-selection support, and seamless data manipulation capabilities.

**Dynamic Column Management** - Intelligent column resizing with drag-and-drop functionality, visibility toggles, and persistent width configurations.

**Advanced Keyboard Navigation** - Comprehensive keyboard shortcuts system supporting Excel-like navigation patterns, editing controls, and accessibility compliance.

**Professional Toolbar Suite** - Feature-rich action toolbar with sorting algorithms, filtering mechanisms, data import/export capabilities, and customizable tool arrangements.

**Tabbed Workspace Interface** - Multi-sheet organization system with dynamic tab management, workspace switching, and context-aware state preservation.

**Modern Component Architecture** - Built on Radix UI primitives with Tailwind CSS styling for maximum customization and design system integration.

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | Component-based UI framework with hooks and concurrent features |
| TypeScript | 5.x | Type-safe development with enhanced IDE support and error prevention |
| Tailwind CSS | 3.x | Utility-first styling with responsive design and custom theme support |
| Radix UI | Latest | Unstyled, accessible primitives for robust component foundations |
| Lucide React | Latest | Professional icon system with consistent styling and tree-shaking |
| Class Variance Authority | Latest | Type-safe component variant management system |

## Quick Start

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-Latest-CB3837?style=flat-square&logo=npm&logoColor=white)

### Installation

```bash
# Clone the repository
git clone https://github.com/aaditya09750/AG-Spreadsheet-Ui.git
cd AG-Spreadsheet-Ui

# Install dependencies
npm install

# Start development server
npm run dev

# Access application at http://localhost:3000
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Architecture Overview

```
src/
├── components/                 # Reusable UI components
│   ├── ColumnResizer.tsx      # Dynamic column width adjustment
│   ├── SpreadsheetCell.tsx    # Individual cell rendering logic
│   └── ui/                    # Radix UI component library
│       ├── avatar.tsx         # User profile components
│       ├── badge.tsx          # Status and label indicators
│       ├── button.tsx         # Interactive button variants
│       ├── card.tsx           # Container and layout cards
│       ├── input.tsx          # Form input controls
│       ├── separator.tsx      # Visual content dividers
│       ├── table.tsx          # Data table primitives
│       └── tabs.tsx           # Tabbed interface controls
├── hooks/                     # Custom React hooks
│   ├── useKeyboardNavigation.ts # Keyboard interaction handling
│   └── useSpreadsheetState.ts   # Centralized state management
├── lib/                       # Utility functions
│   └── utils.ts              # Helper functions and class utilities
├── screens/                   # Application screens
│   └── SpreadsheetStyle/      # Main spreadsheet interface
│       ├── SpreadsheetStyle.tsx # Primary component integration
│       └── sections/          # Modular interface sections
│           ├── DataRowSection/     # Toolbar and actions
│           ├── DataTableSection/   # Spreadsheet data grid
│           ├── HeaderSection/      # Tab navigation
│           └── NavigationBarSection/ # Top navigation bar
└── index.tsx                  # Application entry point
```

## User Interface Controls

### Keyboard Navigation

| Shortcut | Function | Context |
|----------|----------|---------|
| `Arrow Keys` | Cell Navigation | Move selection between cells |
| `Tab` / `Shift+Tab` | Horizontal Navigation | Move to next/previous cell |
| `Enter` | Edit Mode | Start editing selected cell |
| `F2` | Edit Mode | Alternative edit trigger |
| `Escape` | Cancel Edit | Exit edit mode without saving |
| `Ctrl+S` | Save Data | Persist current changes |

### Mouse Interactions

**Cell Selection** - Single-click to select, double-click to enter edit mode with visual feedback and state management.

**Column Resizing** - Drag column borders to adjust width with real-time preview and snap-to-grid functionality.

**Toolbar Actions** - Context-sensitive buttons for data operations with loading states and confirmation dialogs.

## State Management System

### SpreadsheetState Interface

```typescript
interface SpreadsheetState {
  selectedCell: { row: number; col: number } | null;
  editingCell: { row: number; col: number } | null;
  columnWidths: Record<number, number>;
  hiddenColumns: Set<number>;
  activeTab: string;
  toolbarExpanded: boolean;
}
```

### Core State Methods

**Cell Management**
- `selectCell(row: number, col: number)` - Update active cell selection
- `startEditing(row: number, col: number)` - Initialize edit mode for specific cell
- `stopEditing()` - Finalize editing and persist changes

**Layout Control**
- `resizeColumn(colIndex: number, width: number)` - Adjust column dimensions
- `toggleColumnVisibility(colIndex: number)` - Show/hide column visibility
- `setActiveTab(tab: string)` - Switch between worksheet tabs
- `toggleToolbar()` - Expand/collapse toolbar interface

## Feature Implementation

### Advanced Data Operations

![Features](https://img.shields.io/badge/Features-Production_Ready-brightgreen?style=for-the-badge&logo=checkmarx&logoColor=white)

**Sorting Algorithms** - Multi-column sorting with custom comparators and stable sort implementation for consistent data ordering.

**Filtering System** - Dynamic filter conditions with boolean logic operators, range selections, and custom filter expressions.

**Import/Export** - Support for CSV, Excel, and JSON formats with data validation, error handling, and progress indicators.

**Data Validation** - Real-time input validation with type checking, range constraints, and custom validation rules.

### Performance Optimizations

**Virtual Scrolling** - Efficient rendering of large datasets with viewport-based item management and smooth scrolling performance.

**Memoization Strategy** - Strategic use of React.memo and useMemo for optimal re-render prevention and computational efficiency.

**State Optimization** - Minimized state updates with batched operations and selective component re-rendering for enhanced responsiveness.

## Customization Options

### Theme Configuration

```typescript
// Tailwind CSS custom theme extension
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)'
      }
    }
  }
}
```

### Component Variants

```typescript
// Using Class Variance Authority for component styling
const cellVariants = cva(
  "base-cell-styles",
  {
    variants: {
      state: {
        selected: "ring-2 ring-primary",
        editing: "bg-accent border-primary",
        default: "hover:bg-secondary"
      }
    }
  }
)
```

## Development Guidelines

### Code Quality Standards

![Code Quality](https://img.shields.io/badge/Code_Quality-TypeScript_Strict-blue?style=for-the-badge&logo=typescript&logoColor=white)

**TypeScript Configuration** - Strict mode enabled with comprehensive type checking, null safety, and advanced compiler options.

**ESLint Integration** - Comprehensive linting rules covering React best practices, accessibility guidelines, and code consistency.

**Component Patterns** - Consistent component architecture following React best practices with proper prop typing and error boundaries.

### Testing Strategy

**Unit Testing** - Component-level testing with Jest and React Testing Library for isolated functionality verification.

**Integration Testing** - Cross-component interaction testing with user event simulation and state validation.

**Accessibility Testing** - WCAG 2.1 compliance verification with automated accessibility testing tools.

## Browser Compatibility

![Browser Support](https://img.shields.io/badge/Browser_Support-Modern_Browsers-success?style=for-the-badge&logo=googlechrome&logoColor=white)

**Supported Browsers** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ with full feature parity across all platforms.

**Mobile Compatibility** - Responsive design with touch-optimized interactions for tablet and mobile devices.

**Progressive Enhancement** - Graceful degradation for older browsers with core functionality preservation.

## Deployment Configuration

### Build Optimization

```bash
# Production build with optimizations
npm run build

# Bundle analysis
npm run analyze

# Performance testing
npm run lighthouse
```

**Build Features:**
- Tree-shaking for minimal bundle size
- Code splitting for optimized loading
- Asset optimization with compression
- Source map generation for debugging

## Contributing Guidelines

![Contributing](https://img.shields.io/badge/Contributing-Guidelines-purple?style=for-the-badge&logo=git&logoColor=white)

### Development Workflow

1. **Fork Repository** - Create personal fork with feature branch from `main`
2. **Development Setup** - Follow installation instructions and verify local environment
3. **Code Implementation** - Implement changes following established patterns and conventions
4. **Quality Assurance** - Run tests, linting, and type checking before submission
5. **Pull Request** - Submit comprehensive PR with detailed description and testing notes

### Code Standards

**Component Structure** - Follow established component patterns with proper TypeScript typing and documentation.

**Styling Guidelines** - Use Tailwind utility classes with consistent spacing and responsive design principles.

**State Management** - Utilize custom hooks for state logic with proper separation of concerns and performance optimization.

## Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Issues-181717?style=for-the-badge&logo=github&logoColor=white)

**Technical Support & Collaboration**

For technical inquiries, feature requests, or development collaboration:

- **Primary Contact:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **Issue Tracking:** Submit bug reports or enhancement requests via GitHub repository
- **Development Discussions:** Participate in architectural discussions and code reviews

**Response Time:** Technical support provided within 24-48 hours for critical issues.

## License & Usage Rights

![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge&logo=copyright&logoColor=white)

**Usage Rights:** All rights reserved by the author. Contact for licensing inquiries and commercial usage permissions.

**Attribution Required:** Please credit the original author for any derivative works or academic references.

---

**AG Spreadsheet UI** represents a comprehensive solution for modern data manipulation interfaces, combining advanced React development techniques with professional-grade user experience design. This project demonstrates expertise in complex state management, performance optimization, and accessible interface development.
