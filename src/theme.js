import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
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
        // _focus: { boxShadow: 'none' },
        // backgroundColor: 'black', // Normally, it is "semibold"
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // _focus: { boxShadow: 'none', color: 'white' },
        // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },

      // 3. We can add a new visual variant
    },
  },
});
export default theme;
