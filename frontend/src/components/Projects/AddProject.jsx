import React, { Component, useState, useEffect, useRef  } from "react";
import {Link, useRouteMatch} from "react-router-dom";
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';

import { saveProject, delProject } from '../../store/actions/projects'



import SaveButton from '../custom/BasicComponents/SaveButton';
import CancelButton from '../custom/BasicComponents/CancelButton';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CreateProject({saveProject, projectsData}) {
const [item, setItem] = useState({
    title_project: '',
    description_project: '',
    type_project: '',
    avatar_project: ''
})

function onSave() {
	saveProject(item)
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
									name='title_project'
									value={item.title_project}
								>
								</TextField>

								<TextField          
									onBlur={props.handleBlur}
									type='text'
									className='fullWidth addProject_form_item'
									id='description_project_form'
									onChange={({ target }) => onChange(target)}
									label={"Описание"}
									name='description_project'
									value={item.description_project}
									multiline
								>
								</TextField>

								{/* <FormControl 
									onBlur={props.handleBlur}
									className="fullWidth addProject_form_item">
									<InputLabel id="">{"Статус проекта"}</InputLabel>
									<Select
										name='type_project'
										value={item.type_project}
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

function mapStateToProps({projects}) {
	return {
		projectsData: projects.list,
    //  isLoading: projects.isLoading
	};
}

const mapDispatchToProps = {
    saveProject: saveProject,
	delProject: delProject
	// changeListBreadCrumbs: changeListBreadCrumbs,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

