import React, { useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'

import HealthInsurance from './HealthInsurance/HealthInsurance'
import { changeListBreadCrumbs } from '../../store/actions/breadCrumbs'


function Libraries() {
    const { path, url } = useRouteMatch()
    const { t } = useTranslation();
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = t('libraries')
        dispatch(changeListBreadCrumbs([`${t('libraries')}`]))
    }, [t])


    return (
        <div>
            <Link to={`${url}/health-insurance`}><button>Больничная касса</button></Link>
            <Link to={`${url}/cities`}><button>Города</button></Link>
            <Link to={`${url}/regions`}><button>Регионы</button></Link>
            <Link to={`${url}/status-client`}><button>Статус клиента</button></Link>
        </div >
    )
}

export default Libraries
