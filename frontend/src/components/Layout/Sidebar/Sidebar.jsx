import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListSubheader from "@material-ui/core/ListSubheader";
import MinMenu from "../Menus/MinMenu/MinMenu";
import FavMaxMenu from "../Menus/FavMaxMenu/FavMaxMenu";
import MaxMenu from "../Menus/MaxMenu/MaxMenu";
import FavMinMenu from "../Menus/FavMinMenu/FavMinMenu";
import { Typography } from "@material-ui/core";

function Sidemenu({ drawerOpen, user }) {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Paper
			variant="outlined"
			square
			className="dashboardSidemenu"
			elevation={1}
		>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: drawerOpen,
					[classes.drawerClose]: !drawerOpen,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: drawerOpen,
						[classes.drawerClose]: !drawerOpen,
					}),
				}}
			>
				{drawerOpen ? (
					<Box
						style={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							height: 75,
						}}
					>
						<Link
							style={{
								gridArea: "img",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							to={`/users/view/${user.id}`}
						>
							<img
								style={{
									width: 50,
									height: 50,
									margin: 10,
									borderRadius: 10,
								}}
								src={"http://localhost:8082" + user.photo}
								alt="avatar"
							/>
						</Link>
						<div style={{ justifyContent: "space-around" }}>
							<Typography
								style={{
									alignItems: "center",
								}}
							>
								{user.firstName}
							</Typography>
							<Typography
								style={{
									alignItems: "center",
								}}
							>
								{user.lastName}
							</Typography>
						</div>
					</Box>
				) : (
					<Box display="flex" style={{ height: 75 }}>
						<Link to={`/users/view/${user.id}`}>
							<img
								style={{
									width: 50,
									height: 50,
									margin: 10,
									borderRadius: 10,
								}}
								src={"http://localhost:8082" + user.photo}
								alt="avatar"
							/>
						</Link>
					</Box>
				)}

				<Divider />
				{drawerOpen ? (
					<>
						<List>
							<MaxMenu></MaxMenu>
						</List>

						<Divider />

						<List
							subheader={
								<ListSubheader>{t("favorites")}</ListSubheader>
							}
						>
							<FavMaxMenu></FavMaxMenu>
						</List>
					</>
				) : (
					<>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<List>
								<MinMenu></MinMenu>
							</List>
						</div>
						<Divider />

						<List>
							<FavMinMenu></FavMinMenu>
						</List>
					</>
				)}
			</Drawer>
		</Paper>
	);
}

function mapStateToProps({ auth }) {
	return {
		user: auth.userData.data,
	};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));
