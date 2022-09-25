import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles';


const IStripedTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '& td + td': {
            wordBreak: 'break-word',
            borderLeft: '1px solid rgba(224, 224, 224, 1)'
        },
    },
}))(TableRow);

export default IStripedTableRow