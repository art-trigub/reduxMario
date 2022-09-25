import React from 'react'
import TabsClientView from './TabsClientView'

function ClinetsView({ id }) {
    // useEffect(() => {
    //     document.title = `Клиенты`
    //     changeListBreadCrumbs('Клиенты')
    // }, [])
    const data =
        [
            {
                'id': '1',
                'tz': '321800690',
                'first_name': 'Нэля',
                'last_name': 'Адаменко',
                'status_id': 'Отмена',
                'economy': '0',
                'pay': '30',
                'fin_pred_id': 'Светлана Семененко',
                'tech_support_status_id': 'Отмена (ранее пользовался услугой)',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020.06.21 10:27:16',
                'tel_home': '046526939',
                'tel_mobile': '0544781458',
                'email': 'peterdora2@gmail.com',
                'birthday': '01.01.1917',
                'data_connection': '15.06.2015',
                'term_contact': '3 год(а)',
                'data_end': '14.06.2018',
                'adress': 'Афула/ Ха-Рав Петерс 13/ 1',
                'team_lider': 'Алла Сорокина тел. (221, 218)',
                'agent_sell_departament': 'Найденов Сергей',
                'teamleader_sell_departement': '-',
                'speaks_hebrew': 'плохо',
                'speaks_russian': 'хорошо',
                'speaks_english': 'не разговаривает',
                'additional_status': 'Нормальный',
                'method_pay': 'Кредитная карта',
                'status_last_pay': 'Оплата',
                'last_four_number_card': '4382',
                'validity_period_card': 'Срок действия карты истек'


            },
            {
                'id': '2',
                'tz': '317623924',
                'first_name': 'Дмитрий',
                'last_name': 'Михайлов',
                'status_id': 'Отмена',
                'economy': '0',
                'pay': '0',
                'fin_pred_id': '',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': ''
            },
            {
                'id': '3',
                'tz': '309086676',
                'first_name': 'Наталья',
                'last_name': 'Шварбург',
                'status_id': 'Отмена',
                'economy': '33',
                'pay': '0',
                'fin_pred_id': '',
                'tech_support_status_id': '',
                'department_department_id': '',
                'data_change_additional_status': ''
            },
            {
                'id': '4',
                'tz': '317402287',
                'first_name': 'София',
                'last_name': 'Вишнивецкая',
                'status_id': 'Только 23,4',
                'economy': '0',
                'pay': '23.4',
                'fin_pred_id': 'Светлана Семененко',
                'tech_support_status_id': 'Нет ПК',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-05-14 17:27:13'
            },
            {
                'id': '5',
                'tz': '309051381',
                'first_name': 'Ирина',
                'last_name': 'Сахута',
                'status_id': 'Только 23,4',
                'economy': '276.55',
                'pay': '20',
                'fin_pred_id': 'Лана Донец',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-04-12 14:57:17'
            },
            {
                'id': '6',
                'tz': '304051381',
                'first_name': 'Алина',
                'last_name': 'Сахута',
                'status_id': 'Отмена',
                'economy': '276.55',
                'pay': '20',
                'fin_pred_id': 'Лана Донец',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-04-12 14:57:17'
            }, {
                'id': '7',
                'tz': '321800690',
                'first_name': 'Нэля',
                'last_name': 'Адаменко',
                'status_id': 'Отмена',
                'economy': '0',
                'pay': '0',
                'fin_pred_id': '',
                'tech_support_status_id': 'Отмена (ранее пользовался услугой)',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-06-21 10:27:16'
            },
            {
                'id': '8',
                'tz': '317623924',
                'first_name': 'Дмитрий',
                'last_name': 'Михайлов',
                'status_id': 'Отмена',
                'economy': '0',
                'pay': '0',
                'fin_pred_id': '',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': ''
            },
            {
                'id': '9',
                'tz': '309086676',
                'first_name': 'Наталья',
                'last_name': 'Шварбург',
                'status_id': 'Отмена',
                'economy': '33',
                'pay': '0',
                'fin_pred_id': '',
                'tech_support_status_id': '',
                'department_department_id': '',
                'data_change_additional_status': ''
            },
            {
                'id': '10',
                'tz': '317402287',
                'first_name': 'София',
                'last_name': 'Вишнивецкая',
                'status_id': 'Только 23,4',
                'economy': '0',
                'pay': '23.4',
                'fin_pred_id': 'Светлана Семененко',
                'tech_support_status_id': 'Нет ПК',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-05-14 17:27:13'
            },
            {
                'id': '11',
                'tz': '309051381',
                'first_name': 'Ирина',
                'last_name': 'Сахута',
                'status_id': 'Только 23,4',
                'economy': '276.55',
                'pay': '20',
                'fin_pred_id': 'Лана Донец',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-04-12 14:57:17'
            },
            {
                'id': '12',
                'tz': '304051381',
                'first_name': 'Алина',
                'last_name': 'Сахута',
                'status_id': 'Отмена',
                'economy': '276.55',
                'pay': '20',
                'fin_pred_id': 'Лана Донец',
                'tech_support_status_id': 'Отказ',
                'department_department_id': 'Отдел обслуживания IPL',
                'data_change_additional_status': '2020-04-12 14:57:17'
            }
        ];

    return (
        <div>
            <TabsClientView data={(data.filter((item) => { return item.id === id }))} id={id} />
        </div>
    )
}

export default ClinetsView
