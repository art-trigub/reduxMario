import React from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'

function TicketDetail({ data }) {
    const { t } = useTranslation()
    return (
        <div className="ticket-detail__wrapper">
            <div className="ticket-detail__description">
                <div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('ticketStatus')}:&nbsp;</div>
                        <div>{data.statusRequest}</div>
                    </div>

                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('ticketNumber')}:&nbsp;</div>
                        <div>{data.childNumber}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('reminderDate')}:&nbsp; </div>
                        <div>{data.reminderDate}</div>
                    </div>
                </div>
                <div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('whoOpened')}:&nbsp;</div>
                        <div>{data.creatorRequest}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('assignedTo')}:&nbsp;&nbsp;</div>
                        <div>{data.assignedTo}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('whoChanged')}:&nbsp;</div>
                        <div>{data.whoChanged}</div>
                    </div>
                </div>
                <div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('requestMethod')}:&nbsp;</div>
                        <div>{data.requestMethod}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('comunicationType')}:&nbsp;</div>
                        <div>{data.comunicationType}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('topicRequest')}:&nbsp;</div>
                        <div>{data.topicRequest}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('outgoingContact')}:&nbsp;</div>
                        <div>{data.outgoingContact}</div>
                    </div>
                    <div className="description-text__wrapper">
                        <div className="description-text__rubric">{t('dateRequest')}:&nbsp;</div>
                        <div>{data.dateRequest}</div>
                    </div>
                </div>
            </div>
            <div className="ticket-detail__fields">
                <div className="ticket-detail__field-description-wrapper">
                    <div >{t('description')}</div>
                    <div className="ticket-detail__field-description">{data.description}</div>
                </div>
                <div className="ticket-detail__field-file-wrapper">
                    <div>{t('files')}</div>
                    <div className="ticket-detail__field-file"></div>
                </div>
            </div>
        </div>
    )
}

export default TicketDetail
