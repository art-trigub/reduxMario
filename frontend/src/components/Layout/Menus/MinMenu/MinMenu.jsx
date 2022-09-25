import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useTheme from '@material-ui/core/styles/useTheme'
import NestedMenuItem from "material-ui-nested-menu-item";


function MinMenu({ menuItems }) {

	const theme = useTheme();

	const [menuPosition, setMenuPosition] = useState(null);

	const handleRightClick = (event) => {
		if (menuPosition) {
			return;
		}
		event.preventDefault();
		setMenuPosition({
			top: event.pageY,
			left: event.pageX
		});
	};

	const handleItemClick = (event) => {
		setMenuPosition(null);
	};

	const renderSubMenu = (items) => {
		if (!items.children) {
			return <Link style={{ color: theme.palette.common.black, textDecoration: 'none' }} key={items.name} to={items.url}><MenuItem onClick={handleItemClick}><Icon className='minMenu__item-icon'>{items.iconName}</Icon>{items.name}</MenuItem></Link>
		} else {
			return (
				<NestedMenuItem
					key={items.name}
					style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
					label={<div className='minMenu__item'><Icon className='minMenu__item-icon'>{items.iconName}</Icon> {items.name}</div>}
					parentMenuOpen={!!menuPosition}
					onClick={handleItemClick}
				>
					{items.children.map((child) => renderSubMenu(child))}
				</NestedMenuItem>
			)
		}
	}

	return (
		<>
			<IconButton onClick={handleRightClick}>
				<MenuIcon></MenuIcon>
			</IconButton>
			<Menu
				open={!!menuPosition}
				onClose={() => setMenuPosition(null)}
				anchorReference="anchorPosition"
				anchorPosition={menuPosition}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
			>
				{menuItems.map((item) => (
					item.children
						?
						<NestedMenuItem
							key={item.name}
							style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
							label={<div className='minMenu__item'><Icon className='minMenu__item-icon'>{item.iconName}</Icon> {item.name}</div>}
							parentMenuOpen={!!menuPosition}
							onClick={handleItemClick}
						>
							{item.children.map((child) => renderSubMenu(child))}
						</NestedMenuItem>
						:
						<Link style={{ color: theme.palette.common.black, textDecoration: 'none' }} to={item.url}>
							<MenuItem onClick={handleItemClick}><Icon className='minMenu__item-icon'>{item.iconName}</Icon>{item.name}</MenuItem>
						</Link>
				))}
			</Menu>
		</>
	);
};

function mapStateToProps({ menu }) {

	return {
		menuItems: menu.menu,
	};

}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MinMenu)
