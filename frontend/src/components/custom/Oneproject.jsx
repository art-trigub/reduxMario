import * as React from 'react';
import image1 from '../../images/MetaverseMagna.jpg'
import image23 from '../../images/Polkadot.png'


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Tabs from './Tabs'
import Rating from './Rating'


export default function Oneproject() {

    return (
        <>
            <Paper elevation={5} className="project__wrap">
            <div className="project_title">Polkadot</div>

                <div className="project_container">
                    <div 
                        className="home__slider_item__image" 
                        style={{
                            backgroundImage: `url("${image23}")`,
                            margin: '5px'
                        }}>
                    </div>
                    <div className="project_description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem dui, vestibulum id fermentum quis, rhoncus sit amet leo. Cras rutrum elit vel mauris suscipit, ac pellentesque ligula ultricies. Aenean vel nunc a massa maximus pulvinar. Nulla ac consectetur sem. Pellentesque ut blandit arcu, sit amet aliquet tellus. Proin in nibh risus
                    </div>

                    <div className='project_specifications__container'>
                        <Rating />
                    </div>
                </div>
                <Tabs />       
            </Paper>
        </>
    )
}