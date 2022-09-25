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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'
import { saveNewContact, saveEditingContact } from '../../../store/actions/requests/requests'



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
    saveNewContact,
    emptyNewContact,
    setNewContact,
    saveEditingContact,
    onChangeCheckBox
}) {

    const { t } = useTranslation();
    const classes = useStyles()
    const [item, setItem] = useState({
        contact: '',
        type: '',
        main: '',
        active: '',
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

    function saveDataToTable(data) {
        data.id
            ? saveEditingContact(data)
            : saveNewContact(data)
        setVisibleModal(false)
        setNewContact(emptyNewContact)
    }

    return (
        <div>
            <Dialog spacing={2} onClose={closeModal} aria-labelledby="customized-dialog-title" open={visible} >
                <DialogTitle id="customized-dialog-title" onClose={closeModal}>
                    {editMode
                        ? t("changeContact")
                        : t("addContact")

                    }
                </DialogTitle>
                <Formik
                    onSubmit={() => saveDataToTable(data)}
                    enableReinitialize={true}
                    initialValues={data}
                    validate={(values) => {
                        const errors = {}

                        if (!values.type) {
                            errors.type = `${t("requiredField")}`;
                        }

                        if (!values.contact) {
                            errors.contact = `${t("requiredField")}`;
                        }

                        if (values.type === 'Мобильный телефон' && !values.code_mobile) {
                            errors.code_mobile = `${t("requiredField")}`;
                        }

                        if (values.type === 'Домашний телефон' && !values.code_home) {
                            errors.code_home = `${t("requiredField")}`;
                        }

                        if (values.type === 'Факс' && !values.code_fax) {
                            errors.code_fax = `${t("requiredField")}`;
                        }

                        return errors;
                    }
                    }

                >
                    {(props) => {
                        return (
                            <Form>
                                <>
                                    <DialogContent style={{ overflow: "hidden" }} dividers>
                                        <FormControl className="fullWidth">

                                            <InputLabel id="type">{t("type")}</InputLabel>
                                            <Select
                                                error={props.errors.type && props.touched.type}
                                                helperText={
                                                    props.errors.type &&
                                                    props.touched.type &&
                                                    props.errors.type
                                                }
                                                onBlur={props.handleBlur}
                                                style={{ display: "block" }}
                                                name='type'
                                                value={data.type}
                                                onChange={({ target }) => onChange(target)}
                                                labelId="type" id="demo-simple-select">
                                                <MenuItem value="0">{t("specifyType")}</MenuItem>
                                                <MenuItem value="1">Email</MenuItem>
                                                <MenuItem value="2">{t("mobilePhone")}</MenuItem>
                                                <MenuItem value="3">{t("homePhone")}</MenuItem>
                                                <MenuItem value="4">{t("fax")}</MenuItem>
                                            </Select>
                                        </FormControl>


                                        {data.type === '1' &&
                                            <>
                                                <FormControl className="fullWidth">
                                                    <TextField
                                                        error={props.errors.contact && props.touched.contact}
                                                        helperText={
                                                            props.errors.contact &&
                                                            props.touched.contact &&
                                                            props.errors.contact
                                                        }
                                                        onBlur={props.handleBlur}
                                                        type="text"
                                                        label={t("contact")}
                                                        name="contact"
                                                        value={data.contact}
                                                        onChange={({ target }) => onChange(target)}
                                                    />
                                                </FormControl>

                                            </>
                                        }
                                        {data.type === '2' &&
                                            <div className="edit-contact__contact-wraper">
                                                <div className="edit-contact__code-wrapper">
                                                    <FormControl className="fullWidth">
                                                        <InputLabel>{t("code")}</InputLabel>
                                                        <Select
                                                            error={props.errors.code_mobile && props.touched.code_mobile}
                                                            helperText={
                                                                props.errors.code_mobile &&
                                                                props.touched.code_mobile &&
                                                                props.errors.code_mobile
                                                            }
                                                            onBlur={props.handleBlur}
                                                            name='code_mobile'
                                                            value={data.code_mobile}
                                                            onChange={({ target }) => onChange(target)}
                                                            labelId="demo-select_age-select-label"
                                                            id="demo-simple-select">
                                                            <MenuItem value="050">050</MenuItem>
                                                            <MenuItem value="051">051</MenuItem>
                                                            <MenuItem value="052">052</MenuItem>
                                                            <MenuItem value="053">053</MenuItem>
                                                            <MenuItem value="054">054</MenuItem>
                                                            <MenuItem value="055">055</MenuItem>
                                                            <MenuItem value="058">058</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="edit-contact__number-wrapper">
                                                    <TextField
                                                        error={props.errors.contact && props.touched.contact}
                                                        helperText={
                                                            props.errors.contact &&
                                                            props.touched.contact &&
                                                            props.errors.contact
                                                        }
                                                        onBlur={props.handleBlur}
                                                        type='number'
                                                        className='fullWidth'
                                                        onChange={({ target }) => onChange(target)}
                                                        name='contact'
                                                        value={data.contact}
                                                        label={t("contact")}
                                                    >
                                                    </TextField>
                                                </div>


                                            </div>
                                        }
                                        {data.type === '3' &&
                                            <>
                                                <div className="edit-contact__contact-wraper">
                                                    <div className="edit-contact__code-wrapper">
                                                        <FormControl className="fullWidth">

                                                            <InputLabel>{t("code")}</InputLabel>
                                                            <Select
                                                                error={props.errors.code_home && props.touched.code_home}
                                                                helperText={
                                                                    props.errors.code_home &&
                                                                    props.touched.code_home &&
                                                                    props.errors.code_home
                                                                }
                                                                onBlur={props.handleBlur}
                                                                style={{ display: "inline-block" }}
                                                                name='code_home'
                                                                value={data.code_home}
                                                                onChange={({ target }) => onChange(target)}
                                                                labelId="demo-select_age-select-label"
                                                                id="demo-simple-select">
                                                                <MenuItem value="02">02</MenuItem>
                                                                <MenuItem value="03">03</MenuItem>
                                                                <MenuItem value="04">04</MenuItem>
                                                                <MenuItem value="08">08</MenuItem>
                                                                <MenuItem value="09">09</MenuItem>
                                                                <MenuItem value="072">072</MenuItem>
                                                                <MenuItem value="073">073</MenuItem>
                                                                <MenuItem value="074">074</MenuItem>
                                                                <MenuItem value="076">076</MenuItem>
                                                                <MenuItem value="077">077</MenuItem>
                                                                <MenuItem value="078">078</MenuItem>
                                                                <MenuItem value="079">079</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                    </div>
                                                    <div className="edit-contact__number-wrapper">
                                                        <TextField
                                                            error={props.errors.contact && props.touched.contact}
                                                            helperText={
                                                                props.errors.contact &&
                                                                props.touched.contact &&
                                                                props.errors.contact
                                                            }
                                                            onBlur={props.handleBlur}
                                                            label={t("contact")}
                                                            type="number"
                                                            name="contact"
                                                            value={data.contact}
                                                            onChange={({ target }) => onChange(target)}
                                                        />
                                                    </div>
                                                </div>


                                            </>
                                        }
                                        {data.type === '4' &&
                                            <>
                                                <div className="edit-contact__contact-wraper">
                                                    <div className="edit-contact__code-wrapper">
                                                        <FormControl className="fullWidth">
                                                            <InputLabel>{t("code")}</InputLabel>
                                                            <Select
                                                                error={props.errors.code_fax && props.touched.code_fax}
                                                                helperText={
                                                                    props.errors.code_fax &&
                                                                    props.touched.code_fax &&
                                                                    props.errors.code_fax
                                                                }
                                                                onBlur={props.handleBlur}
                                                                style={{ display: "inline-block" }}
                                                                name='code_fax'
                                                                value={data.code_fax}
                                                                onChange={({ target }) => onChange(target)}
                                                                labelId="demo-select_age-select-label"
                                                                id="demo-simple-select">
                                                                <MenuItem value="02">02</MenuItem>
                                                                <MenuItem value="03">03</MenuItem>
                                                                <MenuItem value="04">04</MenuItem>
                                                                <MenuItem value="08">08</MenuItem>
                                                                <MenuItem value="09">09</MenuItem>
                                                                <MenuItem value="072">072</MenuItem>
                                                                <MenuItem value="073">073</MenuItem>
                                                                <MenuItem value="074">074</MenuItem>
                                                                <MenuItem value="076">076</MenuItem>
                                                                <MenuItem value="077">077</MenuItem>
                                                                <MenuItem value="078">078</MenuItem>
                                                                <MenuItem value="079">079</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                    </div>
                                                    <div className="edit-contact__number-wrapper">
                                                        <TextField
                                                            error={props.errors.contact && props.touched.contact}
                                                            helperText={
                                                                props.errors.contact &&
                                                                props.touched.contact &&
                                                                props.errors.contact
                                                            }
                                                            onBlur={props.handleBlur}
                                                            type="number"
                                                            label={t("contact")}
                                                            name="contact"
                                                            value={data.contact}
                                                            onChange={({ target }) => onChange(target)}
                                                        />
                                                    </div>
                                                </div>

                                            </>
                                        }

                                        {/* <Grid container style={{ marginTop: "10px" }}>
                        <Grid item xs={6}>
                            < InputLabel shrink>Основной</InputLabel>
                            <Switch
                                labelId="main"
                                name="main"
                                checked={data.main || false}
                                onChange={({ target }) => onChangeCheckBox(target)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel shrink>Активный</InputLabel>
                            <Switch
                                name="active"
                                checked={data.active || false}
                                onChange={({ target }) => onChangeCheckBox(target)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                    </Grid> */}


                                    </DialogContent>
                                    <DialogActions>
                                        <CancelButton onClick={closeModal} />
                                        <SaveButton type="submit" />
                                    </DialogActions>
                                </>
                            </Form>
                        )
                    }
                    }
                </ Formik >
            </Dialog >
        </div >
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
    formControl: {
        minWidth: 90,
        width: "100%",
        fontSize: 13,
        backgroundColor: "#fff"
    },
}));

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },

}))(MuiDialogActions);

function mapStateToProps({ request }) {
    return {
        newAdress: request.newAdress
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewContact: bindActionCreators(saveNewContact, dispatch),
        saveEditingContact: bindActionCreators(saveEditingContact, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogs);
