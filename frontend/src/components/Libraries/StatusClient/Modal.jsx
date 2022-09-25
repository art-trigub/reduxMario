import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'
import { Formik, Form } from 'formik';



export default function CustomizedDialogs({ visible, closeModal, onSave, editMode, editItem, editingItem, setEditMode }) {
    const classes = useStyles();
    const { t } = useTranslation();

    const [item, setItem] = useState({
        titleRus: '',
        titleHeb: '',
        monthlyFee: ''
    })

    useEffect(() => {
        editMode && setItem(editingItem)
    }, [])

    function onSaveItem() {
        editMode ? editItem(item) : onSave(item)
        closeModal()

    }

    function onCancel() {
        closeModal()
    }

    function onChange(target) {
        setItem({
            ...item,
            [target.name]: target.value
        })
    }
    return (
        <div>
            <Dialog className="modal" onClose={closeModal} aria-labelledby="customized-dialog-title" open={visible} >
                <DialogTitle id="customized-dialog-title" onClose={closeModal}>
                    {editMode
                        ? t("changing")
                        : t("adding")
                    }
                </DialogTitle>
                <Formik
                    onSubmit={onSaveItem}
                    enableReinitialize={true}
                    initialValues={item}
                    validate={(values) => {
                        const errors = {}

                        if (!values.titleHeb) {
                            errors.titleHeb = `${t("requiredField")}`;
                        }

                        if (!values.monthlyFee) {
                            errors.monthlyFee = `${t("requiredField")}`;
                        }


                        return errors;
                    }
                    }

                >
                    {(props) => {
                        return (
                            <Form>
                                <DialogContent dividers>
                                    <TextField
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("titleRus")}
                                        name='titleRus'
                                        value={item.titleRus}
                                    >
                                    </TextField>

                                    <TextField
                                        error={props.errors.titleHeb && props.touched.titleHeb}
                                        helperText={
                                            props.errors.titleHeb &&
                                            props.touched.titleHeb &&
                                            props.errors.titleHeb
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("titleHeb")}
                                        name='titleHeb'
                                        value={item.titleHeb}
                                    >
                                    </TextField>
                                    <TextField
                                        error={props.errors.monthlyFee && props.touched.monthlyFee}
                                        helperText={
                                            props.errors.monthlyFee &&
                                            props.touched.monthlyFee &&
                                            props.errors.monthlyFee
                                        }
                                        onBlur={props.handleBlur}
                                        type='number'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("monthlyFee")}
                                        name='monthlyFee'
                                        value={item.monthlyFee}
                                    ></TextField>


                                </DialogContent>
                                <DialogActions>
                                    <SaveButton type="submit" />
                                    <CancelButton onClick={closeModal} />
                                </DialogActions>
                            </Form>
                        )
                    }}
                </Formik>

            </Dialog>
        </div>
    );
}



const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },

}))(MuiDialogActions);