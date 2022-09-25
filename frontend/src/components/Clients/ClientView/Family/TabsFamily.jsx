import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useTranslation } from 'react-i18next'


import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import AddButton from '../../../CommonsComponents/AddButton/AddButton'
import InfoFamily from './InfoFamily'
import CreateNewPeople from './CreateNewPeople'
import EditFamilyPerson from './EditFamilyPerson'



function VerticalTabs({ data, modeView, newUserActive, editFamilyActive, onChange, setCurrentTabsIndex, currentTabsIndex }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(currentTabsIndex);
    const { t } = useTranslation()

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
                {data.map((item, index) => (

                    <Tab
                        key={index}
                        label={
                            item.status == '1' && t('husband') ||
                            item.status == '2' && t('wife') ||
                            item.status == '3' && t('son') ||
                            item.status == '4' && t('daughter')
                        }
                        {...a11yProps(index)} disabled={editFamilyActive && value !== index ? true : false} />
                ))}
                {newUserActive
                    &&
                    <Tab key={data.length} label={'Новый родственник'} {...a11yProps(data.length)} />
                }

            </Tabs>
            {data.map((item, index) => (
                <TabPanel key={index} className="tab-panel" value={value} index={index}>
                    {editFamilyActive ? <EditFamilyPerson data={item} /> : <InfoFamily data={item} />
                    }
                </TabPanel>
            ))
            }
            {
                newUserActive
                &&
                <TabPanel key={data.length} className="tab-panel" value={value} index={data.length}>
                    <CreateNewPeople onChange={onChange} data={data} />
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
        minHeight: '75vh',
        height: 'auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 200

    },

}));

function mapStateToProps({ clientFamily }) {
    return {
        data: clientFamily.data
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalTabs);
