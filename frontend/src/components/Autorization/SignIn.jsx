import React, { useState } from "react";
import { connect } from "react-redux";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik, Form } from "formik";
import { authorize, getAuthUser } from "../../api/auth";
import { setUserTokenLocal, setUserDataLocal, setLoggedUserLocal } from "../../store/actions/auth";

function SignIn({ setUserTokenLocal, setUserDataLocal, setLoggedUserLocal }) {




	const theme = useTheme();

	const [formErrors, setFormErrors] = useState(false);

	return (
		<>

			<Container  maxWidth="xs">
				<Typography align="center" component="h1" variant="h5">
					{"welcomeToCrm"}
				</Typography>

				<Formik
					initialValues={{ login: "", password: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.login) {
							errors.login = "requiredField";
						}
						if (!values.password) {
							errors.password = "requiredField";
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
						<Form  onSubmit={props.handleSubmit}>
							<TextField
								margin="normal"
								fullWidth
								label="login"
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
								label="password"
								name="password"
								type="password"
								error={props.errors.password && props.touched.password}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.password}
								helperText={props.errors.password && props.touched.password && props.errors.password}
							/>
							<div>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"

									disabled={props.isSubmitting}
								>
									{"entrance"}
								</Button>
								{props.isSubmitting && (
									<CircularProgress size={24}  />
								)}
							</div>

							{formErrors && "somethingWrong"}
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

