import React from 'react'
import { connect } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { delProductCategory } from '../../../store/actions/productsCategories'


import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader';


function ProductsCategoryView({ value,
	index,
	category,
	editMode,
	setEditMode,
	productId,
	delProductCategory
}) {

	return (
		<>
			<IBoxHeader>
				<IconButton onClick={() => setEditMode(!editMode)}>
					<EditIcon></EditIcon>
				</IconButton>
				<button onClick={() => console.log(category)} >show state</button>
				<button onClick={() => delProductCategory(category.id, productId)}>delete</button>
			</IBoxHeader>
			<Divider />
			<Box p={3}>
				{value === index && (
					<>
						<Typography>{category.title}</Typography>
						{category.fields.map(field => (
							<div key={field.id}>
								<p>{field.type}</p>
								<p>{field.label}</p>
								<p>{field.value}</p>
							</div>
						))}
					</>
				)}
			</Box>
		</>
	)
}


function mapStateToProps({ productsCategories }, { productId }) {

	return {

	};

}

const mapDispatchToprops = {
	delProductCategory: delProductCategory
};

export default connect(mapStateToProps, mapDispatchToprops)(ProductsCategoryView);

