import * as React from 'react';
import { useEffect, useState } from "react";
import Editor from '../Editor/Editor'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import Telegraph from './Telegraph'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className='tab__content_container'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component="div">{children}</Typography>
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
  const [value, setValue] = useState(0);
  const [data, setData] = useState(false)

  const saveData = (data2) => {
    setData(data2)
    console.log('SAVE')
    console.log(data2)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="tabs_container">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Гайды" {...a11yProps(0)} />
          <Tab label="Активности" {...a11yProps(1)} />Новости
          <Tab label="Новости" {...a11yProps(2)} />
          <Tab label="О проекте" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <Telegraph data={data} onSaveData={saveData}/> */}
        
        <Editor data={data} onSaveData={saveData}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
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