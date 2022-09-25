import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const IBoldTypography = withStyles((theme) => ({
    root: {
        fontWeight: theme.typography.fontWeightBold,
        // fontSize: 14
    },
}))(Typography);


export default IBoldTypography