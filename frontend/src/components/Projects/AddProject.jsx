import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { Formik, Form } from 'formik';

import SaveButton from '../custom/BasicComponents/SaveButton';
import CancelButton from '../custom/BasicComponents/CancelButton';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CreateProject() {
const [item, setItem] = useState({
    title: '',
    desc: '',
    status: '',
    image: ''
})

function onSave() {

}

function onCancel() {

}

function onChange(target) {
    setItem({
        ...item,
        [target.name]: target.value
    })
}

function onSaveItem() {

}

	return (
		<div style={{height: "600px"}} className='content_container'>
			<div>
				<Formik
					onSubmit={onSave}
                    enableReinitialize={true}
                    initialValues={item}
				>
				{(props) => {
					return (
						<Form>
							<div className="addProject_form_container">
								<TextField
									type='text'
									className='fullWidth addProject_form_item'
									onChange={({ target }) => onChange(target)}
									label={"Название проекта"}
									name='title'
									value={item.title}
								>
								</TextField>

								<TextField          
									onBlur={props.handleBlur}
									type='text'
									className='fullWidth addProject_form_item'
									id='description_project_form'
									onChange={({ target }) => onChange(target)}
									label={"Описание"}
									name='desc'
									value={item.desc}
									multiline
								>
								</TextField>

								{/* <FormControl 
									onBlur={props.handleBlur}
									className="fullWidth addProject_form_item">
									<InputLabel id="">{"Статус проекта"}</InputLabel>
									<Select
										name='status_project'
										value={item.status_project}
										onChange={({ target }) => onChange(target)}
										className='fullWidth'
									>
										<MenuItem value="active_project">Активный</MenuItem>
										<MenuItem value="soon_project">Скоро</MenuItem>
										<MenuItem value="ended_project">Закрыт</MenuItem>
									</Select>
								</FormControl> */}
							</div>
								<div className="addProject_button_container">
									<CancelButton onClick={onCancel}/>
									<SaveButton type="submit" />
								</div>
						</Form>

						
					)
				}}


					
				</Formik>

			</div>
				
		</div>
	);
}


export default CreateProject

