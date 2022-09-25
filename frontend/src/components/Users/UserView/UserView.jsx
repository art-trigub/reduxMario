import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./UserView.css";
import format from "date-fns/format";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IBoxHeader from "../../CommonsComponents/Iboxes/IBoxHeader";
import EditButton from "../../CommonsComponents/EditButton/EditButton";
import Loader from "../../CommonsComponents/Loader/Loader";
import { getThisUser } from "../../../store/actions/users";
import { changeListBreadCrumbs } from "../../../store/actions/breadCrumbs";

function UserView({ id, user, getThisUser, changeListBreadCrumbs, isLoading }) {
	const { t } = useTranslation();

	const [item, setItem] = useState(user);

	useEffect(() => {
		if (user == null) {
			getThisUser(id);
		} else if (user) {
			setItem(user);
			document.title = `${user.firstName} ${user.lastName}`;
			changeListBreadCrumbs([`${t("users")}`, `${user.firstName} ${user.lastName}`]);
		}
	}, [user]);

	console.log(item);

	return (
		<>
			{!item || isLoading ? (
				<Loader />
			) : (
					<Paper elevation={3}>
						<IBoxHeader>
							<Link style={{ textDecoration: "none" }} to={`/users/update/${item.id}`}>
								<EditButton />
							</Link>
						</IBoxHeader>

						<Divider />

						<Box p={2}>
							<Grid container justify="space-between">
								<StyledGrid container spacing={2} className="personalDataItem">
									<Grid
										item
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<img
											style={{
												width: 100,
												height: 100,
												borderRadius: 10,
											}}
											src={"http://localhost:8082" + item.photo}
											alt="avatar"
										/>
									</Grid>
									<StyledGridItem item>
										<Box p={1}>
											<InputLabel shrink>{t("name")}</InputLabel>
											<Typography>
												{item.firstName} {item.lastName}
											</Typography>
										</Box>
										<Box p={1}>
											<InputLabel shrink>{t("dateOfBirth")}</InputLabel>
											<Typography>{format(new Date(item.dateOfBirth), "dd.MM.yyyy")}</Typography>
										</Box>
									</StyledGridItem>

									<StyledGridItem item>
										<Box p={1}>
											<InputLabel shrink>{t("personalNumber")}</InputLabel>
											<Typography>{item.phoneNumber}</Typography>
										</Box>
										<Box p={1}>
											<InputLabel shrink>{t("email")}</InputLabel>
											<Typography>{item.email}</Typography>
										</Box>
									</StyledGridItem>

									<StyledGridItem item>
										<Box p={1}>
											<InputLabel shrink={item.role.department ? true : false}>
												{t("department")}
											</InputLabel>
											<Typography>{item.role.department}</Typography>
										</Box>
										<Box p={1}>
											<InputLabel shrink={item.role.position ? true : false}>
												{t("position")}
											</InputLabel>
											<Typography>{item.role.position}</Typography>
										</Box>
									</StyledGridItem>
								</StyledGrid>
							</Grid>
						</Box>

						<Divider />

						{item.phones && (
							<>
								<Box p={2}>
									{item.phones.map((phone) => {
										return (
											<StyledGrid key={phone.id} container spacing={2}>
												<Grid item>
													<InputLabel shrink={phone.phoneInternal ? true : false}>{`${t(
														"extensionNumber"
													)} - ${phone.id}`}</InputLabel>
													<span>{phone.phoneInternal}</span>
												</Grid>
												<Grid item>
													<InputLabel shrink={phone.phoneExternal ? true : false}>{`${t(
														"externalNumber"
													)} - ${phone.id}`}</InputLabel>
													<span>{phone.phoneExternal}</span>
												</Grid>
											</StyledGrid>
										);
									})}
								</Box>
								<Divider />
							</>
						)}

						<Box p={2}>
							<StyledGrid container spacing={2}>
								<Grid item>
									<InputLabel shrink>{t("employmentDate")}</InputLabel>
									{format(new Date(item.dateStart), "dd.MM.yyyy")}
								</Grid>
								<Grid item>
									<InputLabel shrink>{t("dismissalDate")}</InputLabel>
									<span>{item.dateFired ? format(new Date(item.dateFired), "dd.MM.yyyy") : "-"}</span>
								</Grid>
								<Grid item>
									<InputLabel shrink>{t("login")}</InputLabel>
									<span>{item.login}</span>
								</Grid>
							</StyledGrid>
						</Box>
					</Paper>
				)}
		</>
	);
}

function mapStateToProps({ users }, { id }) {
	return {
		isLoading: users.isLoading,
		user: users.list.find((item) => item.id == id),
		id: id,
		users: users.list,
	};
}

const mapDispatchToprops = {
	getThisUser: getThisUser,
	changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToprops)(UserView);

const StyledGrid = withStyles((theme) => ({
	root: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr",
		gridGap: "20px",
	},
}))(Grid);

const StyledGridItem = withStyles((theme) => ({
	root: {
		display: "grid",
		alignItems: "center",
	},
}))(Grid);
