import React from "react";
import Paper from "@material-ui/core/Paper";
import Notifier from "../../CommonsComponents/Notifier/Notifier";
import Routes from "../../Routes/Routes";

function Content() {
	return (
		<Paper style={{ backgroundColor: "#f5f5f5" }} square elevation={0}>
			<div className="dashboardContent">
				<Notifier />

				<Routes />
			</div>
		</Paper>
	);
}

export default Content;
