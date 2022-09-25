import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Loader from "../../CommonsComponents/Loader/Loader";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IBoxHeader from "../../CommonsComponents/Iboxes/IBoxHeader";
import SaveButton from "../../CommonsComponents/SaveButton/SaveButton";
import CancelButton from "../../CommonsComponents/CancelButton/CancelButton";
import AddButton from "../../CommonsComponents/AddButton/AddButton";
import IModal from "../../Layout/IModal/IModal";
import ImgCrop from "../../Layout/ImgCrop/ImgCrop";
import fileService from "../../../services/fileService";
import { saveUser, getThisUser } from "../../../store/actions/users";
import { getDepartments } from "../../../store/actions/departments";
import { changeListBreadCrumbs } from "../../../store/actions/breadCrumbs";

function UserForm({
	saveUser,
	user,
	userId,
	getThisUser,
	changeListBreadCrumbs,
	isLoading,
	getDepartments,
	departments,
	roles,
	lang,
}) {
	const { t } = useTranslation();
	const [item, setItem] = useState(false);
	const [photoImg, setPhotoImg] = useState(null);
	const [imgFile, setImgFile] = useState(null);
	const history = useHistory();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (userId === "new") {
			setItem({
				firstName: "",
				lastName: "",
				email: "",
				photo: "",
				login: "",
				phoneNumber: "",
				role: {
					position: "",
					departmentId: "",
					id: "",
					department: "",
				},
				dateOfBirth: null,
				dateStart: null,
				dateFired: null,
				password: "",
				phones: [],
				permissions: { deleteUser: "", addUser: "" },
			});
			document.title = `${t("newUser")}`;
			changeListBreadCrumbs([`${t("users")}`, `${t("newUser")}`]);
		} else {
			if (user == null) {
				getThisUser(userId);
			} else if (user) {
				setItem(user);
				setPhotoImg(user.photo);
				document.title = `${user.firstName} ${user.lastName}`;
				changeListBreadCrumbs([`${t("users")}`, `${user.firstName} ${user.lastName}`]);
			}
		}
		getDepartments();
	}, [user]);

	useEffect(() => {
		if (item) {
			document.title = `${item.firstName} ${item.lastName}`;
			changeListBreadCrumbs([`${t("users")}`, `${item.firstName} ${item.lastName}`]);
		}
	}, [t]);

	useEffect(() => {
		imgFile && uploadPhoto();
	}, [imgFile]);

	useEffect(() => {
		console.log(item);
	}, [item]);

	const localeMap = {
		en: enLocale,
		ru: ruLocale,
	};

	function onChange({ target }) {
		setItem({
			...item,
			[target.name]: target.value,
		});
	}

	function onChangeDepartment({ target }) {
		setItem({
			...item,
			role: {
				...item.role,
				[target.name]: Number(target.value),
				id: "",
				position: "",
			},
		});
	}

	function onChangeRoles({ target }) {
		setItem({
			...item,
			role: {
				...item.role,
				[target.name]: Number(target.value),
			},
		});
	}

	function updatePhotoState(url) {
		setItem({
			...item,
			photo: url,
		});
	}

	async function uploadPhoto() {
		const { url } = await fileService.upload(imgFile, "getPhoto");
		setItem({
			...item,
			photo: url,
		});
		updatePhotoState(url);
	}

	const handleDobChange = (date) => {
		setItem({
			...item,
			dateOfBirth: date,
		});
	};

	const handleEmploymentDateChange = (date) => {
		setItem({
			...item,
			dateStart: date,
		});
	};

	const handleDismissalDateChange = (date) => {
		setItem({
			...item,
			dateFired: date,
		});
	};

	function addPhoneGroup(e) {
		e.preventDefault();
		let newId;
		if (item.phones.length > 0) {
			newId = item.phones.reduce(
				(max, character) => (character.id > max ? character.id : max),
				item.phones[0].id
			);
		} else {
			newId = 1;
		}

		setItem({
			...item,
			phones: [
				...item.phones,
				{
					id: Number(newId) + 1,
					phoneInternal: "",
					phoneExternal: "",
				},
			],
		});
	}

	function removePhoneGroup(e, id) {
		e.preventDefault();
		setItem({
			...item,
			phones: item.phones.filter((phone) => phone.id !== id),
		});
	}

	function onPhoneGroupChange({ target }, id) {
		const current = item.phones.find((elem) => elem.id === id);

		const edited = {
			...current,
			[target.name]: target.value,
		};

		const editedPhones = item.phones.map((elem) => (elem.id === edited.id ? edited : elem));

		setItem({
			...item,
			phones: editedPhones,
		});
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{!item || isLoading ? (
				<Loader />
			) : (
					<Paper elevation={3}>
						<IModal
							open={open}
							setOpen={setOpen}
							body={
								<ImgCrop
									setPhotoImg={setPhotoImg}
									handleClose={handleClose}
									setImgFile={setImgFile}
									setItem={setItem}
									item={item}
								/>
							}
						/>
						<Formik
							enableReinitialize={true}
							initialValues={item}
							onSubmit={async (values, { setSubmitting }) => {
								setSubmitting(true);

								try {
									saveUser(values);
									if (userId === "new") {
										history.push(`/users`);
									} else {
										history.push(`/users/view/${item.id}`);
									}
								} catch (error) {
									console.log(error);
									setSubmitting(false);
								}
							}}
							validate={(values) => {
								const errors = {};

								if (!values.firstName) {
									errors.firstName = `${t("requiredField")}`;
								} else if (!/^([а-яё]+|[a-z]+)$/i.test(values.firstName)) {
									errors.firstName = `${t("invalidFirstName")}`;
								}

								if (!values.lastName) {
									errors.lastName = `${t("requiredField")}`;
								} else if (!/^([а-яё]+|[a-z]+)$/i.test(values.lastName)) {
									errors.lastName = `${t("invalidLastName")}`;
								}

								if (!values.login) {
									errors.login = `${t("requiredField")}`;
								}

								if (values.password == "") {
									errors.password = `${t("requiredField")}`;
								}

								if (!values.dateOfBirth) {
									errors.dateOfBirth = `${t("requiredField")}`;
								}

								if (!values.phoneNumber) {
									errors.phoneNumber = `${t("requiredField")}`;
								} else if (!/^[0-9]*$/.test(values.phoneNumber)) {
									errors.phoneNumber = `${t("invalidPhoneNumber")}`;
								}

								if (!values.email) {
									errors.email = `${t("requiredField")}`;
								} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
									errors.email = `${t("invalidEmail")}`;
								}

								return errors;
							}}
						>
							{(props) => {
								return (
									<Form onSubmit={props.handleSubmit}>
										<IBoxHeader p={1}>
											<Link
												className="textDecorationNone"
												to={userId == "new" ? `/users/view` : `/users/view/${props.values.id}`}
											>
												<CancelButton />
											</Link>
											<SaveButton type="submit" disabled={props.isSubmitting} />
										</IBoxHeader>

										<Divider />

										<Box p={2}>
											<Grid container justify="space-between">
												<StyledGrid container spacing={2} className="personalDataItem">
													<Grid item className="flexCenterColumnCenter">
														<img
															style={{
																width: 100,
																height: 100,
																borderRadius: 10,
															}}
															src={
																props.values.photo
																	? "http://localhost:8082" + props.values.photo
																	: photoImg
															}
															alt="avatar"
														/>

														<Box p={1}>
															<Button
																onClick={handleOpen}
																color="secondary"
																variant="contained"
																startIcon={<CameraAltIcon />}
																component="span"
															>
																{t("change")}
															</Button>
														</Box>
													</Grid>

													<Grid item className="flexColumnCenter">
														<Box
															p={1}
															style={{
																display: "flex",
															}}
														>
															<TextField
																type="text"
																onChange={onChange}
																label={t("name")}
																error={props.errors.firstName && props.touched.firstName}
																onBlur={props.handleBlur}
																helperText={
																	props.errors.firstName &&
																	props.touched.firstName &&
																	props.errors.firstName
																}
																name="firstName"
																value={props.values.firstName}
															></TextField>
															<TextField
																type="text"
																onChange={onChange}
																label={t("surname")}
																error={props.errors.lastName && props.touched.lastName}
																onBlur={props.handleBlur}
																helperText={
																	props.errors.lastName &&
																	props.touched.lastName &&
																	props.errors.lastName
																}
																name="lastName"
																value={props.values.lastName}
															></TextField>
														</Box>
														<Box p={1}>
															<MuiPickersUtilsProvider utils={DateFnsUtils}>
																<KeyboardDatePicker
																	format="dd.MM.yyyy"
																	value={
																		props.values.dateOfBirth
																			? props.values.dateOfBirth
																			: null
																	}
																	name="dateOfBirth"
																	label={t("dateOfBirth")}
																	error={
																		props.errors.dateOfBirth &&
																		props.touched.dateOfBirth
																	}
																	onBlur={props.handleBlur}
																	helperText={
																		props.errors.dateOfBirth &&
																		props.touched.dateOfBirth &&
																		props.errors.dateOfBirth
																	}
																	onChange={handleDobChange}
																	className="fullWidth"
																/>
															</MuiPickersUtilsProvider>
														</Box>
													</Grid>

													<Grid item className="flexColumnCenter">
														<Box p={1}>
															<TextField
																type="text"
																className="fullWidth"
																onChange={onChange}
																label={t("personalNumber")}
																name="phoneNumber"
																error={
																	props.errors.phoneNumber && props.touched.phoneNumber
																}
																onBlur={props.handleBlur}
																helperText={
																	props.errors.phoneNumber &&
																	props.touched.phoneNumber &&
																	props.errors.phoneNumber
																}
																value={props.values.phoneNumber}
															></TextField>
														</Box>
														<Box p={1}>
															<TextField
																type="email"
																className="fullWidth"
																onChange={onChange}
																label={t("email")}
																name="email"
																error={props.errors.email && props.touched.email}
																onBlur={props.handleBlur}
																helperText={
																	props.errors.email &&
																	props.touched.email &&
																	props.errors.email
																}
																value={props.values.email}
															></TextField>
														</Box>
													</Grid>

													<Grid item className="flexColumnCenter">
														<Box p={1}>
															<FormControl className="fullWidth">
																<InputLabel
																	shrink={props.values.role.departmentId ? true : false}
																	id="departmentLabel"
																>
																	{t("department")}
																</InputLabel>
																<Select
																	labelId="departmentLabel"
																	value={props.values.role.departmentId}
																	name="departmentId"
																	native
																	onChange={onChangeDepartment}
																>
																	<option value=""></option>
																	{departments.map((dep) => (
																		<option key={dep.id} value={dep.id}>
																			{dep.name}
																		</option>
																	))}
																</Select>
															</FormControl>
														</Box>
														<Box p={1}>
															<FormControl className="fullWidth">
																<InputLabel
																	shrink={props.values.role.id ? true : false}
																	id="positionLabel"
																>
																	{t("position")}
																</InputLabel>
																<Select
																	labelId="positionLabel"
																	value={props.values.role.id}
																	name="id"
																	native
																	onChange={onChangeRoles}
																>
																	<option value=""></option>
																	{roles.map((role) => {
																		if (
																			role.departmentId ==
																			props.values.role.departmentId
																		) {
																			return (
																				<option key={role.id} value={role.id}>
																					{role.name}
																				</option>
																			);
																		}
																	})}
																</Select>
															</FormControl>
														</Box>
													</Grid>
												</StyledGrid>
											</Grid>
										</Box>
										<Divider />
										<Box p={2}>
											<AddButton
												onClick={addPhoneGroup}
												text={["add", " ", "extensionNumber", ",", "externalNumber"]}
											/>
										</Box>
										{props.values.phones && (
											<>
												<Box p={2}>
													{props.values.phones.map((phone) => {
														return (
															<StyledGrid
																style={{
																	alignItems: "center",
																}}
																key={phone.id}
																container
																spacing={2}
															>
																<Grid item>
																	<TextField
																		type="text"
																		className="fullWidth"
																		onChange={(e) => onPhoneGroupChange(e, phone.id)}
																		label={`${t("extensionNumber")} - ${phone.id}`}
																		name="phoneInternal"
																		value={phone.phoneInternal}
																	></TextField>
																</Grid>
																<Grid item>
																	<TextField
																		type="text"
																		className="fullWidth"
																		onChange={(e) => onPhoneGroupChange(e, phone.id)}
																		label={`${t("externalNumber")} - ${phone.id}`}
																		name="phoneExternal"
																		value={phone.phoneExternal}
																	></TextField>
																</Grid>
																<Grid item>
																	<IconButton
																		onClick={(e) => removePhoneGroup(e, phone.id)}
																	>
																		<DeleteForeverIcon />
																	</IconButton>
																</Grid>
															</StyledGrid>
														);
													})}
												</Box>
												<Divider />
											</>
										)}

										<Divider />

										<Box p={2}>
											<StyledGrid container spacing={2}>
												<Grid item>
													<MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[lang]}>
														<KeyboardDatePicker
															format="dd.MM.yyyy"
															value={props.values.dateStart ? props.values.dateStart : null}
															name="dateStart"
															label={t("employmentDate")}
															className="fullWidth"
															onChange={handleEmploymentDateChange}
														/>
													</MuiPickersUtilsProvider>
												</Grid>
												<Grid item>
													<MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[lang]}>
														<KeyboardDatePicker
															format="dd.MM.yyyy"
															value={props.values.dateFired ? props.values.dateFired : null}
															name="dateFired"
															label={t("dismissalDate")}
															className="fullWidth"
															onChange={handleDismissalDateChange}
														/>
													</MuiPickersUtilsProvider>
												</Grid>
												<Grid item>
													<TextField
														type="text"
														className="fullWidth"
														onChange={onChange}
														label={t("login")}
														name="login"
														value={props.values.login}
														error={props.errors.login && props.touched.login}
														onBlur={props.handleBlur}
														helperText={
															props.errors.login && props.touched.login && props.errors.login
														}
													></TextField>
												</Grid>
												<Grid item>
													<TextField
														type="password"
														className="fullWidth"
														onChange={onChange}
														label={t("password")}
														name="password"
														value={props.values.password}
														error={props.errors.password && props.touched.password}
														onBlur={props.handleBlur}
														helperText={
															props.errors.password &&
															props.touched.password &&
															props.errors.password
														}
													></TextField>
												</Grid>
											</StyledGrid>
										</Box>
									</Form>
								);
							}}
						</Formik>
					</Paper>
				)}
		</>
	);
}

function mapStateToProps({ users, departments, userSettings }, { id }) {
	return {
		isLoading: users.isLoading,
		userId: id,
		user:
			id !== "new"
				? users.list.find((item) => item.id == id)
					? users.list.find((item) => item.id == id)
					: null
				: null,
		departments: departments.departmentsList,
		roles: departments.rolesList,
		lang: userSettings.lang,
	};
}

const mapDispatchToprops = {
	getThisUser: getThisUser,
	saveUser: saveUser,
	changeListBreadCrumbs: changeListBreadCrumbs,
	getDepartments: getDepartments,
};

export default connect(mapStateToProps, mapDispatchToprops)(UserForm);

const StyledGrid = withStyles((theme) => ({
	root: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr",
		gridGap: "20px",
	},
}))(Grid);
