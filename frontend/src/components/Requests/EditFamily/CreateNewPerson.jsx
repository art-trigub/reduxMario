import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import IBoxBody from '../../CommonsComponents/Iboxes/IBoxBody';
import Datapicker from '../../Clients/ClientView/Family/Datapicker'
import { saveDateNewPerson } from '../../../store/actions/requests/requests'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';

import { getData } from '../../../store/actions/libraries/healthInsurance'
import { onChangeCheckBoxCreatePerson } from '../../../store/actions/requests/requests'




function CreateNewPeople({ data, onChange, saveDateNewPerson, list, getListHealthInsurance, onChangeCheckBoxCreatePerson, statusList }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [smoking, setSmoking] = useState()
    const [didSmoking, setDidSmoking] = useState()

    useEffect(() => {
        !list.length && getListHealthInsurance()
    }, [])

    function changeRadioSmoking(target) {
        setSmoking(target.checked)
        onChangeCheckBoxCreatePerson(target)
    }

    function changeRadioDidSmoking(target) {
        setDidSmoking(target.checked)
        onChangeCheckBoxCreatePerson(target)
    }

    function handleDateOfBirth(date) {
        saveDateNewPerson(date)
    };

    return (
        <div>
            <div className="edit-family__wrapper">
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">
                        <Grid container spacing={2} alignItems='center'>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("status")}</InputLabel>
                                    <Select name='status' value={data.status} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        {statusList.map(item => (
                                            <MenuItem key={item.id} value={item.id}>{t(item.title)}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
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

                            <Grid item xs={6}>
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

                            <Grid item xs={6}>
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

                            <Grid item xs={6}>
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

                            <Grid item xs={6}>
                                <Datapicker data={data.dateOfBirth} onChange={handleDateOfBirth} />
                            </Grid>



                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("hospitalCassa")}</InputLabel>
                                    <Select name='hospitalCassa' value={data.hospitalCassa} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        {list.map((item) => (
                                            <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("gender")}</InputLabel>
                                    <Select name='gender' value={data.gender} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        <MenuItem value="1">{t("man")}</MenuItem>
                                        <MenuItem value="2">{t("women")}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
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

                            <Grid item xs={6}>
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
                                    checked={data.smoking || false}
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
                                            checked={data.didSmoking || false}
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



function mapStateToProps({ request, healthInsurance, clientsFamilyStatusData }) {
    return {
        data: request.newPersonData,
        list: healthInsurance.list,
        statusList: clientsFamilyStatusData.relativeStatusList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveDateNewPerson: bindActionCreators(saveDateNewPerson, dispatch),
        getListHealthInsurance: bindActionCreators(getData, dispatch),
        onChangeCheckBoxCreatePerson: bindActionCreators(onChangeCheckBoxCreatePerson, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPeople);
