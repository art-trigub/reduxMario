import * as React from 'react';
import image1 from '../../images/MetaverseMagna.jpg'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Tabs from './Tabs'


export default function Oneproject() {

    return (
        <>
            <Paper elevation={5} className="project__wrap">
                <div className="project_title">Metaverse Magna</div>
                <div className="project_container">
                    <div 
                        className="home__slider_item__image" 
                        style={{
                            backgroundImage: `url("${image1}")`,
                            margin: '20px'
                        }}>
                    </div>
                    <div className="project_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem dui, vestibulum id fermentum quis, rhoncus sit amet leo. Cras rutrum elit vel mauris suscipit, ac pellentesque ligula ultricies. Aenean vel nunc a massa maximus pulvinar. Nulla ac consectetur sem. Pellentesque ut blandit arcu, sit amet aliquet tellus. Proin in nibh risus
                    </div>
                </div>
                <Tabs />       
            </Paper>
        </>
    )
}