import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles';

const IBoxHeader = withStyles((theme) => ({
    root: {
        minHeight: '36px',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        '& * + *': {
            margin: '0 5px',
            // padding: '0 5px',
        },
    },
}))(Box);


export default IBoxHeader