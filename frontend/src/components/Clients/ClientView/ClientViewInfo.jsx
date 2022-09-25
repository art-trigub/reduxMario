import React from 'react';
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './style.css'
import ClientAccordion from './ClientAccordion'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeListBreadCrumbs } from '../../../store/actions/breadCrumbs'


export function ClientViewInfo({ id, data, changeListBreadCrumbs }) {
    const classes = useStyles();
    const { t } = useTranslation()
    data = data[0]
    useEffect(() => {
        document.title = `${data.id}` + ' ' + `${data.first_name}`
        changeListBreadCrumbs([`${t('clients')}`, `${data.id}` + ' ' + `${data.first_name}` + ' ' + `${data.tz}`])
    }, [t])
    return (
        <div className={classes.root}>
            <Paper component='div' elevation={3} >
                <div className="card-info_title">
                    <div className="card-info_title-id">
                        {id}
                    </div>
                    <div className="card-info_title-name">
                        <div className="card-info_title-name-name">{data.first_name} {data.last_name}</div>
                        <div className="card-info_title-name-tz">{data.tz}</div>
                    </div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('homePhone')}:</div>
                    <div className="card-info__text-large">{data.tel_home}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('mobilePhone')}:</div>
                    <div className="card-info__text-large">{data.tel_mobile}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">Email:</div>
                    <div className="card-info__text-large">{data.email}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('dateOfBirth')}:</div>
                    <div className="card-info__text-small">{data.birthday}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('dateOfConnection')}:</div>
                    <div className="card-info__text-small">{data.data_connection}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('termContract')}:</div>
                    <div className="card-info__text-small">{data.term_contact}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('dateOfEnd')}:</div>
                    <div className="card-info__text-small">{data.data_end}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper" >
                    <div className="card-info__rubric-small">{t('address')}:</div>
                    <div className="card-info__text-small">{data.adress}</div>
                </div>
            </Paper>
            <Paper component='div' elevation={3}>
                <div className="card-info_title">
                    <div className="card-info_title-name" style={{ margin: "10px auto" }}>
                        <div className="card-info_title-name-block2">{data.department_department_id}</div>
                        <button className="card-info__status" disabled>
                            Принят
                        </button>
                    </div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('finRepresentative')}:</div>
                    <div className="card-info__text-large">{data.fin_pred_id}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('teamLeader')}:</div>
                    <div className="card-info__text-large">{data.team_lider}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('salesAgent')}:</div>
                    <div className="card-info__text-small">{data.agent_sell_departament}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('teamLeaderOfTheSalesDepartment')}:</div>
                    <div className="card-info__text-small">{data.teamleader_sell_departement}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('speaksHebrew')}:</div>
                    <div className="card-info__text-small">{data.speaks_hebrew}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('speaksRussian')}:</div>
                    <div className="card-info__text-small">{data.speaks_russian}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('speaksEnglish')}:</div>
                    <div className="card-info__text-small">{data.speaks_english}</div>
                </div>
            </Paper>
            <Paper component='div' elevation={3}>
                <div className="card-info_header">
                    <div className="card-info_header-status">{t('status')}:</div>
                    <div className="card-info_header-status-value">{data.additional_status}</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('paymentPerMonth')}:</div>
                    <div className="card-info__text-large">{data.pay} ₪</div>
                </div>
                <Divider />
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-large">{t('paymentMethod')}:</div>
                    <div className="card-info__text-large">{data.method_pay}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('lastPaymentStatus')}:</div>
                    <div className="card-info__text-small">{data.status_last_pay}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('lastFourNumberCard')}:</div>
                    <div className="card-info__text-small">{data.last_four_number_card}</div>
                </div>
                <div className="card-info__wrapper">
                    <div className="card-info__rubric-small">{t('cardExpiryDate')}:</div>
                    <div className="card-info__text-small">{data.validity_period_card}</div>
                </div>
            </Paper>
            <div style={{ width: "100%" }} className="client-accordion__wrapper">
                <Paper component="div" elevation={3}><ClientAccordion data={data} /></Paper>
            </div>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "space-between",
        '& > *': {
            marginBottom: "10px",
            width: "31%",
            minHeight: "430px",
            height: "auto"
        },
    },
}));

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeListBreadCrumbs: bindActionCreators(changeListBreadCrumbs, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientViewInfo);
