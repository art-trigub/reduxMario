import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paper, Divider } from '@material-ui/core'
import ITypography from '../../../CommonsComponents/Itypography/ITypography'
import IBoldTypography from '../../../CommonsComponents/Itypography/IBoldTypography'
import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader';
import IBoxBody from '../../../CommonsComponents/Iboxes/IBoxBody';

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { format } from 'date-fns'




function AdditionalInfo({ data }) {
    const { t } = useTranslation()
    const headers = [t('chooseCompany'), t('сlientNumberInTheCompany'), t('clientLoginInPersonalAccount'), t('clientPasswordInPersonalAccount'), t('dateOfCreation'), t('editingDate'), t('whoCreated'), t('whoEdited')]
    return (
        <div>
            <div className="edit-family__wrapper">

                <IBoxBody>
                    <div className="edit-family_wrapper-grid">

                        <Grid container spacing={2} alignItems='center'>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("status")}</InputLabel>
                                    <Typography className="pt-4">
                                        {data.status === '1' && t("husband")}
                                        {data.status === '2' && t("wife")}
                                        {data.status === '3' && t("son")}
                                        {data.status === '4' && t("daughter")}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("contacts")}</InputLabel>
                                    <Typography className="pt-4">{data.contacts}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("firstName")}</InputLabel>
                                    <Typography className="pt-4" >{data.name}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("surname")}</InputLabel>
                                    <Typography className="pt-4">{data.surname}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("tz")}</InputLabel>
                                    <Typography className="pt-4">{data.tz}</Typography>
                                </Box>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <Box p={0}>
                                    <InputLabel shrink>{t("dateOfBirth")}</InputLabel>
                                    <Typography className="pt-4">{data.dateOfBirth && format(new Date(data.dateOfBirth), 'dd.MM.yyyy')}</Typography>
                                </Box>
                            </Grid>

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
                                    <Typography className="pt-4">{data.smoking === true ? t("yes") : t("no")}</Typography>
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
                                            <Typography className="pt-4">{data.longOutSmoking && `${data.longOutSmoking} год(а) назад`}</Typography>
                                        </Box>
                                    </Grid>
                                </>
                            }



                            {/* <Grid item xs={6}><ITypography>Статус:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.status}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Имя:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.name}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Фамилия:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.surname}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Тедуат-зеут:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.tz}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>День рождения:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.dateOfBirth}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Пол:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.gender}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Больничная касса:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.hospitalCassa}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Контакты:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.contacts}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Рост:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.growth}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Вес:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.weight}</IBoldTypography></Grid>

                        <Grid item xs={6}><ITypography>Курит:</ITypography></Grid>
                        <Grid item xs={6}><IBoldTypography>{data.smoking}</IBoldTypography></Grid>

                        {data.smoking === 'Да' &&
                            <>
                                <Grid item xs={6}><ITypography>Кол-во сигарет в день:</ITypography></Grid>
                                <Grid item xs={6}><IBoldTypography>{data.quantityCigarettes}</IBoldTypography></Grid>
                            </>
                        }
                        {data.smoking === 'Нет' && data.didSmoking === 'Да' &&
                            <>
                                <Grid item xs={6}><ITypography>Как давно бросил:</ITypography></Grid>
                                <Grid item xs={6}><IBoldTypography>{`${data.longOutSmoking} год(а) назад`}</IBoldTypography></Grid>
                            </>
                        } */}



                        </Grid>
                    </div>

                </IBoxBody>

            </div>

        </div>
    )
}
export default AdditionalInfo
