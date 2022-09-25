import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Formik, Form } from 'formik';
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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText'


import { getData } from '../../../store/actions/libraries/cities'
import '../style.css'



import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'
import { saveNewAdress, saveEditingAdress } from '../../../store/actions/requests/requests'


function CustomizedDialogs({
    visible,
    setVisibleModal,
    onChange,
    data,
    closeModal,
    onSave,
    editMode,
    editItem,
    editingItem,
    setEditMode,
    saveNewAdress,
    emptyNewAdress,
    setNewAdress,
    saveEditingAdress,
    getDataCitiesList,
    citiesList
}) {

    const { t } = useTranslation();
    const classes = useStyles()
    const [item, setItem] = useState({
        city: '',
        street: '',
        streetHeb: '',
        house: '',
        appartament: '',
        entrance: ''
    })

    useEffect(() => {
        citiesList.length == 0 && getDataCitiesList()
    }, [])


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

    function saveDataToTable(data) {
        data.id
            ? saveEditingAdress(data)
            : saveNewAdress(data)
        setVisibleModal(false)
        setNewAdress(emptyNewAdress)
    }


    return (
        <div>
            <Dialog className="adresses__modal" onClose={closeModal} aria-labelledby="customized-dialog-title" open={visible} >
                <DialogTitle id="customized-dialog-title" onClose={closeModal}>
                    {editMode
                        ? `${t("changeAddress")}`
                        : `${t("addAddress")}`

                    }
                </DialogTitle>
                <Formik
                    onSubmit={() => saveDataToTable(data)}
                    enableReinitialize={true}
                    initialValues={data}
                    validate={(values) => {
                        const errors = {}

                        if (!values.city) {
                            errors.city = `${t("requiredField")}`;
                        }

                        if (!values.street) {
                            errors.street = `${t("requiredField")}`;
                        }

                        if (!values.streetHeb) {
                            errors.streetHeb = `${t("requiredField")}`;
                        }

                        if (values.house == "") {
                            errors.house = `${t("requiredField")}`;
                        }

                        if (!values.appartament) {
                            errors.appartament = `${t("requiredField")}`;
                        }

                        if (!values.entrance) {
                            errors.entrance = `${t("requiredField")}`;
                        }

                        return errors;
                    }
                    }

                >
                    {(props) => {
                        return (
                            <>

                                <Form>
                                    <DialogContent dividers>

                                        <FormControl error={props.errors.city && props.touched.city}
                                            helpertext={
                                                props.errors.city &&
                                                props.touched.city &&
                                                props.errors.city
                                            }
                                            onBlur={props.handleBlur}
                                            className={classes.formControl}>
                                            <InputLabel id="select_city">{t("city")}</InputLabel>
                                            <Select
                                                className="fullWidth"
                                                name='city'
                                                value={data.city}
                                                onChange={({ target }) => onChange(target)}
                                            >
                                                {citiesList.map((item, index) => (
                                                    <MenuItem key={index} value={item.titleRus}>{item.titleRus}</MenuItem>
                                                ))}
                                            </Select>
                                            {props.errors.city && props.touched.city &&
                                                <FormHelperText id="my-helper-text">{t("requiredField")}</FormHelperText>}
                                        </FormControl>
                                        <TextField
                                            error={props.errors.street && props.touched.street}
                                            helperText={
                                                props.errors.street &&
                                                props.touched.street &&
                                                props.errors.street
                                            }
                                            onBlur={props.handleBlur}
                                            type='text'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("street")}
                                            name='street'
                                            value={data.street}
                                        ></TextField>
                                        <TextField
                                            error={props.errors.streetHeb && props.touched.streetHeb}
                                            helperText={
                                                props.errors.streetHeb &&
                                                props.touched.streetHeb &&
                                                props.errors.streetHeb
                                            }
                                            onBlur={props.handleBlur}
                                            type='text'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("streetHeb")}
                                            name='streetHeb'
                                            value={data.streetHeb}
                                        ></TextField>
                                        <TextField
                                            error={props.errors.house && props.touched.house}
                                            helperText={
                                                props.errors.house &&
                                                props.touched.house &&
                                                props.errors.house
                                            }
                                            onBlur={props.handleBlur}
                                            type='text'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("house")}
                                            name='house'
                                            value={data.house}
                                        ></TextField>
                                        <TextField
                                            error={props.errors.appartament && props.touched.appartament}
                                            helperText={
                                                props.errors.appartament &&
                                                props.touched.appartament &&
                                                props.errors.appartament
                                            }
                                            onBlur={props.handleBlur}
                                            type='text'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("apartment")}
                                            name='appartament'
                                            value={data.appartament}
                                        ></TextField>
                                        <TextField
                                            error={props.errors.entrance && props.touched.entrance}
                                            helperText={
                                                props.errors.entrance &&
                                                props.touched.entrance &&
                                                props.errors.entrance
                                            }
                                            onBlur={props.handleBlur}
                                            type='text'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("entrance")}
                                            name='entrance'
                                            value={data.entrance}
                                        ></TextField>
                                    </DialogContent>
                                    <DialogActions>
                                        <CancelButton onClick={closeModal} />
                                        <SaveButton type="submit" />
                                    </DialogActions>
                                </Form>
                            </>
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
            margin: "8px 0px",

        },
    },
    formControl: {
        width: "100%"
    }
}));

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },

}))(MuiDialogActions);

function mapStateToProps({ request, cities }) {
    return {
        newAdress: request.newAdress,
        citiesList: cities.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewAdress: bindActionCreators(saveNewAdress, dispatch),
        saveEditingAdress: bindActionCreators(saveEditingAdress, dispatch),
        getDataCitiesList: bindActionCreators(getData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogs);
