import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'
import { getData } from '../../../store/actions/libraries/regions'





export function CustomizedDialogs({ visible, closeModal, onSave, editMode, editItem, editingItem, setEditMode, listRegions, getDataListRegions }) {
    const classes = useStyles();
    const { t } = useTranslation();

    useEffect(() => {
        listRegions == null && getDataListRegions()
    }, [])


    const [item, setItem] = useState({
        titleRus: '',
        titleHeb: '',
        dateAdded: '',
        whoAdded: '',
        region: ''
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

            <Dialog onClose={closeModal} aria-labelledby="customized-dialog-title" open={visible} >
                <Formik
                    onSubmit={onSaveItem}
                    enableReinitialize={true}
                    initialValues={item}
                    validate={(values) => {
                        const errors = {}

                        if (!values.titleHeb) {
                            errors.titleHeb = `${t("requiredField")}`;
                        }

                        if (!values.region) {
                            errors.region = `${t("requiredField")}`;
                        }

                        return errors;
                    }
                    }

                >
                    {(props) => {
                        return (
                            <Form>
                                <DialogTitle id="customized-dialog-title" onClose={closeModal}>
                                    {editMode
                                        ? t("changing")
                                        : t("adding")

                                    }
                                </DialogTitle>
                                <DialogContent dividers>
                                    {/* {editMode
                                        ? <InputLabel shrink>Редактирование городов</InputLabel>
                                        : <InputLabel shrink>Укажите город</InputLabel>
                                    } */}
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

                                    <FormControl error={props.errors.region && props.touched.region}
                                        helpertext={
                                            props.errors.region &&
                                            props.touched.region &&
                                            props.errors.region
                                        }
                                        onBlur={props.handleBlur}
                                        className="fullWidth">
                                        <InputLabel id="select_gender">{t("region")}</InputLabel>
                                        <Select

                                            name='region'
                                            value={item.region}
                                            onChange={({ target }) => onChange(target)}
                                            className='fullWidth'
                                        >
                                            {listRegions && listRegions.map((elem) => (
                                                <MenuItem key={elem.id} value={elem.title}>{elem.title}</MenuItem>

                                            ))}
                                        </Select>
                                        {props.errors.region && props.touched.region &&
                                            <FormHelperText id="my-helper-text">{t("requiredField")}</FormHelperText>}
                                    </FormControl>
                                </DialogContent>
                                <DialogActions>
                                    <SaveButton type="submit" />
                                    <CancelButton onClick={closeModal} />
                                </DialogActions>
                            </Form>
                        )
                    }
                    }
                </ Formik >

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

function mapStateToProps({ regions }) {
    return {
        listRegions: regions.list.length ? regions.list : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDataListRegions: bindActionCreators(getData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogs);



