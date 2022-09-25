import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";

function DeleteButton({ onClick, onChange, id, className, type, style, text }) {
	const { t } = useTranslation();

	return (
		<IButton
			onClick={onClick}
			onChange={onChange}
			id={id}
			type={type}
			className={className}
			style={style}
			variant="outlined"
			startIcon={<DeleteIcon />}
		>
			{text ? t(`${text}`) : t("remove")}
		</IButton>
	);
}

export default DeleteButton;

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.deleteBtn.main,
		color: theme.palette.deleteBtn.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.deleteBtn.dark,
		},
	},
}))(Button);
