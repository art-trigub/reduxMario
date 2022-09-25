import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";

function SaveButton({
	onClick,
	onChange,
	id,
	className,
	type,
	style,
	text,
	disabled,
}) {
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
			startIcon={<SaveIcon />}
			disabled={disabled}
		>
			{text ? t(`${text}`) : t("save")}
		</IButton>
	);
}

export default SaveButton;

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.saveBtn.main,
		color: theme.palette.saveBtn.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.saveBtn.dark,
		},
	},
}))(Button);
