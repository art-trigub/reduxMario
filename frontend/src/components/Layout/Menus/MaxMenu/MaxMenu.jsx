import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import useTheme from '@material-ui/core/styles/useTheme'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { addFavMenu, removeFavMenu } from '../../../../store/actions/menu'


function MaxMenu({ menuItems, addFavMenu, removeFavMenu, favMenu }) {

	const theme = useTheme();

	const [prevState, setPrevState] = useState({})

	const handleClick = (item) => {
		setPrevState(prevState => (
			{
				...prevState,
				[item]: !prevState[item]
			}
		))
	}

	function addToFav(e, item) {
		e.preventDefault();
		addFavMenu(item);
	}

	function removeFav(e, item) {
		e.preventDefault();
		removeFavMenu(item.name);
	}

	const handler = (children) => {

		return children.map((subOption) => {
			if (!subOption.children) {
				return (
					<div key={subOption.name}>
						<Link
							className='textDecorationNone'
							to={subOption.url}
							style={{ color: theme.palette.common.black }}
						>
							<ListItem
								button
								key={subOption.name}>
								<ListItemIcon className='favMenu__icon_autoWidth'>
									<Icon>{subOption.iconName}</Icon>
								</ListItemIcon>
								<ListItemText
									primary={subOption.name}
								/>
								{
									favMenu.filter((item) => item.name === subOption.name).length > 0
										?
										<IconButton className='favMenu__icon favMenu__icon_inactive' onClick={(e) => removeFav(e, subOption)}>
											<StarIcon color="secondary" />
										</IconButton>
										:
										<IconButton className='favMenu__icon favMenu__icon_active' onClick={(e) => addToFav(e, subOption)}>
											<StarBorder style={{ color: theme.palette.grey.A200 }} />
										</IconButton>
								}
							</ListItem>
						</Link>
					</div>
				)
			}
			return (
				<div key={subOption.name}>
					<ListItem
						button
						onClick={() => handleClick(subOption.name)}>
						<ListItemIcon className='favMenu__icon_autoWidth'>
							<Icon>{subOption.iconName}</Icon>
						</ListItemIcon>
						<ListItemText primary={subOption.name} />
						{prevState[subOption.name] ?
							<ExpandLess /> :
							<ExpandMore />
						}
					</ListItem>
					<Collapse
						in={prevState[subOption.name]}
						timeout="auto"
						unmountOnExit
						style={{ paddingLeft: '15px' }}
					>
						{handler(subOption.children)}
					</Collapse>
				</div>
			)
		})
	}

	return (
		<div>
			{handler(menuItems)}
		</div>
	)
}

function mapStateToProps({ menu }) {

	return {
		menuItems: menu.menu,
		favMenu: menu.favMenu
	};

}

const mapDispatchToProps = {
	addFavMenu: addFavMenu,
	removeFavMenu: removeFavMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(MaxMenu)