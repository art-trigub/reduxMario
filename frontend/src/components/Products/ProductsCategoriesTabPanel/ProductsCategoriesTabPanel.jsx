import React from 'react'
import ProductsCategoryView from '../ProductsCategoryView/ProductsCategoryView';
import ProductsCategoryForm from '../ProductsCategoryForm/ProductsCategoryForm';


function ProductsCategoriesTabPanel({
	productId,
	category,
	value,
	index,
	editMode,
	setEditMode,
}) {

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
		>
			{
				!editMode
					?
					<ProductsCategoryView
						value={value}
						index={index}
						category={category}
						editMode={editMode}
						setEditMode={setEditMode}
						productId={productId}
					/>
					:
					<ProductsCategoryForm
						value={value}
						index={index}
						category={category}
						editMode={editMode}
						setEditMode={setEditMode}
						productId={productId}
					/>
			}
		</div>
	);
}


export default ProductsCategoriesTabPanel
