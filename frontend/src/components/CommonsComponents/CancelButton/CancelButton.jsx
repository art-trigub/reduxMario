import React from 'react'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles';


function CancelButton({ onClick, onChange, id, className, type, style, text }) {

	const { t } = useTranslation()

	return (
		<IButton
			onClick={onClick}
			onChange={onChange}
			id={id}
			type={type}
			className={className}
			style={style}
			variant='outlined'
			startIcon={<CloseIcon />}
		>
			{text
				?
				t(`${text}`)
				:
				t('canсel')
			}
		</IButton>
	)
}

export default CancelButton

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.cancelBtn.main,
		color: theme.palette.cancelBtn.contrastText,
		'&:hover': {
			backgroundColor: theme.palette.cancelBtn.dark,
		},

	},
}))(Button);