import { combineReducers } from 'redux';


import breadCrumbs from './breadCrumbs'
import projects from './projects'



export default combineReducers({

	breadCrumbs: breadCrumbs,
	projects: projects


});
