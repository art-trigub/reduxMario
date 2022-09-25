import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paper, Divider } from '@material-ui/core'
import ITypography from '../../../CommonsComponents/Itypography/ITypography'
import IBoldTypography from '../../../CommonsComponents/Itypography/IBoldTypography'
import Table from '../Table'
import Modal from './Modal'
import './style.css'
import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader';
import IBoxBody from '../../../CommonsComponents/Iboxes/IBoxBody';

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'


function MailData() {
    const { t } = useTranslation()
    const headers = [t('chooseCompany'), t('сlientNumberInTheCompany'), t('clientLoginInPersonalAccount'), t('clientPasswordInPersonalAccount'), t('dateOfCreation'), t('editingDate'), t('whoCreated'), t('whoEdited')]
    return (
        <div>
            <div className="btn-wrapper">
                <Modal />
            </div>
            <div className="mail-data__wrapper-block">
                <Paper className="mail-data__block1" elevation={3}>
                    <IBoxHeader><Typography variant="h6">{t('personalMailData')}</Typography></IBoxHeader>
                    <Divider />
                    <IBoxBody>
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={6}><ITypography>{t('passwordFromMail')}:</ITypography></Grid>
                            <Grid item xs={6}>
                                <div className="block__text"> <TextField color='secondary' label="" variant="outlined" /></div>
                            </Grid>
                            <Grid item xs={6}><ITypography>{t('whoCreatedData')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>Карпун Вадим</IBoldTypography></Grid>
                            <Grid item xs={6}><ITypography>{t('dateOfCreation')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>30.04.2020 10:18</IBoldTypography></Grid>
                            <Grid item xs={6}><ITypography>{t('whoEditedThePassword')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>Карпун Вадим</IBoldTypography></Grid>
                            <Grid item xs={6}><ITypography>{t('editingDate')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>30.04.2020 10:24</IBoldTypography></Grid>
                        </Grid>
                    </IBoxBody>
                </Paper>
                <Paper className="mail-data__block2" elevation={3}>
                    <IBoxHeader><Typography variant="h6">{t('detailsForPersonalMail')}</Typography></IBoxHeader>
                    <Divider />
                    <IBoxBody>
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={6}><ITypography>{t('emailDomain')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>https://875.co.il/</IBoldTypography></Grid>
                            <Grid item xs={6}><ITypography>{t('login')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>0002002@875.co.il</IBoldTypography></Grid>
                            <Grid item xs={6}><ITypography>{t('password')}:</ITypography></Grid>
                            <Grid item xs={6}><IBoldTypography>123456</IBoldTypography></Grid>
                        </Grid>
                    </IBoxBody>
                </Paper>
            </div>
            <div>
                <Paper className="mail-data__block3" elevation={3}>
                    <IBoxHeader><Typography variant="h6">{t('сompaniesLinkedToEmail')}</Typography></IBoxHeader>
                    <Divider />
                    <div className="block3-wrapper"><Table headers={headers} /></div>
                </Paper>
            </div>
        </div>
    )
}

export default MailData


