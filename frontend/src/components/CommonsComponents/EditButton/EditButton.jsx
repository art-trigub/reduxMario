import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles';



function EditButton({ onClick, onChange, id, className, type, style, text }) {

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
			startIcon={<EditIcon />}
		>
			{text
				?
				t(`${text}`)
				:
				t('edit')
			}
		</IButton>
	)
}

export default EditButton

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.editBtn.main,
		color: theme.palette.editBtn.contrastText,
		'&:hover': {
			backgroundColor: theme.palette.editBtn.dark,
		},

	},
}))(Button);