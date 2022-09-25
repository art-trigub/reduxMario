
import React from 'react';
import { useTranslation } from "react-i18next";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'




export default function CustomizedTables({ headers, data, fields, onDelete, onEdit }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Table size='small' className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <IHeaderTableCell align="center">{t("city")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("street")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("streetHeb")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("house")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("apartment")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("entrance")}</IHeaderTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data ? data.map((item) => (
                    <StyledTableRow>
                        < StyledTableCell align="center">{item.city}</StyledTableCell>
                        < StyledTableCell align="center">{item.street}</StyledTableCell>
                        < StyledTableCell align="center">{item.streetHeb}</StyledTableCell>
                        < StyledTableCell align="center">{item.house}</StyledTableCell>
                        < StyledTableCell align="center">{item.appartament}</StyledTableCell>
                        < StyledTableCell align="center">{item.entrance}</StyledTableCell>
                    </StyledTableRow>

                ))
                    : null
                }



            </TableBody>
        </Table >
    );
}


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        width: "80%",
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    container: {
        width: "100%",
        margin: "0 auto"
    }

});



