import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'


import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from '../../CommonsComponents/Loader/Loader'
import { Divider } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader'
import AddButton from '../../CommonsComponents/AddButton/AddButton'
import TablePaginationActions from '../../CommonsComponents/TablePaginationActions/TablePaginationActions'
import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'
import IStripedTableRow from '../../CommonsComponents/StripedTableRow/IStripedTableRow'

import Modal from './Modal'
import { deleteItem } from '../../../store/actions/libraries/cities'
import { getData, onSave, editItem } from '../../../store/actions/libraries/cities'
import { changeListBreadCrumbs } from '../../../store/actions/breadCrumbs'



function Cities({ getData, list, isLoading, deleteItem, onSave, editItem }) {
    const { t } = useTranslation()
    const [visibleModal, setVisibleModal] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editingItem, setEditingItem] = useState()
    const dispatch = useDispatch()
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, list.length - page * rowsPerPage);

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        document.title = t('cities')
        dispatch(changeListBreadCrumbs([`${t('libraries')}`, `${t('cities')}`]))
    }, [t])

    function addNewItem() {
        setEditMode(false)
        setVisibleModal(true)
    }

    function onEdit(item) {
        setVisibleModal(true)
        setEditMode(true)
        setEditingItem(item)
    }

    function closeModal() {
        setVisibleModal(false)
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <Paper component='div'>
                        {visibleModal && <Modal setEditMode={setEditMode} editItem={editItem} editingItem={editingItem} editMode={editMode} onSave={onSave} visible={visibleModal} closeModal={closeModal}></Modal>}
                        <IBoxHeader>
                            <AddButton onClick={addNewItem}></AddButton>
                        </IBoxHeader>
                        <Divider />
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table" size="small" className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <IHeaderTableCell style={{ width: "10%" }} align="center"></IHeaderTableCell>
                                        <IHeaderTableCell align="center">{t("titleRus")}</IHeaderTableCell>
                                        <IHeaderTableCell align="center">{t("titleHeb")}</IHeaderTableCell>
                                        <IHeaderTableCell align="center">{t("dateAdded")}</IHeaderTableCell>
                                        <IHeaderTableCell align="center">{t("whoAdded")}</IHeaderTableCell>
                                        <IHeaderTableCell align="center">{t("region")}</IHeaderTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : list).map((item) => (

                                            <IStripedTableRow key={item.id}>

                                                <TableCell align="center">
                                                    <IconButton>
                                                        <EditIcon onClick={() => onEdit(item)}></EditIcon>
                                                    </IconButton>
                                                    <IconButton onClick={() => deleteItem(item.id)}>
                                                        <DeleteForeverIcon></DeleteForeverIcon>
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.titleRus}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.titleHeb}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.dateAdded}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.whoAdded}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.region}
                                                </TableCell>
                                            </IStripedTableRow>
                                        ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                        <TableFooter>
                            <TableRow >
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    className='TablePaginationActions_forDiv'
                                    count={list.length}
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


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    container: {
        maxHeight: "75vh",
    },
});

const StyledTableCell = withStyles((theme) => ({

    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function mapStateToProps({ cities }) {
    return {
        list: cities.list,
        isLoading: cities.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(getData, dispatch),
        deleteItem: bindActionCreators(deleteItem, dispatch),
        onSave: bindActionCreators(onSave, dispatch),
        editItem: bindActionCreators(editItem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
