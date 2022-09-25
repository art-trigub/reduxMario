import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles';


const SmallTableCell = withStyles((theme) => ({
    root: {
        padding: '2px',
    },
}))(TableCell);

export default SmallTableCell