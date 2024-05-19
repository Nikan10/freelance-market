import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        light: '#9cffe4',
        main: '#01ca95',
        dark: "#008b66"
      },
      secondary: {
        light: '#ffb7a9',
        main: '#ff7961',
        dark: '#b1341e'
      },
      black: {
        light: '#888888',
        main: '#505050',
        dark: '#181818'
      },
      light: {
        light: '#f8f8f8',
        main: '#eeeeee',
        dark: '#e2e2e2'
      }
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 460,
        sm: 640,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  })

export default theme;

