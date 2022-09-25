import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useTranslation } from "react-i18next";
import { Formik, Form } from 'formik';

import Table from './Table'
import AddButton from '../../CommonsComponents/AddButton/AddButton'
import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';


import Modal from './Modal'
import { saveNewContact, onDeleteContactFromTable, onEditFromtable } from '../../../store/actions/requests/requests'


function EditContacts({ contactsList, onDeleteContactFromTable, onEditFromtable, activeStep, handleBack, steps, handleNext }) {

    const { t } = useTranslation();
    const [visibleModal, setVisibleModal] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editingItem, setEditingItem] = useState()
    const [lengthContactsList, setLengthContactsList] = useState(true)

    const data = [
        {
            contact: '',
            type: '',
            main: '',
            active: '',
            code_mobile: '',
            code_home: '',
            code_fax: ''
        }
    ]

    const emptyNewContact = {
        contact: '',
        type: '',
        main: '',
        active: '',
        code_mobile: '',
        code_home: '',
        code_fax: ''
    }

    const [newContact, setNewContact] = useState({
        contact: '',
        type: '',
        main: '',
        active: '',
        code_mobile: '',
        code_home: '',
        code_fax: ''
    })

    function onChangeCheckBox(target) {
        editMode
            ?
            setEditingItem({
                ...editingItem,
                [target.name]: target.checked
            })
            :
            setNewContact({
                ...newContact,
                [target.name]: target.checked
            })
    }

    function onChangeContact(target) {
        editMode
            ?
            setEditingItem({
                ...editingItem,
                [target.name]: target.value
            })
            :
            setNewContact({
                ...newContact,
                [target.name]: target.value
            })
    }

    function handleNextWithValidation() {
        contactsList.length
            ? handleNext()
            : setLengthContactsList(false)
    }

    function addNewItem() {
        setEditMode(false)
        setVisibleModal(true)
        setLengthContactsList(true)
    }

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
                    data={editMode ? editingItem : newContact}
                    visible={visibleModal}
                    setVisibleModal={setVisibleModal}
                    closeModal={closeModal}
                    onChange={onChangeContact}
                    emptyNewContact={emptyNewContact}
                    setNewContact={setNewContact}
                    onChangeCheckBox={onChangeCheckBox}
                >
                </Modal>}
            <div style={{ marginBottom: "10px" }}>
                <AddButton onClick={addNewItem} />
                {!lengthContactsList && <span className="messageValidation">{t("noContactAdded")}</span>}
            </div>
            <Divider />
            <Box>
                <Table onDelete={onDeleteContactFromTable} onEdit={onEditFromtable} headers={[t("contact"), t("type")]} data={contactsList} fields={['contact', 'type']}></Table>
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
                        {activeStep === steps.length - 1 ? t("create") : t("next")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ request }) {
    return {
        contactsList: request.contactsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveNewContact: bindActionCreators(saveNewContact, dispatch),
        onDeleteContactFromTable: bindActionCreators(onDeleteContactFromTable, dispatch),
        onEditFromtable: bindActionCreators(onEditFromtable, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContacts);

