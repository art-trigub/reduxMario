import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IBoxHeader from "../../CommonsComponents/Iboxes/IBoxHeader";
import EditButton from "../../CommonsComponents/EditButton/EditButton";
import Loader from "../../CommonsComponents/Loader/Loader";
import ProductsCategories from "../ProductsCategories/ProductsCategories";
import { setProductsCategories } from "../../../store/actions/productsCategories";
import { changeListBreadCrumbs } from "../../../store/actions/breadCrumbs";

function ProductView({
	id,
	product,
	setProductsCategories,
	changeListBreadCrumbs,
}) {
	// const { t } = useTranslation()

	const [item, setItem] = useState(false);

	useEffect(() => {
		if (product === null) {
			fetchData();
		} else if (product) {
			setItem(product);
			document.title = `${product.id}`;
			changeListBreadCrumbs(["Продукты", `${product.id}`]);
		}
		fetchCategories();
	}, []);

	const fetchData = async () => {
		const resultProduct = await axios(
			`https://5f2588f7c85de200162931f8.mockapi.io/users/products/${id}`
		);
		setItem(resultProduct.data);
		document.title = `${resultProduct.data.id}`;
		changeListBreadCrumbs(["Продукты", `${resultProduct.data.id}`]);
	};

	const fetchCategories = async () => {
		const resultCategories = await axios(
			`https://5f2588f7c85de200162931f8.mockapi.io/users/products/${id}/categories`
		);
		setProductsCategories(resultCategories.data);
	};

	// function addNewCategory() {
	// 	setItemCategories([
	// 		...itemCategories,
	// 		{
	// 			name: 'new category',
	// 			fields: []
	// 		}
	// 	])
	// }

	return (
		<>
			{!item ? (
				<Loader />
			) : (
				<>
					<Paper elevation={3}>
						<IBoxHeader p={1}>
							<Link
								style={{ textDecoration: "none" }}
								to={`/products/update/${item.id}`}
							>
								<EditButton />
							</Link>
						</IBoxHeader>
						<Divider />
						<Box p={2}>
							<InputLabel shrink>product</InputLabel>
							{item.name}
						</Box>
						<Box p={2}>
							<InputLabel shrink>company</InputLabel>
							{item.company}
						</Box>
						<Box p={2}>
							<InputLabel shrink>type</InputLabel>
							{item.type}
						</Box>
						<Divider />
					</Paper>

					<ProductsCategories id={id} />
				</>
			)}
		</>
	);
}

function mapStateToProps({ products }, { id }) {
	return {
		id: id,
		product: products.list.find((item) => item.id === id)
			? products.list.find((item) => item.id === id)
			: null,
	};
}

const mapDispatchToprops = {
	setProductsCategories: setProductsCategories,
	changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToprops)(ProductView);
