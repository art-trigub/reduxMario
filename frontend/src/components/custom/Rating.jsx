import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        className='rating_wrap'
        name="simple-controlled"
        value={value}
        size="small"
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
    </Box>
  );
}