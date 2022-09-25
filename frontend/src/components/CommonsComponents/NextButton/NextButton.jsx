import React from 'react'
import Button from '@material-ui/core/Button';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles'


function NextButton({ onClick, onChange, id, className, type, style }) {

	const { t } = useTranslation()
	const theme = useTheme()

	return (
		<IButton
			onClick={onClick}
			onChange={onChange}
			id={id}
			type={type}
			className={className}
			style={style}
			variant='outlined'
			startIcon={theme.direction === 'rtl' ? <FastRewindIcon /> : <FastForwardIcon />}
		>
			{t('next')}
		</IButton>
	)
}

export default NextButton

const IButton = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.nextBtn.main,
		color: theme.palette.nextBtn.contrastText,
		'&:hover': {
			backgroundColor: theme.palette.nextBtn.dark,
		},

	},
}))(Button);