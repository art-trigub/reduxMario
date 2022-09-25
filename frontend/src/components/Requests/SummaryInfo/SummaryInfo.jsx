import React from 'react';
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import IBoxBody from '../../CommonsComponents/Iboxes/IBoxBody';
import Typography from '@material-ui/core/Typography'
import { format } from 'date-fns'

import TableAdresses from './TableAdresses'
import TableContacts from './TableContacts'
import TableFamily from './TableFamily'
import { Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader'




function SummaryInfo({ info, additionalInfo, adressesList, contactsList, familyList, activeStep, handleBack, steps, handleNext }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.root}>
                <Paper component='div' elevation={3}>
                    <IBoxHeader className="summary__paper-header">
                        {t("mainInformation")}
                    </IBoxHeader>
                    <Divider></Divider>
                    <IBoxBody className="summary__paper-body">
                        <Grid container spacing={2} alignItems='center'>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("firstName")}</InputLabel>
                                    <Typography>{info.firstName}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("surname")}</InputLabel>
                                    <Typography>{info.surname}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("firstNameHebr")}</InputLabel>
                                    <Typography>{info.firstNameHebr}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("surnameHebr")}</InputLabel>
                                    <Typography>{info.surnameHebr}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("tz")}</InputLabel>
                                    <Typography>{info.tz}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("dateOfBirth")}</InputLabel>
                                    <Typography>{info.dateOfBirth && format(new Date(info.dateOfBirth), 'dd.MM.yyyy')}</Typography>

                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("speaksRussian")}</InputLabel>
                                    <Typography>
                                        {info.speaksRussian === '1' && t('good')}
                                        {info.speaksRussian === '2' && t('badly')}
                                        {info.speaksRussian === '3' && t('dontSpeak')}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("speaksHebrew")}</InputLabel>
                                    <Typography>
                                        {info.speaksHebrew === '1' && t('good')}
                                        {info.speaksHebrew === '2' && t('badly')}
                                        {info.speaksHebrew === '3' && t('dontSpeak')}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("speaksEnglish")}</InputLabel>
                                    <Typography>
                                        {info.speaksEnglish === '1' && t('good')}
                                        {info.speaksEnglish === '2' && t('badly')}
                                        {info.speaksEnglish === '3' && t('dontSpeak')}
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </IBoxBody>

                </Paper>

                <Paper component='div' elevation={3}>
                    <IBoxHeader className="summary__paper-header">
                        {t("additionalInfo")}
                    </IBoxHeader>
                    <Divider></Divider>
                    <IBoxBody className="summary__paper-body">
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("gender")}</InputLabel>
                                    <Typography>{additionalInfo.gender}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("maritalStatus")}</InputLabel>
                                    <Typography>
                                        {additionalInfo.maritalStatus === '1' && t("married")}
                                        {additionalInfo.maritalStatus === '2' && t("notMarried")}
                                        {additionalInfo.maritalStatus === '3' && t("divorced")}
                                        {additionalInfo.maritalStatus === '4' && t("marriedShe")}
                                        {additionalInfo.maritalStatus === '5' && t("notMarriedShe")}
                                        {additionalInfo.maritalStatus === '6' && t("divorcedShe")}

                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("quantityChildren")}</InputLabel>
                                    <Typography>{additionalInfo.children}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("hospitalCassa")}</InputLabel>
                                    <Typography>{additionalInfo.hospitalCassa}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("growth")}</InputLabel>
                                    <Typography>{additionalInfo.growth}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("weight")}</InputLabel>
                                    <Typography>{additionalInfo.weight}</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("smoking")}</InputLabel>
                                    <Typography>{additionalInfo.smoking === true && t("yes")}</Typography>
                                </Box>
                            </Grid>

                            {additionalInfo.smoking === true &&
                                <Grid item xs={6}>
                                    <Box p={0}>
                                        <InputLabel shrink>{t("quantityCigarettes")}</InputLabel>
                                        <Typography>{additionalInfo.quantityCigarettes}</Typography>
                                    </Box>
                                </Grid>
                            }
                            {additionalInfo.smoking !== true &&
                                <Grid item xs={6}>
                                    <Box p={0}>
                                        <InputLabel shrink>{t("smokingBefore")}</InputLabel>
                                        <Typography>{additionalInfo.didSmoking}</Typography>
                                    </Box>
                                </Grid>
                            }
                            {additionalInfo.didSmoking === true && additionalInfo.smoking !== true &&
                                <Grid item xs={6}>
                                    <Box p={0}>
                                        <InputLabel shrink>{t("longOutSmoking")}</InputLabel>
                                        <Typography>{additionalInfo.longOutSmoking + t("yearsAgo")}</Typography>
                                    </Box>
                                </Grid>
                            }
                        </Grid>
                    </IBoxBody>

                </Paper>
            </div>

            <Paper className="summary__paper-table" elevation={3}>
                <IBoxHeader>
                    {t("addresses")}
                </IBoxHeader>
                <div className="summary__table">
                    <TableAdresses data={adressesList}></TableAdresses>
                </div>
            </Paper>
            <Paper className="summary__paper-table" elevation={3}>
                <IBoxHeader>
                    {t("contacts")}
                </IBoxHeader>
                <div className="summary__table">
                    <TableContacts data={contactsList}></TableContacts>
                </div>
            </Paper>
            <Paper className="summary__paper-table" elevation={3}>
                <IBoxHeader>
                    {t("family")}
                </IBoxHeader>
                <div className="summary__table">
                    <TableFamily className="summary__table" data={familyList}></TableFamily>
                </div>
            </Paper>
            <div className="button-steps__wrapper">
                <div className="btn">
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        {t("back")}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? t("create") : t("next")}
                    </Button>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "space-between",
        '& > *': {
            marginBottom: "10px",
            width: "48%",
            minHeight: "330px",
            height: "auto"
        },
    },
}));

function mapStateToProps({ request }) {
    return {
        info: request.info,
        additionalInfo: request.additionalInfo,
        contactsList: request.contactsList,
        familyList: request.familyList,
        adressesList: request.adressesList,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryInfo);

