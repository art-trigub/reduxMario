import React, { useState } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import SaveIcon from "@material-ui/icons/Save";

import {
	saveProductCategoty,
	delProductCategory,
} from "../../../store/actions/productsCategories";

import IBoxHeader from "../../CommonsComponents/Iboxes/IBoxHeader";
import { TextField } from "@material-ui/core";

function ProductsCategoryForm({
	value,
	index,
	category,
	editMode,
	setEditMode,
	saveProductCategoty,
	delProductCategory,
	productId,
}) {
	const [categoryElem, setCategoryElem] = useState(category);

	const [categoryFiedls, setCategoryFiedls] = useState(category.fields);

	function onChange({ target }) {
		setCategoryElem({
			...categoryElem,
			[target.name]: target.value,
		});
	}

	function onChangeField({ target }, index, id) {
		const current = {
			...categoryFiedls[index],
			[target.name]: target.value,
		};
		const editedFields = categoryFiedls.map((item) =>
			item.id === current.id ? current : item
		);
		setCategoryFiedls(editedFields);
	}

	function onSaveClick() {
		setCategoryElem({
			...categoryElem,
			fields: categoryFiedls,
		});
	}

	function eeee() {
		saveProductCategoty(categoryElem, productId);
		setEditMode(!editMode);
	}

	function handleAddInput() {
		const fields = [...categoryFiedls];
		fields.push({
			type: "",
			label: "",
			data: "",
		});
		setCategoryFiedls([...categoryFiedls, fields]);
	}

	function handleRemoveInput(id) {
		setCategoryFiedls(categoryFiedls.filter((item) => item.id !== id));
	}

	return (
		<>
			<IBoxHeader>
				<IconButton onClick={onSaveClick}>
					<SaveIcon></SaveIcon>
				</IconButton>
				<button onClick={() => handleAddInput()}>add field</button>
				<button onClick={eeee}> send</button>
				<button onClick={() => console.log(categoryElem)}>
					show categoryElem
				</button>
				<button onClick={() => console.log(categoryFiedls)}>
					show categoryFiedls
				</button>
			</IBoxHeader>
			<Divider />
			<Box p={3}>
				{value === index && (
					<div>
						<TextField
							onChange={onChange}
							label="title"
							name="title"
							value={categoryElem.title}
						></TextField>
						{categoryFiedls.map((field, index) => {
							return (
								<div key={field.id}>
									<TextField
										onChange={(e) =>
											onChangeField(e, index)
										}
										label="type"
										name="type"
										value={field.type}
									></TextField>
									<TextField
										onChange={(e) =>
											onChangeField(e, index)
										}
										label="label"
										name="label"
										value={field.label}
									></TextField>
									<TextField
										onChange={(e) =>
											onChangeField(e, index)
										}
										label="value"
										name="value"
										value={field.value}
									></TextField>
									<button
										onClick={() =>
											handleRemoveInput(field.id)
										}
									>
										delete
									</button>
								</div>
							);
						})}
					</div>
				)}
			</Box>
		</>
	);
}

function mapStateToProps({ productsCategories }, { productId }) {
	return {
		productsCategories: productsCategories.list,
		productId: productId,
	};
}

const mapDispatchToprops = {
	saveProductCategoty: saveProductCategoty,
	delProductCategory: delProductCategory,
};

export default connect(
	mapStateToProps,
	mapDispatchToprops
)(ProductsCategoryForm);
