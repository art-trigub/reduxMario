import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu'
import FormLabel from '@material-ui/core/FormLabel'
import Box from '@material-ui/core/Box'
import useTheme from '@material-ui/core/styles/useTheme'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { removeSnackbar } from '../../../store/actions/notifications';


function Notification({ notifications, removeSnackbar }) {

	const { t } = useTranslation()

	const theme = useTheme()

	const [anchorEl, setAnchorEl] = useState(null);

	const openNotificationsBox = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton style={{ color: theme.palette.common.white }} onClick={openNotificationsBox}>
				<Badge badgeContent={notifications.length} color='secondary'>
					<NotificationsIcon />
				</Badge>
			</IconButton>
			<Menu
				style={{ maxHeight: '400px' }}
				id="notification"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			// transformOrigin={{ vertical: 'bottom', horizontal: `${theme.direction === 'rtl' ? 'left' : 'right'}` }}
			>
				<Box p={1} >
					<FormLabel component="legend">{t('notifications')}</FormLabel>
					<List>
						{
							notifications
								?
								notifications.map(item => (
									<ListItem key={item.key} style={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography>{item.message}</Typography>
										<Button style={{ marginLeft: '15px' }} onClick={() => removeSnackbar(item.key)}>close</Button>

									</ListItem>
								))
								:
								<ListItem>no messages</ListItem>
						}
					</List>
				</Box>
			</Menu>
		</>
	)
}

function mapStateToProps({ notifications }) {

	return {
		notifications: notifications.notifications,
	};
}

const mapDispatchToProps = {
	removeSnackbar: removeSnackbar
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
