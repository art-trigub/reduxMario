
import React from 'react';
import { useTranslation } from "react-i18next";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'




export default function CustomizedTables({ data }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Table size='small' className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <IHeaderTableCell align="center">{t("contact")}</IHeaderTableCell>
                    <IHeaderTableCell align="center">{t("type")}</IHeaderTableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {data ? data.map((item) => (
                    <StyledTableRow>
                        {item.type === '1' &&
                            < StyledTableCell align="center">{item.contact}</StyledTableCell>
                        }
                        {item.type === '2' &&
                            < StyledTableCell align="center">{item.code_mobile + item.contact}</StyledTableCell>
                        }
                        {item.type === '3' &&
                            < StyledTableCell align="center">{item.code_home + item.contact}</StyledTableCell>
                        }
                        {item.type === '4' &&
                            < StyledTableCell align="center">{item.code_fax + item.contact}</StyledTableCell>
                        }
                        <StyledTableCell align="center">
                            {item.type == '1' && 'Email'}
                            {item.type == '2' && t("mobilePhone")}
                            {item.type == '3' && t("homePhone")}
                            {item.type == '4' && t("fax")}

                        </StyledTableCell>

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

