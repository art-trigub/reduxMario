import React, { useState, useEffect } from 'react';
import { useSelector, shallowCompare } from 'react-redux'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import AddButton from '../../CommonsComponents/AddButton/AddButton'
import InfoFamily from './InfoFamily'
import CreateNewPerson from './CreateNewPerson'
import EditFamilyPerson from './EditFamilyPerson'



function TabsEditFamily({ data, modeView, newUserActive, editFamilyActive, onChange, setCurrentTabsIndex, currentTabsIndex, setCurrentEditingPerson }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(currentTabsIndex);
    const { t } = useTranslation()

    const relativeStatusList = useSelector(state => state.clientsFamilyStatusData.relativeStatusList)


    useEffect(() => {
        if (newUserActive) setValue(data.length)
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCurrentTabsIndex(newValue)
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
                {data.length && data.map((item, index) => (
                    <Tab key={index} label={t(relativeStatusList.find(elem => elem.id == item.status).title)} {...a11yProps(index)} disabled={editFamilyActive || newUserActive && value !== index ? true : false} />
                ))}
                {newUserActive
                    &&
                    <Tab key={data.length} label={t("newRelative")} {...a11yProps(data.length)} />
                }

            </Tabs>
            {data.map((item, index) => (
                <TabPanel key={index} className="tab-panel" value={value} index={index}>
                    {editFamilyActive ? <EditFamilyPerson data={item} setCurrentEditingPerson={setCurrentEditingPerson} /> : <InfoFamily data={item} />
                    }
                </TabPanel>
            ))
            }
            {
                newUserActive
                &&
                <TabPanel key={data.length} className="tab-panel" value={value} index={data.length}>
                    <CreateNewPerson onChange={onChange} />
                </TabPanel>
            }
        </div >
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
        minHeight: '45vh',
        height: 'auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 200

    },

}));

function mapStateToProps({ request }) {
    return {
        data: request.familyList
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsEditFamily);
