import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import IBoxBody from '../../../CommonsComponents/Iboxes/IBoxBody';
import Datapicker from './Datapicker'
import { saveDateNewUser, onChangeCheckBoxCreatePerson } from '../../../../store/actions/clientFamily'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';



function CreateNewPeople({ data, onChange, saveDateNewUser, onChangeCheckBoxCreatePerson }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [smoking, setSmoking] = useState()
    const [didSmoking, setDidSmoking] = useState()

    function changeRadioSmoking(target) {
        setSmoking(target.checked)
        onChangeCheckBoxCreatePerson(target)
    }

    function changeRadioDidSmoking(target) {
        setDidSmoking(target.checked)
        onChangeCheckBoxCreatePerson(target)
    }

    function handleDateOfBirth(date) {
        saveDateNewUser(date.toLocaleDateString())
    };

    return (
        <div>
            <div className="edit-family__wrapper">
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">

                        <Grid container spacing={2} alignItems='center'>

                            <Grid className="fixed-height__input" item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("status")}</InputLabel>
                                    <Select name='status' value={data.status} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        <MenuItem value="1">{t("husband")}</MenuItem>
                                        <MenuItem value="2">{t("wife")}</MenuItem>
                                        <MenuItem value="3">{t("son")}</MenuItem>
                                        <MenuItem value="4">{t("daughter")}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("contacts")}
                                    name='contacts'
                                    value={data.contacts}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='text'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("firstName")}
                                    name='name'
                                    value={data.name}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='text'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("surname")}
                                    name='surname'
                                    value={data.surname}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("tz")}
                                    name='tz'
                                    value={data.tz}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Datapicker data={data.dateOfBirth} onChange={handleDateOfBirth} />
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("gender")}</InputLabel>
                                    <Select name='gender' value={data.gender} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        <MenuItem value="1">{t("man")}</MenuItem>
                                        <MenuItem value="2">{t("women")}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='text'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("hospitalCassa")}
                                    name='hospitalCassa'
                                    value={data.hospitalCassa}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("growth")}
                                    name='growth'
                                    value={data.growth}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("weight")}
                                    name='weight'
                                    value={data.weight}
                                >
                                </TextField>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel shrink style={{ marginTop: "10px" }}>{t("smoking")}</InputLabel>
                                <Switch
                                    name="smoking"
                                    checked={smoking || false}
                                    onChange={({ target }) => changeRadioSmoking(target)}
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                {smoking !== true &&
                                    <>
                                        <InputLabel shrink style={{ paddingLeft: "8px", marginTop: "10px" }} component="legend">{t("smokingBefore")}</InputLabel>
                                        <Switch
                                            name="didSmoking"
                                            checked={didSmoking || false}
                                            onChange={({ target }) => changeRadioDidSmoking(target)}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </>
                                }
                            </Grid>

                            {smoking === true &&
                                <Grid item xs={6}>
                                    <TextField
                                        type='number'
                                        className='fullWidth'
                                        onChange={onChange}
                                        label={t("quantityCigarettes")}
                                        name='quantityCigarettes'
                                        value={data.quantityCigarettes}
                                    >
                                    </TextField>
                                </Grid>
                            }
                            <Grid item xs={6}>
                                {didSmoking === true && smoking !== true &&

                                    <TextField
                                        type='number'
                                        className='fullWidth'
                                        onChange={onChange}
                                        label={t("longOutSmoking")}
                                        name='longOutSmoking'
                                        value={data.longOutSmoking}
                                    >
                                    </TextField>
                                }
                            </Grid>

                        </Grid>
                    </div>
                </IBoxBody>
            </div>
        </div>
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



function mapStateToProps({ clientFamily }) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveDateNewUser: bindActionCreators(saveDateNewUser, dispatch),
        onChangeCheckBoxCreatePerson: bindActionCreators(onChangeCheckBoxCreatePerson, dispatch)


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPeople);
