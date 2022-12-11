import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="tabs_container">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Активности" {...a11yProps(0)} />
          <Tab label="Гайды" {...a11yProps(1)} />Новости
          <Tab label="Новости" {...a11yProps(2)} />
          <Tab label="О проекте" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Новости
      </TabPanel>
      <TabPanel value={value} index={1}>
        div.project Lorem ipsum dolor sit amet consectetur<br/>        
        div.project Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptatem atque dolor veniam magni ut nostrum soluta iste doloribus sint. Sed, consequatur quasi cupiditate porro ratione earum corrupti, fugiat excepturi debitis asperiores veritatis, minus ut sapiente corporis! Exercitationem numquam facere, aspernatur maxime voluptate saepe ipsa suscipit aperiam corrupti ratione? Dolorem?
      </TabPanel>
      <TabPanel value={value} index={2}>
        Гайды
      </TabPanel>
      <TabPanel value={value} index={3}>
        Активности
      </TabPanel>
    </Box>
  );
}