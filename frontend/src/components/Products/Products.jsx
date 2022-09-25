import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IBoxHeader from '../CommonsComponents/Iboxes/IBoxHeader'
import AddButton from '../CommonsComponents/AddButton/AddButton';
import TablePaginationActions from '../CommonsComponents/TablePaginationActions/TablePaginationActions'
import Loader from '../CommonsComponents/Loader/Loader';
import IHeaderTableCell from '../CommonsComponents/HeaderTableCell/IHeaderTableCell'
import IStripedTableRow from '../CommonsComponents/StripedTableRow/IStripedTableRow'
import { getProducts, delProduct } from '../../store/actions/products'
import { changeListBreadCrumbs } from '../../store/actions/breadCrumbs'
import Divider from '@material-ui/core/Divider';

function Products({ productsData, isLoading, changeListBreadCrumbs, delProduct, getProducts }) {

	const { t } = useTranslation()

	useEffect(() => {
		document.title = 'Продукты';
		changeListBreadCrumbs([document.title])
		getProducts();
	}, [])

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const { url } = useRouteMatch()

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};


	return (

		<>
			{isLoading
				?
				<Loader />
				:
				<Paper>
					<IBoxHeader p={1}>
						<Link className='textDecorationNone' to={`${url}/update/new`}>
							<AddButton />
						</Link>

					</IBoxHeader>
					<Divider></Divider>
					<TableContainer>
						<Table size="small">
							<TableHead>
								<TableRow >
									<IHeaderTableCell align="center">
									</IHeaderTableCell>
									<IHeaderTableCell align="center">id</IHeaderTableCell>
									<IHeaderTableCell align="center">product</IHeaderTableCell>
									<IHeaderTableCell align="center">company</IHeaderTableCell>
									<IHeaderTableCell align="center">type</IHeaderTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									(rowsPerPage > 0
										? productsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										: productsData
									).map((item) => (
										<IStripedTableRow key={item.id} >
											<TableCell align="center">
												<Link to={`${url}/view/${item.id}`}>
													<IconButton>
														<VisibilityIcon></VisibilityIcon>
													</IconButton>
												</Link>
												<Link to={`${url}/update/${item.id}`}>
													<IconButton>
														<EditIcon></EditIcon>
													</IconButton>
												</Link>
												<IconButton onClick={() => delProduct(item.id)}>
													<DeleteForeverIcon></DeleteForeverIcon>
												</IconButton>
											</TableCell>
											<TableCell align='center'>
												{item.id}
											</TableCell>
											<TableCell align='center'>
												{item.name}
											</TableCell>
											<TableCell align='center'>
												{item.company}
											</TableCell>
											<TableCell align='center'>
												{item.type}
											</TableCell>

										</IStripedTableRow>
									))
								}
							</TableBody>
							<TableFooter>
								<TableRow>
									<TablePagination
										rowsPerPageOptions={[5, 10, 25, 60]}
										className='TablePaginationActions_forDiv'
										count={productsData.length}
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
						</Table>
					</TableContainer>
				</Paper>
			}
		</>
	);
}

function mapStateToProps({ products }) {
	return {
		productsData: products.list,
		isLoading: products.isLoading
	};
}

const mapDispatchToProps = {
	changeListBreadCrumbs: changeListBreadCrumbs,
	getProducts: getProducts,
	delProduct: delProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)

