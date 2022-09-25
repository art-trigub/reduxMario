import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveEditedData, saveFamilyData, setNewPersonData, clearNewPersonData, deletePerson } from '../../../store/actions/requests/requests'

import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TabsEditFamily from './TabsEditFamily'
import AddButton from '../../CommonsComponents/AddButton/AddButton'
import EditButton from '../../CommonsComponents/EditButton/EditButton'
import SaveButton from '../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../CommonsComponents/CancelButton/CancelButton'
import DeleteButton from '../../CommonsComponents/DeleteButton/DeleteButton'


function Main({ saveEditedData, saveFamilyData, setNewUserData, setNewPersonData, data, clearNewPersonData, deletePerson, activeStep, handleBack, steps, handleNext }) {
    const { t } = useTranslation()
    const [currentTabsIndex, setCurrentTabsIndex] = useState(0)
    const [modeView, setModeView] = useState(false)
    const [modeAddNew, setModeAddNew] = useState(true)
    const [modeEdit, setModeEdit] = useState(false)
    const [newUserActive, setnewUserActive] = useState(true)
    const [editFamilyActive, setEditFamilyActive] = useState(false)
    const [currentEditingPerson, setCurrentEditingPerson] = useState()

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
        setNewPersonData(target)
    }

    function onSave() {
        saveFamilyData()
        clearNewPersonData()
        openModeView()
        setCurrentTabsIndex(data.length)
    }

    function onSaveEdited() {
        saveEditedData()
        openModeView()
    }

    function onCancel() {
        clearNewPersonData()
        setEditFamilyActive(false)
        openModeView()
    }

    function onEdit() {
        setEditFamilyActive(true)
        openModeEdit()
    }

    function onDelete() {
        const result = window.confirm(t("wantToDelete"))
        if (result) {
            deletePerson(currentEditingPerson.id)
            setModeEdit(false)
            setModeView(true)
            setCurrentTabsIndex(0)
        }
    }

    return (
        <div>
            {modeView
                &&
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <AddButton style={{ marginRight: "10px" }} onClick={openModeAddNew} />
                        <EditButton onClick={onEdit} />
                    </div>
                    <Divider />
                    <Box>
                        <TabsEditFamily setCurrentTabsIndex={setCurrentTabsIndex} currentTabsIndex={currentTabsIndex} modeView={modeView} />
                    </Box>
                </div>
            }
            {
                modeAddNew
                &&
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <CancelButton style={{ marginRight: "10px" }} onClick={onCancel} />
                        <SaveButton onClick={onSave} />
                    </div>
                    <Divider />
                    <Box>
                        <TabsEditFamily onChange={changeNewUserData} currentTabsIndex={currentTabsIndex} setCurrentTabsIndex={setCurrentTabsIndex} newUserActive={newUserActive} />
                    </Box>
                </div>
            }
            {
                modeEdit
                &&
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <CancelButton style={{ marginRight: "10px" }} onClick={onCancel} />
                        <SaveButton style={{ marginRight: "10px" }} onClick={onSaveEdited} />
                        <DeleteButton onClick={onDelete} />

                    </div>
                    <Divider />
                    <Box>
                        <TabsEditFamily setCurrentEditingPerson={setCurrentEditingPerson} setCurrentTabsIndex={setCurrentTabsIndex} editFamilyActive={editFamilyActive} currentTabsIndex={currentTabsIndex} />
                    </Box>
                </div>
            }
            <div className="button-steps__wrapper">
                <div className="btn">
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        {t("back")}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? t("create") : t("next")}
                    </Button>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps({ request }) {
    return {
        data: request.familyList,
        editedPerson: request.editedPerson,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveEditedData: bindActionCreators(saveEditedData, dispatch),
        setNewPersonData: bindActionCreators(setNewPersonData, dispatch),
        saveFamilyData: bindActionCreators(saveFamilyData, dispatch),
        clearNewPersonData: bindActionCreators(clearNewPersonData, dispatch),
        deletePerson: bindActionCreators(deletePerson, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
