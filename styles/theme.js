import { amber, deepPurple } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
