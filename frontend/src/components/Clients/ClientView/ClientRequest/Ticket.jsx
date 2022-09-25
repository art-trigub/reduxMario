import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TicketDetail from './TicketDetail'

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
                <Box p={3}>
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
        minHeight: '224px',
        height: 'auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 200

    },

}));

export default function VerticalTabs({ data }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                {data.child.map((item, index) => (
                    <Tab key={index} label={item.dateRequest} {...a11yProps(index)} />
                ))}

            </Tabs>
            {data.child.map((item, index) => (
                <TabPanel className="tab-panel" key={index} value={value} index={index}>
                    <TicketDetail data={item} />
                </TabPanel>
            ))}
        </div>
    );
}