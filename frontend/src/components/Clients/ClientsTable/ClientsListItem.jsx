import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { withStyles } from "@material-ui/core/styles";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SmallTableCell from '../../CommonsComponents/SmallTd/SmallTd'
import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'
import IStripedTableRow from '../../CommonsComponents/StripedTableRow/IStripedTableRow'
import Loader from '../../CommonsComponents/Loader/Loader'
import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader'
import TablePaginationActions from '../../CommonsComponents/TablePaginationActions/TablePaginationActions'
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import ImportExportIcon from "@material-ui/icons/ImportExport";



import Input from './Input'
import '../style.css'
import { Divider } from '@material-ui/core';

export default function ClientsListItem({ data }) {
	const { t } = useTranslation()
	const classes = useStyles();
	const theme = useTheme()
	const { path } = useRouteMatch()
	const [clientsData, setClientsData] = useState(data)
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [filtersValues, setFiltersValues] = useState({
		'id': '',
		'tz': '',
		'first_name': '',
		'last_name': '',
		'status_id': '',
		'economy': '',
		'pay': '',
		'fin_pred_id': '',
		'tech_support_status_id': '',
		'department_department_id': '',
		'data_change_additional_status': ''
	})

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, clientsData.length - page * rowsPerPage);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	function saveValuesFromFilters({ target }) {
		setFiltersValues({
			...filtersValues,
			[target.name]: target.value
		})
	}

	useEffect(() => {
		filterData()
	}, [filtersValues])

	function filterData() {

		let filteredArray = data.filter((item) => {
			let itemSuccessFiltered = true
			for (let key in item) {
				if (!item[key].toLowerCase().includes(filtersValues[key].toLowerCase())) {
					itemSuccessFiltered = false
					break;
				}
			}
			return itemSuccessFiltered && item
		})
		setClientsData(filteredArray)
	}

	function sendData() {

	}


	function resetFilters() {
		setFiltersValues({
			'id': '',
			'tz': '',
			'first_name': '',
			'last_name': '',
			'status_id': '',
			'economy': '',
			'pay': '',
			'fin_pred_id': '',
			'tech_support_status_id': '',
			'department_department_id': '',
			'data_change_additional_status': ''
		})
	}

	function onFilterSelect(value, name) {

	}

	function handleSortClick(name) {

	}

	function keyPress(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			// sendData();
		}
	}


	return (
		<>
			{
				false
					?
					<Loader />
					:
					<Paper component='div'>
						<IBoxHeader>
							Клиенты
						</IBoxHeader>
						<Divider />
						<TableContainer className={classes.container}>
							<Table size='small'>
								<TableHead>
									<TableRow>
										<IHeaderTableCell style={{ textAlign: "center", width: 135 }}>
											<Tooltip title={t("filter")} arrow>
												<IconButton style={{ padding: 8, marginTop: 15, color: "#fff" }} onClick={() => sendData()}>
													<FilterListIcon />
												</IconButton>
											</Tooltip>

											<Tooltip title={t("clearFilters")} arrow>
												<IconButton style={{ padding: 8, marginTop: 15, color: "#fff" }} onClick={() => resetFilters()}
												>
													<DeleteSweepIcon />
												</IconButton>
											</Tooltip>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.id}
												name="id"
												label={t("id")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("idClient")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.tz}
												name="tz"
												label={t("tz")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("tz")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.first_name}
												name="first_name"
												label={t("name")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("first_name")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.last_name}
												name="last_name"
												label={t("surname")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("lastName")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<div style={{ display: "flex", alignItems: "flex-end" }}>
												<TableHeaderFormControlSelect>
													<InputLabel>{t("status")}</InputLabel>
													<Select
														style={{ position: "relative", minWidth: 120 }}
														value={filtersValues.status_id}
														name="status_id"
														native
														onKeyPress={(e) => keyPress(e)}
														IconComponent={() => <SearchIcon />}
														onChange={saveValuesFromFilters}
													>
														<option value=""></option>
														<option value="Только 23,4">Только 23,4</option>
														<option value="Отмена">Отмена</option>


													</Select>
												</TableHeaderFormControlSelect>
												<IconButton onClick={() => handleSortClick("status_id")} style={{ color: "#fff", padding: 2 }}>
													<ImportExportIcon />
												</IconButton>
											</div>
										</IHeaderTableCell>

										{/* <IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.economy}
												name="economy"
												label={t("economy")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("economy")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell> */}

										<IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.pay}
												name="pay"
												label={t("pay")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("pay")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell>

										<IHeaderTableCell>
											<div style={{ display: "flex", alignItems: "flex-end" }}>
												<TableHeaderFormControlSelect>
													<InputLabel>{t("finRepresentative")}</InputLabel>
													<Select
														style={{ position: "relative", minWidth: 120 }}
														name="fin_pred_id"
														value={filtersValues.fin_pred_id}
														native
														onKeyPress={(e) => keyPress(e)}
														IconComponent={() => <SearchIcon />}
														onChange={saveValuesFromFilters}
													>
														<option value=""></option>
														<option value="Светлана Семененко">Светлана Семененко</option>
														<option value="Лана Донец">Лана Донец</option>


													</Select>
												</TableHeaderFormControlSelect>
												<IconButton onClick={() => handleSortClick("fin_pred_id")} style={{ color: "#fff", padding: 2 }}>
													<ImportExportIcon />
												</IconButton>
											</div>
										</IHeaderTableCell>

										{/* <IHeaderTableCell>
											<div style={{ display: "flex", alignItems: "flex-end" }}>
												<TableHeaderFormControlSelect>
													<InputLabel>{t("supportStatus")}</InputLabel>
													<Select
														style={{ position: "relative", minWidth: 120 }}
														value={filtersValues.status_id}
														name="tech_support_status_id"
														native
														onKeyPress={(e) => keyPress(e)}
														IconComponent={() => <SearchIcon />}
														onChange={saveValuesFromFilters}
													>
														<option value=""></option>
														<option value="Отмена (ранее пользовался услугой)">Отмена (ранее пользовался услугой)</option>
														<option value="Нет ПК">Нет ПК</option>
														<option value="Отказ">Отказ</option>
													</Select>
												</TableHeaderFormControlSelect>
												<IconButton onClick={() => handleSortClick("tech_support_status_id")} style={{ color: "#fff", padding: 2 }}>
													<ImportExportIcon />
												</IconButton>
											</div>
										</IHeaderTableCell> */}

										{/* <IHeaderTableCell>
											<div style={{ display: "flex", alignItems: "flex-end" }}>
												<TableHeaderFormControlSelect>
													<InputLabel>{t("department")}</InputLabel>
													<Select
														style={{ position: "relative", minWidth: 120 }}
														value={filtersValues.department_department_id}
														name="department_department_id"
														native
														onKeyPress={(e) => keyPress(e)}
														IconComponent={() => <SearchIcon />}
														onChange={saveValuesFromFilters}
													>
														<option value=""></option>
														<option value="Отдел обслуживания IPL">Отдел обслуживания IPL</option>
														<option value="IT">IT</option>
													</Select>
												</TableHeaderFormControlSelect>
												<IconButton onClick={() => handleSortClick("department_department_id")} style={{ color: "#fff", padding: 2 }}>
													<ImportExportIcon />
												</IconButton>
											</div>
										</IHeaderTableCell> */}

										{/* <IHeaderTableCell>
											<TableHeaderTextFieldFilter
												value={filtersValues.data_change_additional_status}
												name="data_change_additional_status"
												label={t("additionalStatusChangeDate")}
												onKeyPress={(e) => keyPress(e)}
												onChange={saveValuesFromFilters}
												InputProps={{
													endAdornment: (
														<>
															<InputAdornment disablePointerEvents position="end">
																<SearchIcon style={{ color: "#fff", }} />
															</InputAdornment>
															<IconButton onClick={() => handleSortClick("data_change_additional_status")} style={{ color: "#fff", padding: 2 }}>
																<ImportExportIcon />
															</IconButton>
														</>
													),
												}}
											></TableHeaderTextFieldFilter>
										</IHeaderTableCell> */}





										{/* <IHeaderTableCell align="center"><div className="table__header-title">{t('idClient')}</div><Input name="id" onChange={saveValuesFromFilters} type="text" /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('tz')}</div><Input name="tz" onChange={saveValuesFromFilters} /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('name')}</div><Input name="first_name" onChange={saveValuesFromFilters} style={{ width: "90px" }} type="text" /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('surname')}</div><Input name="last_name" onChange={saveValuesFromFilters} style={{ width: "90px" }} type="text" /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('status')}</div>
											<Select value={clientsData.status_id} onChange={saveValuesFromFilters} inputProps={{ name: "status_id", id: 'outlined-age-native-simple' }} variant="outlined" className={classes.formControl} native>
												<option aria-label="None" value="">{t('status')}</option>
												<option>Только 23,4</option>
												<option>Отмена</option>
											</Select>
										</IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('economy')}</div><Input name="economy" onChange={saveValuesFromFilters} type="text" /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('pay')}</div><Input name="pay" onChange={saveValuesFromFilters} type="text" /></IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('finRepresentative')}</div>
											<Select color="secondary" value={clientsData.status_id} onChange={saveValuesFromFilters} inputProps={{ name: "fin_pred_id", id: 'outlined-age-native-simple' }} variant="outlined" className={classes.formControl} native>
												<option aria-label="None" value="">{t('finRepresentative')}</option>
												<option>Светлана Семененко</option>
												<option>Лана Донец</option>
											</Select>
										</IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('supportStatus')}</div>
											<Select value={clientsData.status_id} onChange={saveValuesFromFilters} inputProps={{ name: "tech_support_status_id", id: 'outlined-age-native-simple' }} variant="outlined" className={classes.formControl} native>
												<option aria-label="None" value="">{t('supportStatus')}</option>
												<option>Отмена (ранее пользовался услугой)</option>
												<option>Нет ПК</option>
												<option>Отказ</option>
											</Select>
										</IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('department')}</div>
											<Select value={clientsData.status_id} onChange={saveValuesFromFilters} inputProps={{ name: "department_department_id", id: 'outlined-age-native-simple' }} variant="outlined" className={classes.formControl} native>
												<option aria-label="None" value="">{t('department')}</option>
												<option>Отдел обслуживания IPL</option>
												<option>IT</option>
												<option>1</option>
											</Select>
										</IHeaderTableCell>
										<IHeaderTableCell align="center"><div className="table__header-title">{t('additionalStatusChangeDate')}</div><Input name="data_change_additional_status" onChange={saveValuesFromFilters} type="text" /></IHeaderTableCell> */}
									</TableRow>
								</TableHead>

								<TableBody>
									{(rowsPerPage > 0
										? clientsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										: clientsData
									).map((item) => (
										<IStripedTableRow style={{ height: "43px" }} key={item.id}>
											<SmallTableCell align="center"><span ><Link to={`${path}/${item.id}`}><IconButton><VisibilityIcon /></IconButton></Link></span></SmallTableCell>
											<SmallTableCell align="center">{item.id}</SmallTableCell>
											<SmallTableCell align="center"><span >{item.tz}</span></SmallTableCell>
											<SmallTableCell align="center"><span >{item.first_name}</span></SmallTableCell>
											<SmallTableCell align="center"><span >{item.last_name}</span></SmallTableCell>
											<SmallTableCell align="center"><span >{item.status_id}</span></SmallTableCell>
											{/* <SmallTableCell align="center"><span >{item.economy}</span></SmallTableCell> */}
											<SmallTableCell align="center"><span >{item.pay}</span></SmallTableCell>
											<SmallTableCell align="center"><span >{item.fin_pred_id}</span></SmallTableCell>
											{/* <SmallTableCell align="center"><span >{item.tech_support_status_id}</span></SmallTableCell> */}
											{/* <SmallTableCell align="center"><span >{item.department_department_id}</span></SmallTableCell> */}
											{/* <SmallTableCell style={{ width: "100px" }} align="center"><span >{item.data_change_additional_status}</span></SmallTableCell> */}
										</IStripedTableRow>
									))
									}
									{emptyRows > 0 && (
										<TableRow style={{ height: 53 * emptyRows }}>
											<TableCell colSpan={6} />
										</TableRow>
									)}
								</TableBody>


							</Table>
						</TableContainer >
						<TableFooter>
							<TableRow >
								<TablePagination
									rowsPerPageOptions={[5, 10, 25]}
									className='TablePaginationActions_forDiv'
									count={clientsData.length}
									rowsPerPage={rowsPerPage}
									page={page}
									labelRowsPerPage={`${t('rowsPerPage')}`}
									SelectProps={{
										inputProps: { 'aria-label': `${t('rowsPerPage')}` },
										native: true,
									}}
									onChangePage={handleChangePage}
									onChangeRowsPerPage={handleChangeRowsPerPage}
									ActionsComponent={TablePaginationActions}
								/>
							</TableRow>
						</TableFooter>
					</Paper>
			}
		</>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	table: {
		minWidth: 700,
	},
	container: {
		maxHeight: 640,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 90,
		fontSize: 13,
		backgroundColor: "#fff"
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	}
}));

const TableHeaderTextFieldFilter = withStyles({
	root: {
		"& .MuiFormLabel-root": {
			color: "#fff",
			fontWeight: "bold",
			fontSize: "0.875rem",
			width: "75%",
			display: "flex",
			flexWrap: "wrap",
			wordWrap: "normal"
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
			wordBreak: "normal",
			paddingRight: 40,
			zIndex: 10,
			wordWrap: "normal"

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