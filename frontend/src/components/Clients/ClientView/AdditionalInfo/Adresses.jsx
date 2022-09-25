import React from 'react'
import { useTranslation } from 'react-i18next'
import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader';
import Typography from '@material-ui/core/Typography'

import { Divider } from '@material-ui/core'
import './style.css'
import Table from '../Table'


function Adresses({ setVisibleButton }) {
    setVisibleButton(false)
    const { t } = useTranslation()
    const headers = [t('city'), t('street'), t('streetHeb'), t('house'), t('apartment'), t('entrance'), t('whoCreated'), t('whoEdited')]
    return (
        <div>
            <Table headers={headers} />
        </div>
    )
}

export default Adresses
