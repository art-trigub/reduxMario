import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {

        type: 'dark',

        primary: {
            main: '#6cd6',
        },
        secondary: {
            main: '#19857b',
        },
        neutral: {

        },
        background: {
            default: '#e6e6e6',
        },
    },
    test: {
        backgroundColor: '#312341',
        color: '#fff'
    },
    status: {
        color: '#e8a70e'
    }
});

theme.palette.neutral = theme.palette.augmentColor({
    main: "#9ec45c"
});


export default theme;
