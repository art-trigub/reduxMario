import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IBoxBody from '../../CommonsComponents/Iboxes/IBoxBody';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import Datapicker from '../../Clients/ClientView/Family/Datapicker'
import { saveChangedPersonData } from '../../../store/actions/clientFamily'
import { getData } from '../../../store/actions/libraries/healthInsurance'


function EditFamilyPerson({ data, saveChangedPersonData, list, getListHealthInsurance, setCurrentEditingPerson, statusList }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [editedData, setEditedData] = useState(data)


    useEffect(() => {
        !list.length && getListHealthInsurance()
        setCurrentEditingPerson(data)
    }, [])

    function onChange({ target }) {
        setEditedData({
            ...editedData,
            [target.name]: target.value
        })
    }

    function onChangeCheckBox(target) {
        setEditedData({
            ...editedData,
            [target.name]: target.checked
        })
    }

    const handleDateOfBirth = (date) => {
        setEditedData({
            ...editedData,
            dateOfBirth: date
        });
    };

    useEffect(() => {
        saveChangedPersonData(editedData)
    }, [editedData])

    return (
        <div>
            <div className="edit-family__wrapper">
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">
                        <Grid spacing={2} container>
                            <Grid className="fixed-height__input" item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("status")}</InputLabel>
                                    <Select name='status' value={editedData.status} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        {statusList.map(item => (
                                            <MenuItem key={item.id} value={item.id}>{t(item.title)}</MenuItem>
                                        ))}
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
                                    value={editedData.contacts}
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
                                    value={editedData.name}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='text'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("surname")}
                                    name="surname"
                                    value={editedData.surname}
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
                                    value={editedData.tz}
                                >
                                </TextField>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Datapicker data={editedData.dateOfBirth} onChange={handleDateOfBirth} />
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("hospitalCassa")}</InputLabel>
                                    <Select name='hospitalCassa' value={editedData.hospitalCassa} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        {list.map((item) => (
                                            <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("gender")}</InputLabel>
                                    <Select name='gender' value={editedData.gender} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                        <MenuItem value="1">{t("man")}</MenuItem>
                                        <MenuItem value="2">{t("women")}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("growth")}
                                    name='growth'
                                    value={editedData.growth}
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
                                    value={editedData.weight}
                                >
                                </TextField>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel shrink style={{ marginTop: "10px" }}>{t("smoking")}</InputLabel>
                                <Switch
                                    name="smoking"
                                    checked={editedData.smoking || false}
                                    onChange={({ target }) => onChangeCheckBox(target)}
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />

                            </Grid>


                            <Grid item xs={6}>
                                {editedData.smoking !== true &&
                                    <>
                                        < InputLabel shrink style={{ paddingLeft: "8px", marginTop: "10px" }} component="legend">{t("smokingBefore")}</InputLabel>
                                        <Switch
                                            name="didSmoking"
                                            checked={editedData.didSmoking || false}
                                            onChange={({ target }) => onChangeCheckBox(target)}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </>
                                }
                            </Grid>

                            {editedData.smoking === true &&
                                <Grid className="fixed-height__input" item xs={6}>
                                    <TextField
                                        type='number'
                                        className='fullWidth'
                                        onChange={onChange}
                                        label={t("quantityCigarettes")}
                                        name='quantityCigarettes'
                                        value={editedData.quantityCigarettes}
                                    >
                                    </TextField>
                                </Grid>
                            }
                            {editedData.didSmoking === true && editedData.smoking !== true &&
                                <Grid className="fixed-height__input" item xs={6}>
                                    <TextField
                                        type='number'
                                        className='fullWidth'
                                        onChange={onChange}
                                        label={t("longOutSmoking")}
                                        name='longOutSmoking'
                                        value={editedData.longOutSmoking}
                                    >
                                    </TextField>
                                </Grid>
                            }


                        </Grid>
                    </div>

                </IBoxBody>
            </div>
        </div >
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
        editedPerson: request.editedPerson,
        list: healthInsurance.list,
        statusList: clientsFamilyStatusData.relativeStatusList

    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveChangedPersonData: bindActionCreators(saveChangedPersonData, dispatch),
        getListHealthInsurance: bindActionCreators(getData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFamilyPerson);
