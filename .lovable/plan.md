

# Analytics & Operations Console — Implementation Plan

## Design Direction
Dense, data-rich layout inspired by tools like Datadog/Bloomberg. Compact spacing, information-dense tables, dark-mode-friendly color scheme, minimal whitespace.

## Phase 1: Layout & Navigation
- Left sidebar navigation with collapsible mini-mode (icons only)
- Sections: **Dashboard**, **Records** (table), **Admin**
- Breadcrumb trail for drill-down navigation (Dashboard → Table → Record)
- Dense header bar with global date range picker and dimension filters

## Phase 2: Dashboard Module
- KPI cards row showing key metrics (counts, sums, averages, % change)
- Charts section with 3-4 widgets: line chart (trends), bar chart (comparisons), pie/donut (distribution), stacked bar
- Global filters (date range, status, category) that apply across all widgets
- Click-to-drill-down: clicking a chart segment navigates to the Records table with filters pre-applied
- Loading, empty, and error states for each widget
- All data will use realistic mock/demo data

## Phase 3: Advanced Table Module (Core Feature)
- **Sorting**: Single and multi-column sort with visual priority indicators
- **Column Filtering**: Per-column filter popovers based on data type (text search, number range, date range, enum multi-select)
- **Global Search**: Search box filtering across all visible fields
- **Column Controls**: Resize, reorder (drag-and-drop), show/hide via column chooser
- **Active Filter Chips**: Displayed above table, individually removable
- **Row Selection**: Checkbox column for selecting rows + bulk action toolbar (export, delete)
- **Pagination**: Page-based navigation with configurable page size
- **Saved Views**: Save/load named views storing filters, sort, column order/widths/visibility
- **CSV Export**: Export current filtered/sorted view
- **Sticky header** and dense row styling
- Empty state with "No results — clear filters" prompt

## Phase 4: Forms & CRUD Module
- **Create/Edit forms** opened from table (side panel or modal)
- Field types: text, textarea, number, date, select, multiselect, toggle
- Validation: required fields, email/phone patterns, number ranges — with inline error messages
- Read-only display mode for viewing records
- Unsaved changes warning on navigation
- Sectioned layout for longer forms
- Basic audit trail panel showing field changes with user + timestamp (mock data)

## Phase 5: Auth & Role-Based Access (Scaffolding)
- Login/signup page UI with email/password
- Role-based UI scaffolding: Admin, Manager, Analyst views
- Navigation items conditionally shown based on role
- Protected route wrappers
- *Note: actual auth backend will be connected later when integrating your external API or Lovable Cloud*

## Phase 6: Polish & Integration-Ready
- Dark mode support
- Responsive adjustments (though optimized for desktop-first, data-dense use)
- Prepare API service layer with clean interfaces so mock data can be swapped for real API calls
- Toast notifications for actions (save, delete, export)
- Keyboard navigation support for table and forms

## Data Model (Mock)
- **Records**: id, name, status, category, region, amount, createdAt, updatedAt, owner
- **Users**: id, name, email, role, avatar
- **Audit Events**: id, recordId, field, oldValue, newValue, changedBy, timestamp

