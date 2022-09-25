import React from 'react';
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AdditionalInfo from './AdditionalInfo'
import Contacts from './Contacts'
import Adresses from './Adresses'




export default function VerticalTabs({ data, modeEdit, modeView, setEditedData, editedData, setVisibleButton }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { t } = useTranslation()


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                indicatorColor="primary"
            >
                <Tab disabled={modeEdit && value !== 0 ? true : false} label={t("additionalInfo")} {...a11yProps(0)} className={classes.tab} />
                <Tab disabled={modeEdit && value !== 1 ? true : false} label={t("contacts")} {...a11yProps(1)} className={classes.tab} />

                <Tab disabled={modeEdit && value !== 2 ? true : false} label={t("addresses")} {...a11yProps(2)} className={classes.tab} />
            </Tabs>


            <TabPanel className="tab-panel" value={value} index={0}>
                <AdditionalInfo setVisibleButton={setVisibleButton} data={data} editedData={editedData} modeEdit={modeEdit} modeView={modeView} setEditedData={setEditedData} />
            </TabPanel>
            <TabPanel className="tab-panel" value={value} index={1}>
                <Contacts setVisibleButton={setVisibleButton} />
            </TabPanel>
            <TabPanel className="tab-panel" value={value} index={2}>
                <Adresses setVisibleButton={setVisibleButton} />
            </TabPanel>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {

        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: '80vh',
        height: 'auto',

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 250,
    },
    tab: {
        minWidth: 250,
        textAlign: "left"
    }

}));
