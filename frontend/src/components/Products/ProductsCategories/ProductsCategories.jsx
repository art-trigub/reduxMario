import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';

import ProductsCategoriesTabPanel from '../ProductsCategoriesTabPanel/ProductsCategoriesTabPanel'
import { AppBar } from '@material-ui/core';
import { saveProductCategoty } from '../../../store/actions/productsCategories'

function ProductsCategories({ productId, saveProductCategoty, productsCategories }) {

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [editMode, setEditMode] = useState(false);

	// function onChange({ target }) {
	// 	setItemCategories({
	// 		...itemCategories,
	// 		[target.name]: target.value
	// 	});
	// }

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `scrollable-auto-tab-${index}`,
			'aria-controls': `scrollable-auto-tabpanel-${index}`,
		};
	}

	function onAddButtonClick(productId) {

		const newCategory = {
			title: 'new category',
			fields: []
		}

		saveProductCategoty(newCategory, productId)
	}

	return (

		<Paper style={{ marginTop: '20px' }}>
			<IBoxHeader>
				<Button onClick={() => onAddButtonClick(productId)} variant='outlined' color='secondary'>add category</Button>
			</IBoxHeader>
			<Divider />
			<Box p={2}>
				<InputLabel shrink>categories</InputLabel>
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							variant="scrollable"
							scrollButtons="auto"
							value={value}
							id='productsCategoryTabs'
							onChange={handleChange}
							aria-label="scrollable auto tabs example"
						>
							{
								productsCategories.map((category, index) => {
									return (
										<Tab
											key={category.id}
											label={category.title}
											index={index}
											disabled={editMode && value !== index ? true : false}
											{...a11yProps(index)}
										/>
									)
								})
							}
						</Tabs>
					</AppBar>
					<>
						{
							productsCategories.map((category, index) => {
								return (
									<ProductsCategoriesTabPanel
										key={category.id}
										editMode={editMode}
										setEditMode={setEditMode}
										value={value}
										index={index}
										category={category}
										productId={productId}
									/>
								)
							})
						}
					</>
				</div>
			</Box>
		</Paper>
	);
}


function mapStateToProps({ productsCategories }, { id, name }) {

	return {
		productsCategories: productsCategories.list,
		productId: id
	};

}

const mapDispatchToprops = {
	saveProductCategoty: saveProductCategoty

};

export default connect(mapStateToProps, mapDispatchToprops)(ProductsCategories);


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));





