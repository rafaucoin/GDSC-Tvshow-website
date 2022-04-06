import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  colors: {
    brand: {
      100: 'black',
      900: '#1a202c',
    },
    primary: '#EA4335',
    secondary: '#FBBC04',
    starColor: '#DCA312',
    disabled: '#B43025',
  },
  components: {
    IconButton: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Button: {
      baseStyle: {},
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
    },
  },
});
export default theme;
