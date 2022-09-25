import 'date-fns';
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux'
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const localeMap = {
    en: enLocale,
    ru: ruLocale,
};


function MaterialUIPickers({ onChange, data, lang, onBlur, error, helperText }) {
    const [selectedDate, setSelectedDate] = React.useState(data);
    const [locale, setLocale] = useState(lang);
    const { t } = useTranslation();


    const handleDateChange = (date) => {
        setSelectedDate(date);
        onChange(date)
    };

    const localeMap = {
        en: enLocale,
        ru: ruLocale,
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[lang]}>
            <KeyboardDatePicker
                onBlur={onBlur}
                error={error}
                helperText={helperText}
                className='fullWidth'
                id="date-picker-dialog"
                label={t("dateOfBirth")}
                format="dd.MM.yyyy"
                value={selectedDate ? selectedDate : null}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                name="dateOfBirth"
            />
        </ MuiPickersUtilsProvider>
    );
}


function mapStateToProps({ userSettings }) {
    return {
        lang: userSettings.lang
    };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MaterialUIPickers)