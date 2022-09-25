import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box'
import Switch from '@material-ui/core/Switch';


import './style.css'
import IBoxBody from '../../../CommonsComponents/Iboxes/IBoxBody';
import { getData } from '../../../../store/actions/libraries/healthInsurance'



function AdditionalInfo({ data, modeView, modeEdit, onSave, setEditedData, editedData, setVisibleButton, list, getListHealthInsurance }) {
    setVisibleButton(true)
    const { t } = useTranslation()
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false)
    const [infoData, setInfoData] = useState(data)

    const [smoking, setDoSmoking] = useState(editedData.smoking);
    const [didSmoking, setDidSmoking] = useState(editedData.didSmoking)

    const handleChange = (event) => {
        if (event.target.name == 'smoking') setDoSmoking(event.target.value);
        if (event.target.name == 'didSmoking') setDidSmoking(event.target.value);
    }

    useEffect(() => {
        list == null && getListHealthInsurance()
    }, [])

    function onEdit() {
        setEditMode(true)
    }

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

    return (
        <div className="edit-family__wrapper">

            {modeView &&
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">
                        <Grid container spacing={2} alignItems='flex-start'>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("gender")}</InputLabel>
                                    <Typography className="pt-4">
                                        {data.gender === '1' && t("man")}
                                        {data.gender === '2' && t("women")}

                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("maritalStatus")}</InputLabel>
                                    <Typography className="pt-4">
                                        {data.maritalStatus === '1' && t("married")}
                                        {data.maritalStatus === '2' && t("notMarried")}
                                        {data.maritalStatus === '3' && t("divorced")}
                                        {data.maritalStatus === '4' && t("marriedShe")}
                                        {data.maritalStatus === '5' && t("notMarriedShe")}
                                        {data.maritalStatus === '6' && t("divorcedShe")}


                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("quantityChildren")}</InputLabel>
                                    <Typography className="pt-4">{data.children}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("hospitalCassa")}</InputLabel>
                                    <Typography className="pt-4">{data.hospitalCassa}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("growth")}</InputLabel>
                                    <Typography className="pt-4">{data.growth}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("weight")}</InputLabel>
                                    <Typography className="pt-4">{data.weight}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("smoking")}</InputLabel>
                                    <Typography className="pt-4">{data.smoking ? t("yes") : t("no")}</Typography>
                                </Box>
                            </Grid>

                            {data.smoking === true &&
                                <>
                                    <Grid className="fixed-height__input" item xs={6}>
                                        <Box p={0}>
                                            <InputLabel shrink>{t("quantityCigarettes")}</InputLabel>
                                            <Typography className="pt-4">{data.quantityCigarettes}</Typography>
                                        </Box>
                                    </Grid>
                                </>
                            }
                            {data.smoking !== true && data.didSmoking === true &&
                                <>
                                    <Grid className="fixed-height__input" item xs={6}>
                                        <Box p={0}>
                                            <InputLabel shrink>{t("longOutSmoking")}</InputLabel>
                                            <Typography className="pt-4">{data.longOutSmoking && `${data.longOutSmoking} ${t("yearsAgo")}`}</Typography>
                                        </Box>
                                    </Grid>
                                </>
                            }

                        </Grid>
                    </div>
                </IBoxBody>
            }
            {modeEdit &&
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">
                        <Grid container spacing={2} alignItems='center'>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select_gender">{t("maritalStatus")}</InputLabel>
                                    {editedData.gender === '1'
                                        ?
                                        <Select name='maritalStatus' value={editedData.maritalStatus} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">
                                            <MenuItem value="1">{t("married")}</MenuItem>
                                            <MenuItem value="2">{t("notMarried")}</MenuItem>
                                            <MenuItem value="3">{t("divorced")}</MenuItem>
                                        </Select>

                                        :
                                        <Select name='maritalStatus' value={editedData.maritalStatus} onChange={onChange} labelId="demo-select_age-select-label" id="demo-simple-select">

                                            <MenuItem value="4">{t("marriedShe")}</MenuItem>
                                            <MenuItem value="5">{t("notMarriedShe")}</MenuItem>
                                            <MenuItem value="6">{t("divorcedShe")}</MenuItem>
                                        </Select>
                                    }

                                </FormControl>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <TextField
                                    type='number'
                                    className='fullWidth'
                                    onChange={onChange}
                                    label={t("quantityChildren")}
                                    name='children'
                                    value={editedData.children}
                                >
                                </TextField>
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
            }

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
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

function mapStateToProps({ healthInsurance }) {
    return {
        list: healthInsurance.list.length ? healthInsurance.list : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListHealthInsurance: bindActionCreators(getData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);
