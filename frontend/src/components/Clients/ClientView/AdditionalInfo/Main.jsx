import React, { useState } from 'react'

import { Paper, Box } from '@material-ui/core';
import AddButton from '../../../CommonsComponents/AddButton/AddButton'
import EditButton from '../../../CommonsComponents/EditButton/EditButton'
import SaveButton from '../../../CommonsComponents/SaveButton/SaveButton'
import CancelButton from '../../../CommonsComponents/CancelButton/CancelButton'
import Divider from '@material-ui/core/Divider'

import IBoxHeader from '../../../CommonsComponents/Iboxes/IBoxHeader'
import Tabs from './Tabs'
import './style.css'



function Main() {
    const [data, setData] = useState({
        id: 1,
        gender: "Мужчина",
        maritalStatus: "Не женат",
        children: "3",
        hospitalCassa: "Норма",
        growth: "184",
        weight: "81",
        bmi: "2.72",
        smoking: "",
        didSmoking: "",
        quantityCigarettes: "",
        longOutSmoking: ""
    })

    const [editedData, setEditedData] = useState(data)
    const [modeView, setModeView] = useState(true)
    const [modeAddNew, setModeAddNew] = useState(false)
    const [modeEdit, setModeEdit] = useState(false)
    const [visibleButton, setVisibleButton] = useState(false)

    function openModeAddNew() {
        setModeView(false)
        setModeAddNew(true)
    }

    function openModeEdit() {
        setModeView(false)
        setModeEdit(true)
    }

    function openModeView() {
        setModeEdit(false)
        setModeView(true)
    }

    function onSave() {
        openModeView()
        setData(editedData)
    }

    function onEdit() {
        openModeEdit()
    }

    function onCancel() {
        openModeView()
        openModeView()
        setEditedData(data)
    }

    return (
        <div>
            <Paper elevation={3}>
                <IBoxHeader>
                    {modeView && visibleButton &&

                        <>
                            <EditButton onClick={onEdit} />
                        </>
                    }
                    {modeEdit &&
                        <>
                            <CancelButton onClick={onCancel} />
                            <SaveButton onClick={onSave} />
                        </>
                    }
                </IBoxHeader>
                <Divider />
                <Box>
                    <Tabs setVisibleButton={setVisibleButton} modeEdit={modeEdit} modeView={modeView} data={data} editedData={editedData} setEditedData={setEditedData} />
                </Box>

            </Paper>
        </div>
    )
}

export default Main
