import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import '../style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: "90px",
            backgroundColor: "#fff",
            borderRadius: 3,
            boxSizing: "content-box",
            fontSize: 13
        },
    },
}));

export default function Inputs({ onChange, name }) {
    const classes = useStyles();

    const theme = useTheme()

    return (
        <TextField color='secondary' style={{ display: 'flex', alignItems: 'flex-end' }} className={classes.root} label="" variant="outlined" onChange={onChange} name={name} />
    );
}

