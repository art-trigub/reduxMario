import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { connect } from 'react-redux'

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Loader from '../../CommonsComponents/Loader/Loader';
import IBoxHeader from '../../CommonsComponents/Iboxes/IBoxHeader'
import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'

import { saveProduct } from '../../../store/actions/products'
import { changeListBreadCrumbs } from '../../../store/actions/breadCrumbs'


function ProductForm({ saveProduct, product, id, changeListBreadCrumbs }) {

	const { t } = useTranslation();
	const history = useHistory();
	const [item, setItem] = useState(false);

	useEffect(() => {
		if (product === null) {
			fetchData();
		} else if (product) {
			setItem(product);
			changeListBreadCrumbs(['Продукты', `${product.id ? product.id : t('newProduct')}`])
			document.title = product.id ? product.id : t('newProduct')
		}
	}, [])

	const fetchData = async () => {
		const result = await axios(
			`https://5f2588f7c85de200162931f8.mockapi.io/users/products/${id}`,
		);
		setItem(result.data);
		document.title = result.data.id ? result.data.id : 'создание'
		changeListBreadCrumbs(['Продукты', `${result.data.id ? result.data.id : 'создание'}`])
	};

	function onChange({ target }) {
		setItem({
			...item,
			[target.name]: target.value
		});
	}

	function onFormSubmit(e) {
		e.preventDefault();
		saveProduct(item);
		history.push('/products');
	}

	return (
		<>
			{
				!item
					?
					<Loader />
					:
					<>
						<Paper elevation={3}>
							<form onSubmit={onFormSubmit}>
								<IBoxHeader>
									<SaveButton type='submit' />
									<Link className='textDecorationNone' to={`/products`}>
										<CancelButton />
									</Link>

									<Button onClick={() => console.log(item)}>show state</Button>
								</IBoxHeader>
								<Divider />
								<Box p={2}>
									<Grid item className='flexColumnCenter'>
										<Box p={1}>
											<TextField type='text' onChange={onChange} label='name' name='name' value={item.name}></TextField>
										</Box>
										<Box p={1}>
											<TextField type='text' onChange={onChange} label='company' name='company' value={item.company}></TextField>
										</Box>
										<Box p={1}>
											<TextField type='text' onChange={onChange} label='type' name='type' value={item.type}></TextField>
										</Box>
									</Grid>
								</Box>
							</form>
						</Paper>
					</>
			}
		</>
	)
}

function mapStateToProps({ products }, { id }) {

	const NowDate = Date.now();

	const newProduct = {
		"product": '',
		"company": '',
		"type": ''
	}

	return {
		id: id,
		product: id !== 'new'
			?
			products.list.find(item => item.id === id) ? products.list.find(item => item.id === id) : null
			:
			newProduct,
	};

}

const mapDispatchToprops = {
	saveProduct: saveProduct,
	changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToprops)(ProductForm);
