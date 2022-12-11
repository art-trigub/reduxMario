import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



export default function BasicBreadcrumbs({arr1, arr2}) {

    function breadCrumbsList(arr1, arr2) {
        if(arr1) return (
            <Typography color="text.primary">{arr1}</Typography>
        )

        if(arr1 && arr2) return (
            <>
                <Typography color="text.primary">{arr1}</Typography>
                <Typography color="text.primary">{arr2}</Typography>
            </>

        )
    }
  return (
    <div role="presentation" onClick={handleClick} className='breadcrumbs_wrap'>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Проекты
        </Link>
      </Breadcrumbs>
    </div>
  );
}