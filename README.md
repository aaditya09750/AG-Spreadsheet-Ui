# AG-Spreadsheet-Ui

A React-based spreadsheet UI component with features like column resizing, cell editing, keyboard navigation, and more.

## Preview

🔗 **Live Demo:** [ag-spreadsheet-ui.netlify.app](https://ag-spreadsheet-ui.netlify.app/)

---

## Features and Functionality

*   **Interactive Spreadsheet:** Provides a user interface for creating and manipulating spreadsheet data.
*   **Cell Editing:** Allows users to edit cell values directly within the spreadsheet.
*   **Column Resizing:** Enables users to adjust column widths using a resizer component.
*   **Keyboard Navigation:** Implements keyboard shortcuts for navigating between cells, starting/stopping editing, and more.  Uses the `useKeyboardNavigation` hook for this functionality.
*   **Toolbar Actions:** Includes a toolbar with actions like sorting, filtering, importing, and exporting.
*   **Tabbed Interface:** Supports multiple tabs for organizing different sheets or views.
*   **UI Components:** Leverages Radix UI and Tailwind CSS for a modern and customizable look. Utilizes custom UI components in the `src/components/ui` directory.
*   **Column Visibility Toggle:** Allows hiding and showing of individual columns.

## Technology Stack

*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **Tailwind CSS:** Utility-first CSS framework for styling.
*   **Radix UI:** Unstyled, accessible React components for building design systems.
*   **clsx:**  Tiny utility for constructing class name strings conditionally.
*   **tailwind-merge:** Utility for resolving Tailwind CSS class conflicts.
*   **lucide-react:** Beautifully simple, pixel-perfect icons.
*   **class-variance-authority (cva):** Utility for creating reusable component variants.

## Prerequisites

*   Node.js (version 16 or higher recommended)
*   npm or yarn package manager

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/aaditya09750/AG-Spreadsheet-Ui.git
    cd AG-Spreadsheet-Ui
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

## Usage Guide

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the application, and you can access it in your browser.  The specific URL will be output to the console (likely `localhost:3000`).

2.  The main entry point is `src/index.tsx`, which renders the `SpreadsheetStyle` component.

3.  Interact with the spreadsheet UI in your browser.  You can:

    *   Click on cells to select them.
    *   Double-click on cells or press `Enter` or `F2` to start editing.
    *   Use arrow keys, `Tab`, and `Shift+Tab` to navigate between cells.
    *   Drag the column resizers to adjust column widths.
    *   Click the toolbar buttons to trigger actions (currently logs to the console).
    *   Change tabs to see different views.

## Code Structure

*   `.eslintrc.js`: ESLint configuration file for code linting.
*   `index.html`:  The main HTML file that loads the React application. Includes Google Fonts and links to Tailwind CSS.
*   `src/`: Contains the source code for the application.
    *   `components/`: Reusable React components. Includes Radix UI components in `src/components/ui`.
        *   `ColumnResizer.tsx`:  Component for resizing columns.
        *   `SpreadsheetCell.tsx`:  Component for rendering individual spreadsheet cells.
        *   `ui/`: Radix UI components such as `avatar.tsx`, `badge.tsx`, `button.tsx`, `card.tsx`, `input.tsx`, `separator.tsx`, `table.tsx`, and `tabs.tsx`.
    *   `hooks/`: Custom React hooks.
        *   `useKeyboardNavigation.ts`:  Hook for handling keyboard navigation within the spreadsheet.
        *   `useSpreadsheetState.ts`:  Hook for managing the spreadsheet's state (selected cell, editing cell, column widths, etc.). Defines the `SpreadsheetState` interface.
    *   `lib/`: Utility functions.
        *   `utils.ts`: Contains utility functions like `cn` for conditional class names using `clsx` and `tailwind-merge`.
    *   `screens/`: Contains top-level components representing different screens or views.
        *   `SpreadsheetStyle/`: Contains the main spreadsheet style component.
            *   `SpreadsheetStyle.tsx`: Main spreadsheet component that integrates all sections.
            *   `index.ts`: Exports the `SpreadsheetStyle` component.
            *   `sections/`: Contains the different sections of the `SpreadsheetStyle` component.
                *   `DataRowSection/`: Section for toolbar actions.
                    *   `DataRowSection.tsx`: Implements the toolbar with buttons for sorting, filtering, importing, exporting, etc.
                    *   `index.ts`: Exports the `DataRowSection` component.
                *   `DataTableSection/`: Section for the actual spreadsheet data table.
                    *   `DataTableSection.tsx`: Renders the spreadsheet table using the `Table` component from `src/components/ui`.  Handles cell selection, editing, and keyboard navigation.
                    *   `index.ts`: Exports the `DataTableSection` component.
                *   `HeaderSection/`: Section for tabs.
                    *   `HeaderSection.tsx`: Implements the tabbed interface using the `Tabs` component from `src/components/ui`.
                    *   `index.ts`: Exports the `HeaderSection` component.
                *   `NavigationBarSection/`: Section for navigation bar.
                    *   `NavigationBarSection.tsx`: Implements the navigation bar with breadcrumbs, search, notifications, and user profile.
                    *   `index.ts`: Exports the `NavigationBarSection` component.
    *   `index.tsx`:  The main entry point for the React application.

## API Documentation

There is no external API. The components are designed to be used internally within the React application.  The `useSpreadsheetState` hook provides the main interface for interacting with the spreadsheet's state:

*   `state`: An object containing the current spreadsheet state.
    *   `selectedCell`:  `{ row: number; col: number } | null` - The currently selected cell.
    *   `editingCell`:  `{ row: number; col: number } | null` - The cell currently being edited.
    *   `columnWidths`:  `Record<number, number>` - A map of column index to width.
    *   `hiddenColumns`: `Set<number>` - A set of column indices that are hidden.
    *   `activeTab`: `string` - The currently active tab.
    *   `toolbarExpanded`: `boolean` - Whether the toolbar is expanded.
*   `selectCell(row: number, col: number)`: Selects a cell.
*   `startEditing(row: number, col: number)`: Starts editing a cell.
*   `stopEditing()`: Stops editing a cell.
*   `resizeColumn(colIndex: number, width: number)`: Resizes a column.
*   `toggleColumnVisibility(colIndex: number)`: Toggles the visibility of a column.
*   `setActiveTab(tab: string)`: Sets the active tab.
*   `toggleToolbar()`: Toggles the toolbar's expanded state.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request to the `main` branch.

Please ensure that your code follows the existing code style and includes appropriate tests.

## License Information

No license specified. All rights reserved by the author.

## Contact/Support Information

For questions or support, please contact aadigunjal0975@gmail.com or open an issue on the GitHub repository.