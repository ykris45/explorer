import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export const darkTheme: DefaultTheme = {
  name: 'dark',
  body: '#212126',

  textPrimary: 'rgba(255, 255, 255, 0.8)',
  textSecondary: 'rgba(255, 255, 255, 0.35)',
  textAccent: '#FFD036',

  link: '#53A9F5',
  linkHighlight: '#0E82E7',

  bgPrimary: '#212126',
  bgSecondary: '#18191C',
  bgHighlight: 'rgba(0, 0, 0, 0.1)',
  bgHover: 'rgba(0, 0, 0, 0.05)',

  borderPrimary: '#34353A',
  borderSecondary: '#27282d',
  borderHighlight: '#585962',

  tooltip: 'black'
}

export const lightTheme: DefaultTheme = {
  name: 'light',
  body: 'white',

  textPrimary: 'rgba(15, 15, 15, 0.95)',
  textSecondary: 'rgba(15, 15, 15, 0.50)',
  textAccent: '#FF7B03',

  link: '#0E82E7',
  linkHighlight: '#53A9F5',

  bgPrimary: 'white',
  bgSecondary: '#f7f7f7',
  bgHighlight: 'rgba(0, 0, 0, 0.012)',
  bgHover: 'rgba(0, 0, 0, 0.01)',

  borderPrimary: '#e6e6e6',
  borderSecondary: '#f2f2f2',
  borderHighlight: '#D1D1D4',

  tooltip: 'black'
}
