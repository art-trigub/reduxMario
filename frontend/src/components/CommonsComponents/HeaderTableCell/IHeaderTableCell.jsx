import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const IHeaderTableCell = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		fontWeight: theme.typography.fontWeightBold,
		borderLeft: "1px solid rgba(224, 224, 224, 1)",
		padding: "3px 1px 8px 8px!important",
	},
}))(TableCell);

export default IHeaderTableCell;
