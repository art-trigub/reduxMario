import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects, delProject } from '../../store/actions/projects'


import { changeListBreadCrumbs } from "../../store/actions/breadCrumbs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {Link} from "react-router-dom";
import Slider from "react-slick";

import image8 from "../../images/MagicSquare.png";
import image9 from "../../images/XDAO.jpg";
import image10 from "../../images/BitsCrypto.jpg";
import image11 from "../../images/DebtDAO.jpg";
import image12 from "../../images/SpaceTime.jpg";
import image13 from "../../images/KreskoFi.jpg";
import image14 from "../../images/Center.jpg";
import image1 from "../../images/MetaverseMagna.jpg";
import image2 from "../../images/DojimaNetwork.jpg";
import image3 from "../../images/MetaWebVentures.jpg";
import image7 from "../../images/MetaverseGo.jpg";
import image6 from "../../images/TrialXtreme.png";
import image4 from "../../images/Optimism.jpg";
import image5 from "../../images/SingleEarth.jpg";
import image15 from "../../images/Sui.jpg";
import image16 from "../../images/IronFish.jpg";
import image17 from "../../images/BIFROST.jpg";
import image18 from "../../images/LayerZero.jpg";
import image19 from "../../images/ObolLabs.jpg";
import image20 from "../../images/Vega.jpg";
import image21 from "../../images/Aleo.png";
import image23 from "../../images/Polkadot.png";

function Home({ changeListBreadCrumbs, user, dataProjects }) {


	const [slidesToShow, setSlidesToShow] = React.useState(5)
	const [sizeScreen, setSizeScreen] = React.useState(window.innerWidth)



	let settings = {
		className: "center home__slider__container",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: slidesToShow,
		swipeToSlide: true,
		slidesToScroll: 1,
		speed: 145,
	}

	useEffect(() => {
		window.addEventListener("resize", function() {
			setSizeScreen((window.innerWidth / 100).toFixed(2));
		}, false);
		setSizeScreen((window.innerWidth / 100).toFixed(2));
	}, []);

	useEffect(() => {
		changeSlides()
	}, [sizeScreen]);

	function changeSlides() {
		if(sizeScreen * 100 >= 1350) return setSlidesToShow(5);
		if(sizeScreen * 100 < 640) return setSlidesToShow(1) ;
		if(sizeScreen * 100 < 768) return setSlidesToShow(2) ;
		if(sizeScreen * 100 < 880) return setSlidesToShow(3) ;
		if(sizeScreen * 100 < 1100) return setSlidesToShow(4) ;
		if(sizeScreen * 100 < 1300) return setSlidesToShow(5);

	}


	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 1,
				},
				margin: '0 auto',
			}}
		>
			<Paper elevation={8} className="home__slider__wrap">
				<Divider />

				<div className="slider_name_wrap">

					<h3>Проекты</h3>
					<div className="home__slider__more"><Link to="/testnet">Смотреть все</Link></div>
				</div>
				<div className="home__slider__container">
					<Slider {...settings}>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image23}")`}}></div>
							<div className="home__slider_item__title">Polkadot</div>
						</div>
						{dataProjects.map((item)=> {
							return (
									<div className="home__slider_item__container">
										<div className="home__slider_item__image" style={{backgroundImage: `url("${image9}")`}}></div>
										<div className="home__slider_item__title">{item.title_project}</div>
									</div>
									)
						})}
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image9}")`}}></div>
							<div className="home__slider_item__title">title_project</div>
						</div>
						
					</Slider>
				</div>

				<Divider />

				<div className="slider_name_wrap">

					<h3>Тестнеты</h3>
					<div className="home__slider__more"><Link to="/testnet">Смотреть все</Link></div>
				</div>
				<div className="home__slider__container">
					<Slider {...settings}>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image8}")`}}></div>
							<div className="home__slider_item__title">Magic Square</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image9}")`}}></div>
							<div className="home__slider_item__title">XDAO - Token2049</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image10}")`}}></div>
							<div className="home__slider_item__title">Bits Crypto</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image11}")`}}></div>
							<div className="home__slider_item__title">Debt DAO</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image12}")`}}></div>
							<div className="home__slider_item__title">Space and Time</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image13}")`}}></div>
							<div className="home__slider_item__title">Kresko Fi</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image14}")`}}></div>
							<div className="home__slider_item__title">Center</div>
						</div>
					</Slider>
				</div>

				<Divider />

				<div className="slider_name_wrap">

					<h3>Амбассадорки</h3>
					<div className="home__slider__more"><Link to="/amba">Смотреть все</Link></div>
				</div>
				<div className="home__slider__container">
					<Slider {...settings}>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image1}")`}}></div>
							<div className="home__slider_item__title">Metaverse Magna</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image2}")`}}></div>
							<div className="home__slider_item__title">DojimaNetwork</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image3}")`}}></div>
							<div className="home__slider_item__title">MetaWeb Ventures</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image7}")`}}></div>
							<div className="home__slider_item__title">MetaverseGo</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image6}")`}}></div>
							<div className="home__slider_item__title">Trial Xtreme</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image4}")`}}></div>
							<div className="home__slider_item__title">Optimism</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image5}")`}}></div>
							<div className="home__slider_item__title">Single.Earth</div>
						</div>
					</Slider>
				</div>
				<Divider />

				<div className="slider_name_wrap">
					<h3>Ноды</h3>
					<div className="home__slider__more"><Link to="/node">Смотреть все</Link></div>
				</div>
				<div className="home__slider__container">
					<Slider {...settings}>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image15}")`}}></div>
							<div className="home__slider_item__title">Sui</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image16}")`}}></div>
							<div className="home__slider_item__title">Iron Fish</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image17}")`}}></div>
							<div className="home__slider_item__title">BIFROST</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image18}")`}}></div>
							<div className="home__slider_item__title">LayerZero Labs</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image19}")`}}></div>
							<div className="home__slider_item__title">Obol Labs</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image20}")`}}></div>
							<div className="home__slider_item__title">Vega Protocol</div>
						</div>
						<div className="home__slider_item__container">
							<div className="home__slider_item__image" style={{backgroundImage: `url("${image21}")`}}></div>
							<div className="home__slider_item__title">Aleo</div>
						</div>
					</Slider>
				</div>
			</Paper>

		</Box>
	);
}

function mapStateToProps({ auth, projects }) {
	return {
		dataProjects: projects.list
	};
}

const mapDispatchToProps = {
	changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
