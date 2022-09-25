import React, { useState, useEffect, Suspense } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as locales from "react-date-range/dist/locale";
import { useTranslation } from "react-i18next";
import "./Users.css";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import format from "date-fns/format";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FilterListIcon from "@material-ui/icons/FilterList";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";
import { DateRangePicker } from "react-date-range";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import IBoxHeader from "../CommonsComponents/Iboxes/IBoxHeader";
import AddButton from "../CommonsComponents/AddButton/AddButton";
import DeleteButton from "../CommonsComponents/DeleteButton/DeleteButton";
import TablePaginationActions from "../CommonsComponents/TablePaginationActions/TablePaginationActions";
import Loader from "../CommonsComponents/Loader/Loader";
import IHeaderTableCell from "../CommonsComponents/HeaderTableCell/IHeaderTableCell";
import IStripedTableRow from "../CommonsComponents/StripedTableRow/IStripedTableRow";
import { delUser, selectFilter, resetFilter, getRequestUsers } from "../../store/actions/users";
import { getDepartments } from "../../store/actions/departments";
import { changeListBreadCrumbs } from "../../store/actions/breadCrumbs";

function Users({
	delUser,
	usersData,
	getRequestUsers,
	isLoading,
	changeListBreadCrumbs,
	filtered,
	onSelect,
	onResetFilters,
	getDepartments,
	departments,
	roles,
	lang,
}) {
	const { t } = useTranslation();
	const [page, setPage] = useState(0);
	const [perPage, setPerPage] = useState(5);
	const [sort, setSort] = useState(null);
	const { url } = useRouteMatch();

	const [dateRange, setDateRange] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	useEffect(() => {
		document.title = t("users");
		changeListBreadCrumbs([document.title]);
	}, [t]);

	useEffect(() => {
		if (usersData.length <= 0) {
			getRequestUsers();
		}
		onResetFilters();
		if (departments.length <= 0 || roles.length <= 0) {
			getDepartments();
		}
	}, []);

	async function resetFilters() {
		await onResetFilters();
		await resetPagination();
		getRequestUsers();
	}

	useEffect(() => {
		sendData();
	}, [page, perPage, sort]);

	function resetPagination() {
		setPage(0);
	}

	function sendData() {
		let data = {
			...filtered,
			page,
			perPage,
			sortData: sort,
			id: "",
		};

		getRequestUsers(data);
	}

	function onFilterSelect(value, name) {
		onSelect(value, name);
	}

	async function onDateOfBirthChange(data) {
		await setDateRange([data]);
		onSelect(data, "dateOfBirth");
	}

	function handleSortClick(name) {
		setSort((prev) => {
			if (prev) {
				if (Object.keys(prev) == name && Object.values(prev) == "asc") {
					return {
						[name]: "desc",
					};
				} else if (Object.keys(prev) == name && Object.values(prev) == "desc") {
					return null;
				} else {
					return {
						[name]: "asc",
					};
				}
			} else {
				return {
					[name]: "asc",
				};
			}
		});
	}

	const handleChangePage = (event, newPage) => {
		setPage(Number(newPage));
	};

	const handleChangeRowsPerPage = (event) => {
		setPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleClickAway = () => {
		setAnchorEl(null);
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
					<Paper>
						<IBoxHeader>
							<Link className="textDecorationNone" to={`${url}/update/new`}>
								<AddButton />
							</Link>
							<Link className="textDecorationNone" to={`${url}/dismissal`}>
								<DeleteButton text="applicationForDismissal" />
							</Link>
						</IBoxHeader>
						<Divider></Divider>
						<Table size="small">
							<TableHead>
								<TableRow>
									<IHeaderTableCell style={{ textAlign: "center", width: 135 }}>
										<Tooltip title={t("filter")} arrow>
											<IconButton style={{ padding: 8, color: "#fff" }} onClick={() => sendData()}>
												<FilterListIcon />
											</IconButton>
										</Tooltip>

										<Tooltip title={t("clearFilters")} arrow>
											<IconButton
												style={{ padding: 8, color: "#fff" }}
												onClick={() => resetFilters()}
											>
												<DeleteSweepIcon />
											</IconButton>
										</Tooltip>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<TableHeaderTextFieldFilter
											disabled
											label={t("photo")}
										></TableHeaderTextFieldFilter>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<TableHeaderTextFieldFilter
											value={filtered.firstName}
											name="firstName"
											onKeyPress={(ev) => {
												if (ev.key === "Enter") {
													ev.preventDefault();
													sendData();
												}
											}}
											onChange={({ target }) => onFilterSelect(target.value, target.name)}
											InputProps={{
												endAdornment: (
													<>
														<InputAdornment disablePointerEvents position="end">
															<SearchIcon
																style={{
																	color: "#fff",
																}}
															/>
														</InputAdornment>
														<IconButton
															style={{ color: "#fff", padding: 2 }}
															onClick={() => handleSortClick("firstName")}
														>
															<ImportExportIcon />
														</IconButton>
													</>
												),
											}}
											label={t("name")}
										></TableHeaderTextFieldFilter>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<TableHeaderTextFieldFilter
											value={filtered.lastName}
											name="lastName"
											onKeyPress={(ev) => {
												if (ev.key === "Enter") {
													ev.preventDefault();
													sendData();
												}
											}}
											onChange={({ target }) => onFilterSelect(target.value, target.name)}
											InputProps={{
												endAdornment: (
													<>
														<InputAdornment disablePointerEvents position="end">
															<SearchIcon
																style={{
																	color: "#fff",
																}}
															/>
														</InputAdornment>
														<IconButton
															style={{ color: "#fff", padding: 2 }}
															onClick={() => handleSortClick("lastName")}
														>
															<ImportExportIcon />
														</IconButton>
													</>
												),
											}}
											label={t("surname")}
										></TableHeaderTextFieldFilter>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<div style={{ display: "flex", alignItems: "flex-end" }}>
											<TableHeaderFormControlSelect>
												<InputLabel htmlFor="departmentLabel">{t("department")}</InputLabel>
												<Select
													style={{ position: "relative", minWidth: 120 }}
													value={filtered.departmentId}
													native
													onKeyPress={(ev) => {
														if (ev.key === "Enter") {
															ev.preventDefault();
															sendData();
														}
													}}
													IconComponent={() => <SearchIcon />}
													inputProps={{
														name: "departmentId",
														id: "departmentLabel",
													}}
													onChange={({ target }) => onFilterSelect(target.value, target.name)}
												>
													<option value=""></option>
													{departments.map((dep) => (
														<option key={dep.id} value={dep.id}>
															{dep.name}
														</option>
													))}
												</Select>
											</TableHeaderFormControlSelect>
											<IconButton
												style={{ color: "#fff", padding: 2 }}
												onClick={() => handleSortClick("department")}
											>
												<ImportExportIcon />
											</IconButton>
										</div>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<div style={{ display: "flex", alignItems: "flex-end" }}>
											<TableHeaderFormControlSelect>
												<InputLabel htmlFor="positionLabel">{t("position")}</InputLabel>
												<Select
													style={{ position: "relative", minWidth: 120 }}
													value={filtered.roleId}
													native
													onKeyPress={(ev) => {
														if (ev.key === "Enter") {
															ev.preventDefault();
															sendData();
														}
													}}
													IconComponent={() => <SearchIcon />}
													inputProps={{
														name: "roleId",
														id: "positionLabel",
													}}
													onChange={({ target }) => onFilterSelect(target.value, target.name)}
												>
													<option value=""></option>
													{roles.map((rol) => (
														<option key={rol.id} value={rol.id}>
															{rol.name}
														</option>
													))}
												</Select>
											</TableHeaderFormControlSelect>
											<IconButton
												style={{ color: "#fff", padding: 2 }}
												onClick={() => handleSortClick("position")}
											>
												<ImportExportIcon />
											</IconButton>
										</div>
									</IHeaderTableCell>
									<IHeaderTableCell>
										<TableHeaderTextFieldFilter
											value={filtered.externalNumber}
											name="externalNumber"
											onKeyPress={(ev) => {
												if (ev.key === "Enter") {
													ev.preventDefault();
													sendData();
												}
											}}
											onChange={({ target }) => onFilterSelect(target.value, target.name)}
											InputProps={{
												endAdornment: (
													<>
														<InputAdornment disablePointerEvents position="end">
															<SearchIcon
																style={{
																	color: "#fff",
																}}
															/>
														</InputAdornment>
													</>
												),
											}}
											label={t("extensionNumber")}
										></TableHeaderTextFieldFilter>
									</IHeaderTableCell>
									<ClickAwayListener onClickAway={handleClickAway}>
										<IHeaderTableCell style={{ position: "relative" }}>
											<TableHeaderTextFieldFilter
												value={
													filtered.dateOfBirth &&
													`${new Date(
														filtered.dateOfBirth.startDate
													).toLocaleDateString()} - ${new Date(
														filtered.dateOfBirth.endDate
													).toLocaleDateString()}`
												}
												type="text"
												disabled
												name="dateOfBirth"
												onKeyPress={(ev) => {
													if (ev.key === "Enter") {
														ev.preventDefault();
														sendData();
													}
												}}
												onChange={({ target }) => onFilterSelect(target.value, target.name)}
												InputProps={{
													endAdornment: (
														<>
															<IconButton
																style={{ color: "#fff", padding: 2 }}
																onClick={handleClick}
															>
																<SearchIcon />
															</IconButton>
															<IconButton style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
												label={t("dateOfBirth")}
											></TableHeaderTextFieldFilter>
											<Popper id={id} open={open} anchorEl={anchorEl}>
												<DateRangePicker
													onChange={({ selection }) => onDateOfBirthChange(selection)}
													showSelectionPreview={true}
													moveRangeOnFirstSelection={true}
													months={2}
													locale={locales[lang]}
													ranges={dateRange}
													staticRanges={[]}
													inputRanges={[]}
													showDateDisplay={true}
													className="usersDateRangeDob"
													direction="horizontal"
												/>
											</Popper>
										</IHeaderTableCell>
									</ClickAwayListener>
									<IHeaderTableCell>
										<TableHeaderTextFieldFilter
											value={filtered.email}
											name="email"
											onKeyPress={(ev) => {
												if (ev.key === "Enter") {
													ev.preventDefault();
													sendData();
												}
											}}
											onChange={({ target }) => onFilterSelect(target.value, target.name)}
											InputProps={{
												endAdornment: (
													<>
														<InputAdornment disablePointerEvents position="end">
															<SearchIcon
																style={{
																	color: "#fff",
																}}
															/>
														</InputAdornment>
														<IconButton
															style={{ color: "#fff", padding: 2 }}
															onClick={() => handleSortClick("email")}
														>
															<ImportExportIcon />
														</IconButton>
													</>
												),
											}}
											label={t("email")}
										></TableHeaderTextFieldFilter>
									</IHeaderTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{(perPage > 0 ? usersData.slice(page * perPage, page * perPage + perPage) : usersData).map(
									(item) => {
										const phonesLength = item.phones.length;
										return (
											<IStripedTableRow key={item.id}>
												<TableCell
													style={{
														width: 120,
														padding: "6px",
													}}
												>
													<Link to={`${url}/view/${item.id}`}>
														<Tooltip title={t("view")} arrow>
															<IconButton style={{ padding: 8 }}>
																<VisibilityIcon></VisibilityIcon>
															</IconButton>
														</Tooltip>
													</Link>

													<Link to={`${url}/update/${item.id}`}>
														<Tooltip title={t("edit")} arrow>
															<IconButton style={{ padding: 8 }}>
																<EditIcon></EditIcon>
															</IconButton>
														</Tooltip>
													</Link>

													<Tooltip title={t("remove")} arrow>
														<IconButton style={{ padding: 8 }} onClick={() => delUser(item.id)}>
															<DeleteForeverIcon></DeleteForeverIcon>
														</IconButton>
													</Tooltip>
												</TableCell>
												<TableCell align="center">
													<Suspense>
														<img
															className="userAvatar"
															style={{
																borderRadius: 10,
															}}
															src={"http://localhost:8082" + item.photo}
															alt="avatar"
														/>
													</Suspense>
												</TableCell>
												<TableCell>{item.firstName}</TableCell>
												<TableCell>{item.lastName}</TableCell>
												<TableCell>{item.role.department}</TableCell>
												<TableCell>{item.role.position}</TableCell>
												<TableCell>
													{item.phones.map((phone, i) => {
														if (phonesLength == i + 1) {
															return <span key={phone.id}>{phone.phoneInternal}</span>;
														} else {
															return <span key={phone.id}>{phone.phoneInternal}, </span>;
														}
													})}
												</TableCell>
												<TableCell>{format(new Date(item.dateOfBirth), "dd.MM.yyyy")}</TableCell>
												<TableCell>{item.email}</TableCell>
											</IStripedTableRow>
										);
									}
								)}
							</TableBody>
							<TableFooter>
								<TableRow>
									<TablePagination
										rowsPerPageOptions={[5, 10, 25, 60]}
										className="TablePaginationActions_forDiv"
										count={usersData.length}
										rowsPerPage={perPage}
										labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${t("of")} ${count}`}
										page={page}
										labelRowsPerPage={`${t("rowsPerPage")}`}
										SelectProps={{
											inputProps: {
												"aria-label": `${t("rowsPerPage")}`,
											},
											native: true,
										}}
										onChangePage={handleChangePage}
										onChangeRowsPerPage={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</Paper>
				)}
		</>
	);
}

function mapStateToProps({ users, departments, userSettings }) {
	return {
		usersData: users.list,
		isLoading: users.isLoading,
		filtered: users.filtered,
		departments: departments.departmentsList,
		roles: departments.rolesList,
		lang: userSettings.lang,
	};
}

const mapDispatchToProps = {
	onSelect: selectFilter,
	onResetFilters: resetFilter,
	delUser: delUser,
	changeListBreadCrumbs: changeListBreadCrumbs,
	getDepartments: getDepartments,
	getRequestUsers: getRequestUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const TableHeaderTextFieldFilter = withStyles({
	root: {
		"& .MuiFormLabel-root": {
			color: "#fff",
			fontWeight: "bold",
			fontSize: "0.875rem",
			width: "75%",
			display: "flex",
			flexWrap: "wrap",
			wordBreak: "break-word",
		},
		"& .MuiInputBase-input .MuiInput-input .MuiInputBase-inputAdornedEnd": {
			background: "none!important",
		},
		"& input:-internal-autofill-selected": {
			background: "none!important",
		},
		"& .MuiInputLabel-shink": {
			transition: "translate(0, 1.5px) scale(1)",
		},
		"& .MuiInputBase-input": {
			color: "#fff",
		},
		"& label.Mui-focused": {
			color: "#fff",
		},
		"& .MuiInput-underline:before": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:after": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:hover:before": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:after:hover": {
			border: "none",
			borderBottomColor: "#fff",
		},
	},
})(TextField);

const TableHeaderFormControlSelect = withStyles({
	root: {
		"& .MuiSelect-select": {
			color: "#fff",
			fontSize: "0.875rem",
			width: "75%",
			display: "flex",
			flexWrap: "wrap",
			wordBreak: "break-word",
			paddingRight: 40,
			zIndex: 10,
		},
		"& .MuiSelect-select option": {
			color: "#000",
		},
		"& .MuiFormLabel-root": {
			color: "#fff",
			fontWeight: "bold",
			fontSize: "0.875rem",
		},
		"& .MuiInputLabel-shink": {
			transition: "translate(0, 1.5px) scale(1)",
		},
		"& .MuiInputBase-input": {
			color: "#fff",
		},
		"& label.Mui-focused": {
			color: "#fff",
		},
		"& .MuiSelect-select:focus": {
			backgroundColor: "transparent",
		},
		"& .MuiInput-underline:before": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:after": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:hover:before": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiInput-underline:after:hover": {
			border: "none",
			borderBottomColor: "#fff",
		},
		"& .MuiSvgIcon-root": {
			color: "#fff",
			position: "absolute",
			right: 0,
		},
	},
})(FormControl);