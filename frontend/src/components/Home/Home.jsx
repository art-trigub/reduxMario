import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { connect } from "react-redux";

import { format, formatISO } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import SaveIcon from "@material-ui/icons/Save";
import { changeListBreadCrumbs } from "../../store/actions/breadCrumbs";

function Home({ changeListBreadCrumbs, user }) {
	const { t } = useTranslation();

	const theme = useTheme();

	useEffect(() => {
		changeListBreadCrumbs([]);
		document.title = t("home");
	}, [t]);

	const userName = user.data.firstName;
	const userDob = user.data.dateOfBirth;
	const myTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const myDate = utcToZonedTime(userDob, myTimeZone);

	const utcDate = zonedTimeToUtc(userDob, myTimeZone);
	const dataToSend = utcDate.toISOString();
	console.log(utcDate.toISOString());

	return (
		<div>
			<Typography variant="h4">Good day, {userName}</Typography>

			<Typography variant="h5">what i get</Typography>
			<Typography variant="h3">{userDob}</Typography>

			<Typography variant="h5">format</Typography>
			<Typography variant="h3">{format(new Date(userDob), "dd.MM.yyyy - HH:mm")}</Typography>

			<Typography variant="h5">to time my zone</Typography>
			<Typography variant="h3">{format(new Date(myDate), "dd.MM.yyyy - HH:mm")}</Typography>

			<Typography variant="h5">to zero zone</Typography>
			<Typography variant="h3">{format(new Date(utcDate), "dd.MM.yyyy - HH:mm")}</Typography>

			<Typography variant="h5">data to send</Typography>
			<Typography variant="h3">{dataToSend}</Typography>

			<Typography variant="h5">Its home page</Typography>
			<Button color="primary" variant="contained">
				default theme primary
			</Button>
			<Button color="secondary" variant="contained">
				default theme secondary
			</Button>
			<Button startIcon={<SaveIcon />} style={theme.test} variant="contained">
				custom theme btn with theme object
			</Button>
			<p>lorem</p>
			<Checkbox style={theme.status} defaultChecked />
		</div>
	);
}

function mapStateToProps({ auth }) {
	return {
		user: auth.userData,
	};
}

const mapDispatchToProps = {
	changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
