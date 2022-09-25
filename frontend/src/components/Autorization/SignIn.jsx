import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import LangSelector from "../Layout/LangSelector/LangSelector";
import { Formik, Form } from "formik";
import { authorize, getAuthUser } from "../../api/auth";
import { setUserTokenLocal, setUserDataLocal, setLoggedUserLocal } from "../../store/actions/auth";

function SignIn({ setUserTokenLocal, setUserDataLocal, setLoggedUserLocal }) {
	const classes = useStyles();

	const { t } = useTranslation();

	const theme = useTheme();

	const [formErrors, setFormErrors] = useState(false);

	return (
		<>
			<Box display="flex" justifyContent="flex-end" p={1}>
				<LangSelector colorValue={theme.palette.primary.main} />
			</Box>
			<Container className={classes.container} maxWidth="xs">
				<Typography align="center" component="h1" variant="h5">
					{t("welcomeToCrm")}
				</Typography>

				<Formik
					initialValues={{ login: "", password: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.login) {
							errors.login = `${t("requiredField")}`;
						}
						if (!values.password) {
							errors.password = `${t("requiredField")}`;
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(true);
						authorize(values)
							.then((response) => {
								setUserTokenLocal(response).then(() => {
									getAuthUser()
										.then((data) => setUserDataLocal(data))
										.then(() => {
											setLoggedUserLocal();
										});
								});
							})
							.catch((error) => {
								setFormErrors(error.message);
								setSubmitting(false);
							});
					}}
				>
					{(props) => (
						<Form className={classes.form} onSubmit={props.handleSubmit}>
							<TextField
								margin="normal"
								fullWidth
								label={t("login")}
								name="login"
								type="text"
								error={props.errors.login && props.touched.login}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.login}
								helperText={props.errors.login && props.touched.login && props.errors.login}
							/>
							<TextField
								margin="normal"
								fullWidth
								label={t("password")}
								name="password"
								type="password"
								error={props.errors.password && props.touched.password}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.password}
								helperText={props.errors.password && props.touched.password && props.errors.password}
							/>
							<div className={classes.wrapper}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									disabled={props.isSubmitting}
								>
									{t("entrance")}
								</Button>
								{props.isSubmitting && (
									<CircularProgress size={24} className={classes.buttonProgress} />
								)}
							</div>

							{formErrors && `${t("somethingWrong")}`}
						</Form>
					)}
				</Formik>
			</Container>
		</>
	);
}

function mapStateToProps({ auth }) {
	return {};
}

const mapDispatchToProps = {
	setUserTokenLocal: setUserTokenLocal,
	setUserDataLocal: setUserDataLocal,
	setLoggedUserLocal: setLoggedUserLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const useStyles = makeStyles((theme) => ({
	container: {
		height: "80vh",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	form: {
		display: "flex",
		flexDirection: "column",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	wrapper: {
		position: "relative",
		marginTop: 10,
	},
	buttonProgress: {
		color: theme.palette.primary.main,
		position: "absolute",
		top: "50%",
		left: "50%",
		marginTop: -10,
		marginLeft: -12,
	},
}));
