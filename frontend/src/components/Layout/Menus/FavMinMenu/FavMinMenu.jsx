import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function FavMinMenu({ favMenu }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{favMenu &&
				favMenu.map((item) => (
					<Tooltip
						key={item.name}
						title={item.name}
						placement="right"
						arrow
					>
						<Link className="favMenu__minLink" to={item.url}>
							<IconButton>
								<Icon>{item.iconName}</Icon>
							</IconButton>
						</Link>
					</Tooltip>
				))}
		</div>
	);
}

function mapStateToProps({ menu }) {
	return {
		favMenu: menu.favMenu,
	};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FavMinMenu);
