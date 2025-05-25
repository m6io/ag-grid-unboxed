import React from 'react'
import { themeQuartz } from 'ag-grid-community'

export const agGridThemeLight = themeQuartz.withParams(
  {
    // Base colors
    backgroundColor: 'var(--background)',
    foregroundColor: 'var(--foreground)',
    borderColor: 'var(--border)',
    accentColor: 'var(--primary)',
    textColor: 'var(--foreground)',
    subtleTextColor: 'var(--muted-foreground)',

    // Headers
    headerBackgroundColor: 'var(--card)',
    headerTextColor: 'var(--card-foreground)',
    headerColumnBorder: '1px solid var(--border)',
    headerRowBorder: '1px solid var(--border)',
    headerCellHoverBackgroundColor: 'var(--accent)',

    // Grid cells and rows
    cellTextColor: 'var(--foreground)',
    rowBorder: '1px solid var(--border)',
    rowHoverColor: 'var(--accent)',

    // Selection and focus
    selectedRowBackgroundColor: 'var(--primary-selected)',
    rangeSelectionBorderColor: 'var(--primary-selected)',
    rangeSelectionBackgroundColor: 'var(--primary-selected)',
    focusShadow: '0 0 0 2px var(--ring)',

    // Icons and buttons
    iconColor: 'var(--foreground)',
    iconButtonColor: 'var(--muted-foreground)',
    iconButtonHoverColor: 'var(--primary)',
    iconButtonActiveColor: 'var(--primary-selected)',
    iconButtonBackgroundColor: 'transparent',
    iconButtonHoverBackgroundColor: 'var(--accent)',
    iconButtonActiveBackgroundColor: 'var(--primary-selected)',

    // Menus and popups
    menuBackgroundColor: 'var(--card)',
    menuTextColor: 'var(--card-foreground)',
    menuBorder: '1px solid var(--border)',
    menuSeparatorColor: 'var(--border)',
    menuShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

    // Panels and toolbars
    chromeBackgroundColor: 'var(--card)',
    sideBarBackgroundColor: 'var(--card)',
    sidePanelBorder: '1px solid var(--border)',
    toolPanelSeparatorBorder: '1px solid var(--border)',

    // Other
    invalidColor: 'var(--destructive)',
    fontFamily: 'inherit',
    borderRadius: 'var(--radius)',
    wrapperBorderRadius: 'var(--radius)',

    browserColorScheme: 'light',
  },
  'light',
)

export const agGridThemeDark = themeQuartz.withParams(
  {
    // Base colors
    backgroundColor: 'var(--background)',
    foregroundColor: 'var(--foreground)',
    borderColor: 'var(--border)',
    accentColor: 'var(--primary)',
    textColor: 'var(--foreground)',
    subtleTextColor: 'var(--muted-foreground)',

    // Headers
    headerBackgroundColor: 'var(--card)',
    headerTextColor: 'var(--card-foreground)',
    headerColumnBorder: '1px solid var(--border)',
    headerRowBorder: '1px solid var(--border)',
    headerCellHoverBackgroundColor: 'var(--accent)',

    // Grid cells and rows
    cellTextColor: 'var(--foreground)',
    rowBorder: '1px solid var(--border)',
    rowHoverColor: 'var(--accent)',

    // Selection and focus
    selectedRowBackgroundColor: 'var(--primary-selected)',
    rangeSelectionBorderColor: 'var(--primary-selected)',
    rangeSelectionBackgroundColor: 'var(--primary-selected)',
    focusShadow: '0 0 0 2px var(--ring)',

    // Icons and buttons
    iconColor: 'var(--foreground)',
    iconButtonColor: 'var(--muted-foreground)',
    iconButtonHoverColor: 'var(--primary)',
    iconButtonActiveColor: 'var(--primary)',
    iconButtonBackgroundColor: 'transparent',
    iconButtonHoverBackgroundColor: 'var(--accent)',
    iconButtonActiveBackgroundColor: 'var(--primary-selected)',

    // Menus and popups
    menuBackgroundColor: 'var(--card)',
    menuTextColor: 'var(--card-foreground)',
    menuBorder: '1px solid var(--border)',
    menuSeparatorColor: 'var(--border)',
    menuShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

    // Panels and toolbars
    chromeBackgroundColor: 'var(--card)',
    sideBarBackgroundColor: 'var(--card)',
    sidePanelBorder: '1px solid var(--border)',
    toolPanelSeparatorBorder: '1px solid var(--border)',

    // Other
    invalidColor: 'var(--destructive)',
    fontFamily: 'inherit',
    borderRadius: 'var(--radius)',
    wrapperBorderRadius: 'var(--radius)',

    browserColorScheme: 'dark',
  },
  'dark',
)

export function useAgGridTheme() {
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  )

  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) =>
      setMode(e.matches ? 'dark' : 'light')
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  React.useEffect(() => {
    document.body.dataset.agThemeMode = mode
  }, [mode])

  return mode === 'dark' ? agGridThemeDark : agGridThemeLight
}
