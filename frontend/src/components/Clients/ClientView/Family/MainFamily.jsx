import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveEditedData, saveFamilyData, setNewUserData, clearNewUserData } from '../../../../store/actions/clientFamily'

import Divider from '@material-ui/core/Divider'
import { Paper, Box } from '@material-ui/core';

import TabsFamily from './TabsFamily'
import AddButton from '../../../CommonsComponents/AddButton/AddButton'
import EditButton from '../../../CommonsComponents/EditButton/EditButton'
import SaveButton from '../../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../../CommonsComponents/CancelButton/CancelButton'


import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader'



function Main({ saveEditedData, saveFamilyData, setNewUserData, clearNewUserData, data }) {
    const [currentTabsIndex, setCurrentTabsIndex] = useState(0)


    const [modeView, setModeView] = useState(true)
    const [modeAddNew, setModeAddNew] = useState(false)
    const [modeEdit, setModeEdit] = useState(false)
    const [newUserActive, setnewUserActive] = useState(false)
    const [editFamilyActive, setEditFamilyActive] = useState(false)

    function openModeAddNew() {
        setModeView(false)
        setModeAddNew(true)
        setnewUserActive(true)
    }

    function openModeEdit() {
        setModeView(false)
        setModeEdit(true)
    }

    function openModeView() {
        setModeAddNew(false)
        setModeEdit(false)
        setModeView(true)
    }

    function changeNewUserData({ target }) {
        setNewUserData(target)
    }

    function onSave() {
        saveFamilyData()
        clearNewUserData()
        openModeView()
        setCurrentTabsIndex(data.length)
    }

    function onSaveEdited() {
        saveEditedData()
        openModeView()
    }

    function onCancel() {
        clearNewUserData()
        setEditFamilyActive(false)
        openModeView()
    }

    function onEdit() {
        setEditFamilyActive(true)
        openModeEdit()
    }

    return (
        <div>
            {modeView
                &&
                <Paper elevation={3}>
                    <IBoxHeader>
                        <AddButton onClick={openModeAddNew} />
                        <EditButton onClick={onEdit} />
                    </IBoxHeader>
                    <Divider />
                    <Box>
                        <TabsFamily setCurrentTabsIndex={setCurrentTabsIndex} currentTabsIndex={currentTabsIndex} modeView={modeView} />
                    </Box>
                </Paper>}
            {
                modeAddNew
                &&
                <Paper elevation={3}>
                    <IBoxHeader>
                        <CancelButton onClick={onCancel} />
                        <SaveButton onClick={onSave} />
                    </IBoxHeader>
                    <Divider />
                    <Box>
                        <TabsFamily onChange={changeNewUserData} setCurrentTabsIndex={setCurrentTabsIndex} newUserActive={newUserActive} />
                    </Box>
                </Paper>}
            {
                modeEdit
                &&
                <Paper elevation={3}>
                    <IBoxHeader>
                        <CancelButton onClick={onCancel} />
                        <SaveButton onClick={onSaveEdited} />
                    </IBoxHeader>
                    <Divider />
                    <Box>
                        <TabsFamily setCurrentTabsIndex={setCurrentTabsIndex} editFamilyActive={editFamilyActive} currentTabsIndex={currentTabsIndex} />
                    </Box>
                </Paper>}
        </div>
    )
}

function mapStateToProps({ clientFamily }) {
    return {
        data: clientFamily.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveEditedData: bindActionCreators(saveEditedData, dispatch),
        setNewUserData: bindActionCreators(setNewUserData, dispatch),
        saveFamilyData: bindActionCreators(saveFamilyData, dispatch),
        clearNewUserData: bindActionCreators(clearNewUserData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
