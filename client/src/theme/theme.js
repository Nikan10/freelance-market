import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {
        light: '#9cffe4',
        main: '#06D6A0',
        dark: "#008b66"
      },
      secondary: {
        light: '#ffb7a9',
        main: '#ff7961',
        dark: '#b1341e'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 340,
        md: 700,
        lg: 1000,
        xl: 1536
      }
    }
  })


export default theme;

// const theme = { 
//   palette: {
//     type: 'light', // Default theme mode (light)
//     primary: {
//       light: '#9cffe4',
//       main: '#06D6A0',
//       dark: '#008b66',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f50057',
//       dark: '#ba000d',
//       contrastText: '#fff',
//     },
//     background: {
//       light: '#f5f5f5',
//       main: '#eeeeee',
//       dark: '#424242',
//       contrastText: '#fff',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//     fontSize: '16px',
//     lineHeight: '1.5',
//     h1: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       lineHeight: '1.2',
//     },
//     h2: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       lineHeight: '1.3',
//     },
//     h3: {
//       fontSize: '1.75rem',
//       fontWeight: 'bold',
//       lineHeight: '1.4',
//     },
//     h4: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       lineHeight: '1.5',
//     },
//     h5: {
//       fontSize: '1.25rem',
//       fontWeight: 'bold',
//       lineHeight: '1.6',
//     },
//     h6: {
//       fontSize: '1rem',
//       fontWeight: 'bold',
//       lineHeight: '1.7',
//     },
//   },
//   spacing: {
//     xs: '4px',
//     sm: '8px',
//     md: '16px',
//     lg: '24px',
//     xl: '32px',
//   },
//   breakpoints: {
//     xs: '0px',
//     sm: '576px',
//     md: '768px',
//     lg: '992px',
//     xl: '1200px',
//   },
//   borderRadius: '4px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// };
