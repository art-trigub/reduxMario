import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { getRequestUsers } from "../../../../store/actions/users";
import { getDepartments } from "../../../../store/actions/departments";
import { changeListBreadCrumbs } from "../../../../store/actions/breadCrumbs";
import IBoxHeader from "../../../CommonsComponents/Iboxes/IBoxHeader";
import SaveButton from "../../../CommonsComponents/SaveButton/SaveButton";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import CancelButton from "../../../CommonsComponents/CancelButton/CancelButton";

function UserDismissal() {
	const { t } = useTranslation();
	const [dismissalUser, setDismissalUser] = useState({ departmentId: "", userId: "", dismissalDate: "" });
	const departments = useSelector((state) => state.departments.departmentsList);
	const users = useSelector((state) => state.users.list);
	const lang = useSelector((state) => state.userSettings.lang);

	const localeMap = {
		en: enLocale,
		ru: ruLocale,
	};

	const dispatch = useDispatch();

	useEffect(() => {
		if (!departments.lenght) {
			dispatch(getDepartments());
		}
	}, []);

	useEffect(() => {
		document.title = t("applicationForDismissal");
		dispatch(changeListBreadCrumbs([`${t("users")}`, document.title]));
	}, [t]);

	useEffect(() => {
		dispatch(getRequestUsers({ departmentId: dismissalUser.departmentId }));
		setDismissalUser({
			...dismissalUser,
			userId: "",
		});
	}, [dismissalUser.departmentId]);

	function handleChange({ target }) {
		setDismissalUser({
			...dismissalUser,
			[target.name]: target.value,
		});
	}

	const handledismissalDateChange = (date) => {
		setDismissalUser({
			...dismissalUser,
			dismissalDate: date,
		});
	};

	return (
		<Paper>
			<Formik enableReinitialize={true} initialValues={dismissalUser}>
				{(props) => {
					return (
						<Form>
							<IBoxHeader p={1}>
								<Link className="textDecorationNone" to="/users">
									<CancelButton />
								</Link>
								<SaveButton type="submit" disabled={props.isSubmitting} />
							</IBoxHeader>

							<Divider />
							<Box p={2}>
								<Container maxWidth="xs">
									<Box p={1}>
										<FormControl className="fullWidth">
											<InputLabel
												shrink={props.values.departmentId ? true : false}
												id="departmentLabel"
											>
												{t("department")}
											</InputLabel>
											<Select
												labelId="departmentLabel"
												value={props.values.departmentId}
												name="departmentId"
												native
												onChange={handleChange}
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
											<InputLabel shrink={props.values.userId ? true : false} id="userLabel">
												{t("user")}
											</InputLabel>
											<Select
												labelId="userLabel"
												value={props.values.userId}
												name="userId"
												native
												onChange={handleChange}
											>
												<option value=""></option>
												{users.map((user) => (
													<option key={user.id} value={user.id}>
														{user.firstName} {user.lastName}
													</option>
												))}
											</Select>
										</FormControl>
									</Box>
									<Box p={1}>
										<MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[lang]}>
											<KeyboardDatePicker
												format="dd.MM.yyyy"
												value={props.values.dismissalDate ? props.values.dismissalDate : null}
												name="dismissalDate"
												label={t("dismissalDate")}
												error={props.errors.dismissalDate && props.touched.dismissalDate}
												onBlur={props.handleBlur}
												helperText={
													props.errors.dismissalDate &&
													props.touched.dismissalDate &&
													props.errors.dismissalDate
												}
												onChange={handledismissalDateChange}
												className="fullWidth"
											/>
										</MuiPickersUtilsProvider>
									</Box>
								</Container>
							</Box>
						</Form>
					);
				}}
			</Formik>
		</Paper>
	);
}

export default UserDismissal;
