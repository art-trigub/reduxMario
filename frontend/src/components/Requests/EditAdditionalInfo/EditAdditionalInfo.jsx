import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import { onChangeAdditionalInfo, onChangeCheckBoxAdditionalInfo } from '../../../store/actions/requests/requests'
import { getData } from '../../../store/actions/libraries/healthInsurance'
import Datapicker from '../../Clients/ClientView/Family/Datapicker'


function EditAdditionalInfo({ list, onChange, listHospital, getListHealthInsurance, onChangeCheckBox, activeStep, handleBack, steps, handleNext }) {
    const classes = useStyles();
    const { t } = useTranslation();

    useEffect(() => {
        listHospital == null && getListHealthInsurance()
    }, [])

    return (
        <Formik
            onSubmit={handleNext}
            enableReinitialize={true}
            initialValues={list}
            validate={(values) => {
                const errors = {}

                if (!values.gender) {
                    errors.gender = `${t("requiredField")}`;
                }

                if (!values.maritalStatus) {
                    errors.maritalStatus = `${t("requiredField")}`;
                }

                if (!values.children) {
                    errors.children = `${t("requiredField")}`;
                }

                if (values.hospitalCassa == "") {
                    errors.hospitalCassa = `${t("requiredField")}`;
                }

                if (!values.growth) {
                    errors.growth = `${t("requiredField")}`;
                }

                if (!values.weight) {
                    errors.weight = `${t("requiredField")}`;
                }

                return errors;
            }
            }

        >
            {(props) => {
                return (
                    <Form>
                        <div className="additional-info_wrapper">
                            <Grid className="additional-info_wrapper-grid" container spacing={2}>
                                <Grid item xs={7}>
                                    <FormControl error={props.errors.gender && props.touched.gender}
                                        helpertext={
                                            props.errors.gender &&
                                            props.touched.gender &&
                                            props.errors.gender
                                        }
                                        onBlur={props.handleBlur}
                                        className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("gender")}</InputLabel>
                                        <Select

                                            name='gender'
                                            value={list.gender}
                                            onChange={({ target }) => onChange(target)}
                                            labelId="demo-select_age-select-label"
                                            id="demo-simple-select"
                                        >
                                            <MenuItem value='1'>{t("man")}</MenuItem>
                                            <MenuItem value='2'>{t("women")}</MenuItem>
                                        </Select>
                                        {props.errors.gender && props.touched.gender &&
                                            <FormHelperText id="my-helper-text">{t("requiredField")}</FormHelperText>}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={7}>
                                    <FormControl error={props.errors.maritalStatus && props.touched.maritalStatus}

                                        onBlur={props.handleBlur}
                                        className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("maritalStatus")}</InputLabel>
                                        {list.gender == 1
                                            ?
                                            <Select
                                                value={list.maritalStatus}
                                                name='maritalStatus'
                                                onChange={({ target }) => onChange(target)}
                                                labelId="select_gender"
                                                id="demo-simple-select"
                                            >
                                                <MenuItem value="1">{t("married")}</MenuItem>
                                                <MenuItem value="2">{t("notMarried")}</MenuItem>
                                                <MenuItem value="3">{t("divorced")}</MenuItem>
                                            </Select>
                                            :
                                            <Select
                                                name='maritalStatus'
                                                value={list.maritalStatus}
                                                onChange={({ target }) => onChange(target)}
                                                labelId="demo-select_age-select-label"
                                                id="demo-simple-select">

                                                <MenuItem value="4">{t("marriedShe")}</MenuItem>
                                                <MenuItem value="5">{t("notMarriedShe")}</MenuItem>
                                                <MenuItem value="6">{t("divorcedShe")}</MenuItem>
                                            </Select>
                                        }
                                        {props.errors.maritalStatus && props.touched.maritalStatus &&
                                            <FormHelperText id="my-helper-text">{t("requiredField")}</FormHelperText>
                                        }
                                    </FormControl>
                                </Grid>

                                <Grid item xs={7}>
                                    <TextField
                                        error={props.errors.children && props.touched.children}
                                        helperText={
                                            props.errors.children &&
                                            props.touched.children &&
                                            props.errors.children
                                        }
                                        onBlur={props.handleBlur}
                                        type='number'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("quantityChildren")}
                                        name='children'
                                        value={list.children}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item xs={7}>
                                    <FormControl error={props.errors.hospitalCassa && props.touched.hospitalCassa}
                                        helpertext={
                                            props.errors.hospitalCassa &&
                                            props.touched.hospitalCassa &&
                                            props.errors.hospitalCassa
                                        }
                                        onBlur={props.handleBlur}
                                        className={classes.formControl}>
                                        <InputLabel id="select_gender">{t("hospitalCassa")}</InputLabel>
                                        <Select

                                            name='hospitalCassa'
                                            value={list.hospitalCassa}
                                            onChange={({ target }) => onChange(target)}
                                            labelId="demo-select_age-select-label"
                                            id="demo-simple-select">
                                            {listHospital && listHospital.map((item) => (
                                                <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>
                                            ))}
                                        </Select>
                                        {props.errors.hospitalCassa && props.touched.hospitalCassa &&
                                            <FormHelperText id="my-helper-text">{t("requiredField")}</FormHelperText>
                                        }

                                    </FormControl>
                                </Grid>

                                <Grid item xs={7}>
                                    <TextField
                                        error={props.errors.growth && props.touched.growth}
                                        helperText={
                                            props.errors.growth &&
                                            props.touched.growth &&
                                            props.errors.growth
                                        }
                                        onBlur={props.handleBlur}
                                        type='number'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("growth")}
                                        name='growth'
                                        value={list.growth}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item xs={7}>
                                    <TextField
                                        error={props.errors.weight && props.touched.weight}
                                        helperText={
                                            props.errors.weight &&
                                            props.touched.weight &&
                                            props.errors.weight
                                        }
                                        onBlur={props.handleBlur}
                                        type='number'
                                        className='fullWidth'
                                        onChange={({ target }) => onChange(target)}
                                        label={t("weight")}
                                        name='weight'
                                        value={list.weight}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>

                            <Grid className="additional-info_wrapper-grid" container spacing={2} >
                                <Grid item xs={3}>
                                    <InputLabel shrink style={{ marginTop: "10px" }}>{t("smoking")}</InputLabel>
                                    <Switch
                                        name="smoking"
                                        checked={list.smoking || false}
                                        onChange={({ target }) => onChangeCheckBox(target)}
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </Grid>
                                <Grid item xs={4}>

                                    {list.smoking !== true &&
                                        <>
                                            <InputLabel shrink style={{ paddingLeft: "8px", marginTop: "10px" }} component="legend">{t("smokingBefore")}</InputLabel>
                                            <Switch
                                                name="didSmoking"
                                                checked={list.didSmoking || false}
                                                onChange={({ target }) => onChangeCheckBox(target)}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </>
                                    }
                                </Grid>

                            </Grid>

                            <Grid className="additional-info_wrapper-grid" container spacing={2}>
                                {list.smoking == true &&
                                    <Grid item xs={7}>
                                        <TextField
                                            type='number'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("quantityCigarettes")}
                                            name='quantityCigarettes'
                                            value={list.quantityCigarettes}
                                        >
                                        </TextField>
                                    </Grid>
                                }
                                {list.didSmoking === true && list.smoking !== true &&
                                    <Grid item xs={7}>
                                        <TextField
                                            type='number'
                                            className='fullWidth'
                                            onChange={({ target }) => onChange(target)}
                                            label={t("longOutSmoking")}
                                            name='longOutSmoking'
                                            value={list.longOutSmoking}
                                        >
                                        </TextField>
                                    </Grid>
                                }
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
            }
            }
        </ Formik >

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

function mapStateToProps({ request, healthInsurance }) {
    return {
        list: request.additionalInfo,
        listHospital: healthInsurance.list.length ? healthInsurance.list : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: bindActionCreators(onChangeAdditionalInfo, dispatch),
        getListHealthInsurance: bindActionCreators(getData, dispatch),
        onChangeCheckBox: bindActionCreators(onChangeCheckBoxAdditionalInfo, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAdditionalInfo);
