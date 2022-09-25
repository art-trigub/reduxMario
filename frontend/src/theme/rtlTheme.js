import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
	direction: 'rtl',
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#19857b',
		},
		background: {
			default: '#666',
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

theme.palette.saveBtn = theme.palette.augmentColor({
	light: theme.palette.success.light,
	main: theme.palette.success.main,
	dark: theme.palette.success.dark,
	contrastText: theme.palette.success.contrastText
});

theme.palette.editBtn = theme.palette.augmentColor({
	light: theme.palette.info.light,
	main: theme.palette.info.main,
	dark: theme.palette.info.dark,
	contrastText: theme.palette.info.contrastText
});

theme.palette.addBtn = theme.palette.augmentColor({
	light: theme.palette.success.light,
	main: theme.palette.success.main,
	dark: theme.palette.success.dark,
	contrastText: theme.palette.success.contrastText
});

theme.palette.cancelBtn = theme.palette.augmentColor({
	light: theme.palette.warning.light,
	main: theme.palette.warning.main,
	dark: theme.palette.warning.dark,
	contrastText: theme.palette.warning.contrastText
});

theme.palette.nextBtn = theme.palette.augmentColor({
	light: theme.palette.info.light,
	main: theme.palette.info.main,
	dark: theme.palette.info.dark,
	contrastText: theme.palette.info.contrastText
});

theme.palette.deleteBtn = theme.palette.augmentColor({
	light: theme.palette.error.light,
	main: theme.palette.error.main,
	dark: theme.palette.error.dark,
	contrastText: theme.palette.error.contrastText
});



export default theme;
