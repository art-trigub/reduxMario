
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IHeaderTableCell from '../../CommonsComponents/HeaderTableCell/IHeaderTableCell'




export default function CustomizedTables({ headers, data, fields, onDelete, onEdit }) {
    const classes = useStyles();
    return (
        <Table size='small' className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    {headers.map((item) => (
                        <IHeaderTableCell key={item} align="center">{item}</IHeaderTableCell>
                    ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {headers.map((item) => (
                    <StyledTableCell key={item} align="center">{}</StyledTableCell>

                ))
                }
            </TableBody>
        </Table>
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













// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';



// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

// export default function CustomizedTables({ headers, data }) {
//     const classes = useStyles();

//     return (
//         <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         {headers.map((item) => (
//                             <StyledTableCell>{item}</StyledTableCell>
//                         ))
//                         }
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     <StyledTableRow key={data.id}>
//                         <StyledTableCell component="th" scope="row">
//                             {data.title}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                     </StyledTableRow>
//                     <StyledTableRow key={data.id}>
//                         <StyledTableCell component="th" scope="row">
//                             {data.title}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                         <StyledTableCell align="right">{data.first_name}</StyledTableCell>
//                     </StyledTableRow>
//                     <StyledTableRow key={data.id}>
//                         <StyledTableCell component="th" scope="row">
//                             {data.title}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">{}</StyledTableCell>
//                         <StyledTableCell align="right">{}</StyledTableCell>
//                         <StyledTableCell align="right">{}</StyledTableCell>
//                         <StyledTableCell align="right">{}</StyledTableCell>
//                     </StyledTableRow>

//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);