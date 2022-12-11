import * as React from 'react';
import Paper from '@mui/material/Paper';
import image1 from '../../images/MetaverseMagna.jpg'
import image2 from '../../images/DojimaNetwork.jpg'
import image3 from '../../images/MetaWebVentures.jpg'
import image4 from '../../images/Optimism.jpg'
import image5 from '../../images/SingleEarth.jpg'
import image6 from '../../images/TrialXtreme.png'
import image7 from '../../images/MetaverseGo.jpg'
import image8 from '../../images/MagicSquare.png'
import image9 from '../../images/XDAO.jpg'
import image10 from '../../images/BitsCrypto.jpg'
import image11 from '../../images/DebtDAO.jpg'
import image12 from '../../images/SpaceTime.jpg'
import image13 from '../../images/KreskoFi.jpg'
import image14 from '../../images/Center.jpg'
import image15 from '../../images/Sui.jpg'
import image16 from '../../images/IronFish.jpg'
import image17 from '../../images/BIFROST.jpg'
import image18 from '../../images/LayerZero.jpg'
import image19 from '../../images/ObolLabs.jpg'
import image20 from '../../images/Vega.jpg'
import image21 from '../../images/Aleo.png'
import Rating from '../custom/Rating'
import {Switch, Route, Link, useRouteMatch } from 'react-router-dom'




export default function Testnet() {
    const { path } = useRouteMatch()
    console.log(path)
    return (
        <>
        
            <div className="list_container">
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image1}")`}}></div></Link>
                    <div className="title_project">Metaverse Magna</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image2}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image3}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image4}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image5}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image6}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image7}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image8}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image9}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image10}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image11}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image12}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image13}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image14}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
                <Paper elevation={4} className="list_item">
                     <Link to="/project/"><div className="project_image" style={{backgroundImage: `url("${image15}")`}}></div></Link>
                    <div className="title_project">AAAAA</div>
                    <div className="rating_container"><Rating /></div>
                </Paper>
            </div>
        </>
    )
}