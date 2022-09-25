import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { removeSnackbar, removeSnackBarAll } from '../../../store/actions/notifications';
import { useState } from 'react';

// let displayed = [];

const Notifier = ({ notifications, removeSnackbar, removeSnackBarAll }) => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const [displayed, setDisplayed] = useState(notifications)

	const storeDisplayed = (id) => {
		setDisplayed([...displayed, id]);
	};

	const removeDisplayed = (id) => {
		setDisplayed([...displayed.filter(key => id !== key)]);
	};

	// const storeDisplayed = (id) => {
	//     displayed = [...displayed, id];
	// };

	// const removeDisplayed = (id) => {
	//     displayed = [...displayed.filter(key => id !== key)];
	// };

	useEffect(() => {
		notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
			if (dismissed) {
				// dismiss snackbar using notistack
				closeSnackbar(key);
				return;
			}

			// do nothing if snackbar is already displayed
			if (displayed.includes(key)) return;

			// display snackbar using notistack
			enqueueSnackbar(message, {


				key,
				...options,
				onClose: (event, reason, myKey) => {
					if (options.onClose) {
						options.onClose(event, reason, myKey);
					}
				},
				onExited: (event, myKey) => {
					// remove this snackbar from redux store
					// dispatch(removeSnackbar(myKey));
					removeDisplayed(myKey);
				},
			});

			// keep track of snackbars that we've displayed
			storeDisplayed(key);
		});
	}, [notifications, closeSnackbar, enqueueSnackbar]);

	return null;
};

function mapStateToProps({ notifications }) {

	return {
		notifications: notifications.notifications,
	};
}

const mapDispatchToProps = {
	removeSnackbar: removeSnackbar,
	removeSnackBarAll: removeSnackBarAll
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier)