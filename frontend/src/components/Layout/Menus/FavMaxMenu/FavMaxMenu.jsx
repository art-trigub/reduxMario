import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import useTheme from "@material-ui/core/styles/useTheme";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function FavMaxMenu({ favMenu }) {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<>
			{favMenu ? (
				favMenu.map((item) => (
					<Link
						to={item.url}
						key={item.name}
						className="textDecorationNone"
						style={{ color: theme.palette.common.black }}
					>
						<ListItem button key={item.name}>
							<ListItemIcon className="favMenu__icon_autoWidth">
								<Icon>{item.iconName}</Icon>
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					</Link>
				))
			) : (
				<div>{t("nofavorites")}</div>
			)}
		</>
	);
}

function mapStateToProps({ menu }) {
	return {
		favMenu: menu.favMenu,
	};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FavMaxMenu);
