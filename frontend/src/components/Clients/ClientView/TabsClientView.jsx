import React from 'react';
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ClientViewInfo from './ClientViewInfo'
import СustomerRequest from './ClientRequest/ClientViewСustomerRequest'
import MailData from './MailData/MailData'
import { changeListBreadCrumbs } from '../../../store/actions/breadCrumbs'
import MainFamily from './Family/MainFamily';
import Main from './AdditionalInfo/Main'






function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ padding: "8px 3px" }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    appBar: {
        backgroundColor: "white",
        padding: 0

    }
}));

function FullWidthTabs({ data, id, changeListBreadCrumbs }) {
    const { t } = useTranslation()
    useEffect(() => {
        document.title = `${data[0].id}` + ' ' + `${data[0].first_name}`
        changeListBreadCrumbs([`${t('clients')}`, `${data[0].id}` + ' ' + `${data[0].first_name}` + ' ' + `${data[0].tz}`])
    }, [t])
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={t('info')} {...a11yProps(0)} />
                    <Tab label={t("additionalInfo")} {...a11yProps(1)} />
                    <Tab label={t('tickets')} {...a11yProps(2)} />
                    <Tab label={t('mailData')} {...a11yProps(3)} />
                    <Tab label={t("family")} {...a11yProps(4)} />

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ClientViewInfo data={data} id={id} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Main data={data} id={id} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <СustomerRequest data={data} id={id} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <MailData data={data} id={id} />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <MainFamily data={data} id={id} />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeListBreadCrumbs: bindActionCreators(changeListBreadCrumbs, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullWidthTabs);
