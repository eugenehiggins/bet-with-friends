import { createTheme } from '@mui/material/styles';
import {amber, lightBlue, } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        secondary: {
            main: lightBlue[500],
        },
    },
});

export default theme;