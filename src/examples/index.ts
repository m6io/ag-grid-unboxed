import type { Example } from '@/types/Example'

import { UsersDisplayExample } from './users/UsersDisplayExample'
import { InvoiceFormExample } from './invoice/InvoiceFormExample'
import { SpecComparisonExample } from './comparison/SpecComparisonExample'

import {
  ModuleRegistry,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  CsvExportModule,
  ValidationModule,
  TextFilterModule,
  RowSelectionModule,
  CellStyleModule,
  NumberEditorModule,
  TextEditorModule,
  SelectEditorModule,
  RowStyleModule,
} from 'ag-grid-community'
import {} from 'ag-grid-community'

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  CsvExportModule,
  ValidationModule,
  TextFilterModule,
  RowSelectionModule,
  CellStyleModule,
  NumberEditorModule,
  TextEditorModule,
  SelectEditorModule,
  RowStyleModule,
])

export const examples: Example[] = [
  {
    id: 'users-display',
    title: 'Users Table',
    description:
      'Display user data from JSONPlaceholder API. Shows how to load async data and use built-in sorting, filtering, and CSV export.',
    path: '/users-display',
    component: UsersDisplayExample,
    pageTitle: 'Users Table',
    pageSubtitle:
      'Fetch data from an API and use filtering, sorting, and export features',
    image: '/images/1_users_display.png',
  },
  {
    id: 'invoice-form',
    title: 'Invoice Creator',
    description:
      'Create invoices with editable line items. Demonstrates inline editing, adding/removing rows, and live calculations.',
    path: '/invoice-form',
    component: InvoiceFormExample,
    pageTitle: 'Invoice Creator',
    pageSubtitle:
      'Editable grid with cell editors, form integration, and real-time calculations',
    image: '/images/2_invoice_form.png',
  },
  {
    id: 'spec-comparison',
    title: 'Phone Specs',
    description:
      'Compare smartphone specifications side-by-side. Uses custom cell renderers, conditional styling, and manual grouping.',
    path: '/spec-comparison',
    component: SpecComparisonExample,
    pageTitle: 'Phone Specs',
    pageSubtitle:
      'Custom cell renderers, conditional highlighting, and category grouping with community features',
    image: '/images/3_spec_comparison.png',
  },
]

export { UsersDisplayExample } from './users/UsersDisplayExample'
export { InvoiceFormExample } from './invoice/InvoiceFormExample'
export { SpecComparisonExample } from './comparison/SpecComparisonExample'
