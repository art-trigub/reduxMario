import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles';


function AddButton({ onClick, onChange, id, className, type, style, text }) {

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
			startIcon={<AddIcon />}
		>
			{text
				?

				text.map(item => t(`${item}`))

				// t(`${text}`)
				:
				t('add')
			}
		</IButton>
	)
}

export default AddButton

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.addBtn.main,
		color: theme.palette.addBtn.contrastText,
		'&:hover': {
			backgroundColor: theme.palette.addBtn.dark,
		},

	},
}))(Button);