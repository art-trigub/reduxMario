import React from 'react'
import { useTranslation } from 'react-i18next'

import { connect } from 'react-redux'
import { Route, Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import useTheme from '@material-ui/core/styles/useTheme'


function Breadcrums({ breadCrumbsList }) {

	const theme = useTheme();
	const { t } = useTranslation()

	return (
		<Route>
			{({ location }) => {
				const pathnames = location.pathname.split("/").filter(x => x);
				const breadCrumbs = breadCrumbsList
				return (
					<Breadcrumbs style={{ color: theme.palette.common.white }} aria-label="Breadcrumb" className='header_breadcrumbs'>
						<Typography style={{ color: theme.palette.common.white }} >
							<Link style={{ color: theme.palette.common.white }} to="/">
								{t('home')}
							</Link>
						</Typography>
						{breadCrumbs.map((value, index) => {
							const last = index === breadCrumbs.length - 1;
							const to = `/${pathnames.slice(0, index + 1).join("/")}`;
							return last ? (
								<Typography style={{ color: theme.palette.common.white }} key={to}>
									{value}
								</Typography>
							) : (
									<Typography key={value} style={{ color: theme.palette.common.white }}  >
										<Link style={{ color: theme.palette.common.white }} to={to} key={to}>
											{value}
										</Link>
									</Typography>
								);
						})}
					</Breadcrumbs>
				);
			}}
		</Route>
	)
}

function mapStateToProps({ breadCrumbs }) {
	return {
		breadCrumbsList: breadCrumbs.breadCrumbsList
	}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrums);
