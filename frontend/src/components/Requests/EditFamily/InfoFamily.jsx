import React from 'react'
import { useSelector, shallowCompare } from 'react-redux'
import format from 'date-fns/format';
import { useTranslation } from 'react-i18next'
import { Paper, Divider } from '@material-ui/core'
import ITypography from '../../CommonsComponents/Itypography/ITypography'
import IBoldTypography from '../../CommonsComponents/Itypography/IBoldTypography'
import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader';
import IBoxBody from '../../CommonsComponents/Iboxes/IBoxBody';

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';



function AdditionalInfo({ data }) {
    const { t } = useTranslation()
    const headers = [t('chooseCompany'), t('сlientNumberInTheCompany'), t('clientLoginInPersonalAccount'), t('clientPasswordInPersonalAccount'), t('dateOfCreation'), t('editingDate'), t('whoCreated'), t('whoEdited')]
    // const useHook = useSelector(state => state.clientFamilyStatusData.relativeStatusList)
    const relativeStatusList = useSelector(state => state.clientsFamilyStatusData.relativeStatusList)

    return (
        <div>
            <div className="edit-family__wrapper">
                <IBoxBody>
                    <div className="edit-family_wrapper-grid">
                        <Grid container spacing={2} >

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("status")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{t(relativeStatusList.find(item => item.id == data.status).title)}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("contacts")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.contacts}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("firstName")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.name}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("surname")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.surname}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("tz")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.tz}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("dateOfBirth")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.dateOfBirth && format(new Date(data.dateOfBirth), 'dd.MM.yyyy')}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("hospitalCassa")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.hospitalCassa}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("gender")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.gender == "1" && t("man") || data.gender == "2" && t("women")}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("growth")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.growth}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("weight")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.weight}</Typography>
                            </Grid>

                            <Grid className="fixed-height__input" item xs={6}>
                                <InputLabel shrink>{t("smoking")}</InputLabel>
                                <Typography style={{ paddingTop: "4px" }}>{data.smoking === true ? t("yes") : t("no")}</Typography>
                            </Grid>

                            {data.smoking === true &&
                                <>
                                    <Grid className="fixed-height__input" item xs={6}>
                                        <InputLabel shrink>{t("quantityCigarettes")}</InputLabel>
                                        <Typography style={{ paddingTop: "4px" }}>{data.quantityCigarettes}</Typography>
                                    </Grid>
                                </>
                            }
                            {data.smoking !== true && data.didSmoking === true && data.longOutSmoking &&
                                <>
                                    <Grid className="fixed-height__input" item xs={6}>
                                        <InputLabel shrink>{t("longOutSmoking")}</InputLabel>
                                        <Typography style={{ paddingTop: "4px" }}>{`${data.longOutSmoking}` + ' ' + `${t("yearsAgo")}`}</Typography>
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
            {/* </Container> */}

        </div>
    )
}
export default AdditionalInfo
