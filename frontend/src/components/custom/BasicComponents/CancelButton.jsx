import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CancelButton({
	onClick,
	onChange,
	id,
	className,
	type,
	style,
	text,
	disabled,
}) {
  return (
    <Stack direction="row" spacing={2}>
        <Button
			onClick={onClick}
			onChange={onChange}
			id={id}
			type={type}
			className={className}
			style={style}
			sx={{minWidth: '70px;'}}
			variant="outlined"
			color="primary"
			disabled={disabled}
			size=""
		>
			{text ? text :"cancel"}
		</Button>
  </Stack>
  )
}
