import React from 'react'
import '../Layout.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import useTheme from '@material-ui/core/styles/useTheme'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import LangSelector from '../LangSelector/LangSelector';
import Notification from '../Notification/Notification'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';

import {
	enqueueSnackbar,
	closeSnackbar,
	removeSnackbar,
	removeSnackBarAll
} from '../../../store/actions/notifications';

import {
	userLogoutLocal
} from '../../../store/actions/auth'

function Header({
	handleOpenDrawer,
	drawerOpen,
	enqueueSnackbar,
	closeSnackbar,
	removeSnackbar,
	removeSnackBarAll,
	userLogoutLocal
}) {

	const { t } = useTranslation()

	const theme = useTheme();

	const handleClick = () => {
		enqueueSnackbar({
			message: 'Its message data',
			options: {
				key: new Date().getTime() + Math.random(),
				variant: 'info',
				action: key => (
					<>
						<Button onClick={() => closeSnackbar(key)} >dissmis</Button>
						<Button onClick={() => removeSnackBarAll(key)}>close</Button>
						<Link target="_blank" to='/'>
							<Button>to home</Button>
						</Link>
					</>
				),
			},
		});
	};

	const handleDimissAll = () => {
		closeSnackbar();
	};

	return (
		<AppBar position="static" color='primary' className='dashboardHeader'>
			<Box p={1} className='dashboard-header__wrap'>

				<IconButton onClick={handleOpenDrawer} style={{ color: theme.palette.common.white }}>
					{
						theme.direction === 'ltr' ?
							drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />
							: drawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />
					}
				</IconButton>

				<Breadcrumbs></Breadcrumbs>

				<IconButton color='secondary' onClick={handleClick}>
					<SpeakerNotesIcon />
				</IconButton>
				<Notification></Notification>

				<IconButton style={{ color: theme.palette.common.white }} onClick={handleDimissAll}>
					<NotificationsOffIcon />
				</IconButton>

				<LangSelector colorValue='#fff' />

				<Tooltip title={t('exit')} arrow>
					<IconButton onClick={() => userLogoutLocal()} style={{ color: theme.palette.common.white }}>
						<ExitToAppIcon />
					</IconButton>
				</Tooltip>

			</Box>
		</AppBar>
	)
}

function mapStateToProps() {
	return {

	};
}

const mapDispatchToProps = {
	enqueueSnackbar: enqueueSnackbar,
	closeSnackbar: closeSnackbar,
	removeSnackbar: removeSnackbar,
	removeSnackBarAll: removeSnackBarAll,
	userLogoutLocal: userLogoutLocal
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)