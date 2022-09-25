
import React from 'react';
import { useTranslation } from "react-i18next";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'
import format from 'date-fns/format';





export default function CustomizedTables({ data }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Table size='small' className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <IHeaderTableCell align="center">{t("status")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("firstName")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("surname")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("tz")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("dateOfBirth")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("gender")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("hospitalCassa")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("contacts")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("growth")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("weight")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("smoking")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("quantityCigarettes")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("longOutSmoking")}</IHeaderTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data ? data.map((item) => (
                    <StyledTableRow key={item}>
                        < StyledTableCell align="center">{item.status}</StyledTableCell>
                        < StyledTableCell align="center">{item.name}</StyledTableCell>
                        < StyledTableCell align="center">{item.surname}</StyledTableCell>
                        < StyledTableCell align="center">{item.tz}</StyledTableCell>
                        < StyledTableCell align="center">{item.dateOfBirth && format(new Date(item.dateOfBirth), 'dd.MM.yyyy')}</StyledTableCell>
                        < StyledTableCell align="center">{item.gender}</StyledTableCell>
                        < StyledTableCell align="center">{item.hospitalCassa}</StyledTableCell>
                        < StyledTableCell align="center">{item.contacts}</StyledTableCell>
                        < StyledTableCell align="center">{item.growth}</StyledTableCell>
                        < StyledTableCell align="center">{item.weight}</StyledTableCell>
                        < StyledTableCell align="center">{item.smoking}</StyledTableCell>
                        {item.smoking === true
                            ? < StyledTableCell align="center">{item.quantityCigarettes}</StyledTableCell>
                            : <StyledTableCell align="center">-</StyledTableCell>

                        }
                        {item.smoking !== true && item.didSmoking === true
                            ? < StyledTableCell align="center">{item.longOutSmoking}</StyledTableCell>
                            : <StyledTableCell align="center">-</StyledTableCell>
                        }

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



