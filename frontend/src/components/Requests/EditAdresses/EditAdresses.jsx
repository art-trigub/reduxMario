import React, { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';

import Table from '../../CommonsComponents/Table/Table'
import AddButton from '../../CommonsComponents/AddButton/AddButton'
import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';

import '../style.css'
import Modal from './Modal'
import { saveNewAdress, onDeleteFromTable, onEditFromtable } from '../../../store/actions/requests/requests'


function EditAdresses({ adressesList, onDeleteFromTable, onEditFromtable, activeStep, handleBack, steps, handleNext }) {

    const { t } = useTranslation();
    const [visibleModal, setVisibleModal] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editingItem, setEditingItem] = useState()
    const [lengthAdressesList, setLengthAdressesList] = useState(true)

    const data = [
        {
            city: '',
            street: '',
            streetHeb: '',
            house: '',
            appartament: '',
            entrance: ''
        }
    ]

    const emptyNewAdress = {
        city: '',
        street: '',
        streetHeb: '',
        house: '',
        appartament: '',
        entrance: ''
    }

    const [newAdress, setNewAdress] = useState({
        city: '',
        street: '',
        streetHeb: '',
        house: '',
        appartament: '',
        entrance: ''
    })


    function onChangeAdress(target) {
        editMode
            ?
            setEditingItem({
                ...editingItem,
                [target.name]: target.value
            })
            :
            setNewAdress({
                ...newAdress,
                [target.name]: target.value
            })
    }



    function addNewItem() {
        setEditMode(false)
        setVisibleModal(true)
        setLengthAdressesList(true)
    }

    function handleNextWithValidation() {
        adressesList.length
            ? handleNext()
            : setLengthAdressesList(false)
    }

    // function onEdit(item) {
    //     setVisibleModal(true)
    //     setEditMode(true)
    //     setEditingItem(item)
    // }

    function closeModal() {
        setVisibleModal(false)
    }

    function onEditFromtable(item) {
        setVisibleModal(true)
        setEditMode(true)
        setEditingItem(item)
    }

    return (

        <div>
            {visibleModal &&
                <Modal
                    handleNext={handleNext}
                    data={editMode ? editingItem : newAdress}
                    visible={visibleModal}
                    setVisibleModal={setVisibleModal}
                    closeModal={closeModal}
                    onChange={onChangeAdress}
                    emptyNewAdress={emptyNewAdress}
                    setNewAdress={setNewAdress}
                    editMode={editMode}
                >
                </Modal>}

            <div style={{ marginBottom: "10px" }}>
                <AddButton onClick={addNewItem} />
                {!lengthAdressesList && <span className="messageValidation">{t("noAddressesAdded")}</span>}
            </div>
            <Divider />
            <Box>
                <Table onDelete={onDeleteFromTable} onEdit={onEditFromtable} headers={[`${t("city")}`, `${t("street")}`, `${t("streetHeb")}`, `${t("house")}`, `${t("apartment")}`, `${t("entrance")}`]} data={adressesList} fields={['city', 'street', 'streetHeb', 'house', 'appartament', 'entrance']}></Table>
            </Box>
            <div className="button-steps__wrapper">
                <div className="btn">
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        {t("back")}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNextWithValidation}
                    >
                        {activeStep === steps.length - 1 ? `${t("create")}` : `${t("next")}`}
                    </Button>
                </div>
            </div>
        </div>

    )
}

function mapStateToProps({ request }) {
    return {
        adressesList: request.adressesList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewAdress: bindActionCreators(saveNewAdress, dispatch),
        onDeleteFromTable: bindActionCreators(onDeleteFromTable, dispatch),
        onEditFromtable: bindActionCreators(onEditFromtable, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAdresses);

