import React, { useEffect, useContext } from 'react'
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


import '../style.css'

import { onChangeMainInfo, handleDateOfBirth, toNextPage } from '../../../store/actions/requests/requests'

import Datapicker from '../../Clients/ClientView/Family/Datapicker'


function EditMainInformation({ list, onChange, handleDateOfBirth, activeStep, handleBack, steps, handleNext }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Formik
            onSubmit={handleNext}
            enableReinitialize={true}
            initialValues={list}
            validate={(values) => {
                const errors = {}

                if (!values.firstName) {
                    errors.firstName = `${t("requiredField")}`;
                } else if (!/^([а-яё]+|[a-z]+)$/i.test(values.firstName)) {
                    errors.firstName = `${t("invalidFirstName")}`;
                }

                if (!values.surname) {
                    errors.surname = `${t("requiredField")}`;
                } else if (!/^([а-яё]+|[a-z]+)$/i.test(values.surname)) {
                    errors.surname = `${t("invalidLastName")}`;
                }

                if (!values.firstNameHebr) {
                    errors.firstNameHebr = `${t("requiredField")}`;
                }

                if (values.surnameHebr == "") {
                    errors.surnameHebr = `${t("requiredField")}`;
                }

                if (!values.tz) {
                    errors.tz = `${t("requiredField")}`;
                } else if (!/^[0-9]*$/.test(values.tz)) {
                    errors.tz = `${t("requiredField")}`;
                }

                if (!values.dateOfBirth) {
                    errors.dateOfBirth = `${t("requiredField")}`;
                }

                return errors;
            }}

        >
            {(props) => {
                return (
                    <Form>
                        <div className="mainInfo__wrapper">
                            <Grid className="mainInfo__wrapper-grid" container spacing={2} alignItems='center'>
                                <Grid item xs={6}>
                                    <TextField
                                        error={props.errors.firstName && props.touched.firstName}
                                        helperText={
                                            props.errors.firstName &&
                                            props.touched.firstName &&
                                            props.errors.firstName
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("firstName")}
                                        name='firstName'
                                        value={list.firstName}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        error={props.errors.firstNameHebr && props.touched.firstNameHebr}
                                        helperText={
                                            props.errors.firstNameHebr &&
                                            props.touched.firstNameHebr &&
                                            props.errors.firstNameHebr
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("firstNameHebr")}
                                        name='firstNameHebr'
                                        value={list.firstNameHebr}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        error={props.errors.surname && props.touched.surname}
                                        helperText={
                                            props.errors.surname &&
                                            props.touched.surname &&
                                            props.errors.surname
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("surname")}
                                        name='surname'
                                        value={list.surname}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        error={props.errors.surnameHebr && props.touched.surnameHebr}
                                        helperText={
                                            props.errors.surnameHebr &&
                                            props.touched.surnameHebr &&
                                            props.errors.surnameHebr
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("surnameHebr")}
                                        name='surnameHebr'
                                        value={list.surnameHebr}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item xs={7}>
                                    <TextField
                                        error={props.errors.tz && props.touched.tz}
                                        helperText={
                                            props.errors.tz &&
                                            props.touched.tz &&
                                            props.errors.tz
                                        }
                                        onBlur={props.handleBlur}
                                        type='text'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("tz")}
                                        name='tz'
                                        value={list.tz}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item xs={7}>
                                    <Datapicker
                                        error={props.errors.dateOfBirth && props.touched.dateOfBirth}
                                        helperText={
                                            props.errors.dateOfBirth &&
                                            props.touched.dateOfBirth &&
                                            props.errors.dateOfBirth
                                        }
                                        type="text"
                                        onBlur={props.handleBlur}
                                        data={list.dateOfBirth}
                                        onChange={handleDateOfBirth}
                                        value={list.dateOfBirth} />
                                </Grid>

                                {/* <div style={{ width: "100%" }}>
                    <Divider />

                </div> */}
                            </Grid>

                            <Grid className="mainInfo__wrapper-speaks" container spacing={2} alignItems='center'>

                                <Grid item xs={7}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("speaksRussian")}</InputLabel>
                                        <Select name='speaksRussian' value={list.speaksRussian} onChange={({ target }) => onChange(target)} labelId="demo-select_age-select-label" id="demo-simple-select">
                                            <MenuItem value="1">{t("good")}</MenuItem>
                                            <MenuItem value="2">{t("badly")}</MenuItem>
                                            <MenuItem value="3">{t("dontSpeak")}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={7}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("speaksHebrew")}</InputLabel>
                                        <Select name='speaksHebrew' value={list.speaksHebrew} onChange={({ target }) => onChange(target)} labelId="demo-select_age-select-label" id="demo-simple-select">
                                            <MenuItem value="1">{t("good")}</MenuItem>
                                            <MenuItem value="2">{t("badly")}</MenuItem>
                                            <MenuItem value="3">{t("dontSpeak")}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={7}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("speaksEnglish")}</InputLabel>
                                        <Select name='speaksEnglish' value={list.speaksEnglish} onChange={({ target }) => onChange(target)} labelId="demo-select_age-select-label" id="demo-simple-select">
                                            <MenuItem value="1">{t("good")}</MenuItem>
                                            <MenuItem value="2">{t("badly")}</MenuItem>
                                            <MenuItem value="3">{t("dontSpeak")}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div >
                        <div className="button-steps__wrapper">
                            <div className="btn">
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    {t("back")}
                                </Button>


                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? `${t("create")}` : `${t("next")}`}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )
            }}

        </Formik >
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 90,
        width: "100%",
        fontSize: 13,
        backgroundColor: "#fff"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

function mapStateToProps({ request }) {
    return {
        list: request.info
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: bindActionCreators(onChangeMainInfo, dispatch),
        handleDateOfBirth: bindActionCreators(handleDateOfBirth, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMainInformation);
