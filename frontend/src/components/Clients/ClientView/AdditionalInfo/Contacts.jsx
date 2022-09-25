import React from 'react'
import { useTranslation } from 'react-i18next'
import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader';
import Typography from '@material-ui/core/Typography'

import { Paper, Divider } from '@material-ui/core'
import './style.css'
import Table from '../Table'

function Contacts({ setVisibleButton }) {
    const { t } = useTranslation()
    const headersSecond = [t('contact'), t('type'), t('main'), t('active')]
    setVisibleButton(false)
    return (
        // <div className="contacts__block2">
        <div>
            <Table headers={headersSecond} />
            {/* <div className="block3-wrapper"></div> */}
        </div>
    )
}

export default Contacts
