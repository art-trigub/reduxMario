import React, { useState } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'


function Layout() {

	const [drawerOpen, setDrawerOpen] = useState(false);

	function handleOpenDrawer() {
		setDrawerOpen(!drawerOpen);
	}

	return (
		<div className='dashboardWrap'>

			<Header
				handleOpenDrawer={handleOpenDrawer}
				drawerOpen={drawerOpen}
			>
			</Header>

			<Sidebar
				drawerOpen={drawerOpen}
			>
			</Sidebar>

			<Content>
			</Content>

		</div >
	)
}


export default Layout
