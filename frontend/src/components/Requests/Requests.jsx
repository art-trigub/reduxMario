import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, shallowCompare } from 'react-redux'


import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import IBoxBody from '../CommonsComponents/Iboxes/IBoxBody'
import EditMainInformation from './EditMainInformation/EditMainInformation';
import EditAdditionalInfo from './EditAdditionalInfo/EditAdditionalInfo'
import EditContacts from './EditContacts/EditContacts'
import EditFamily from './EditFamily/EditFamily'
import EditAdresses from './EditAdresses/EditAdresses'
import SummaryInfo from './SummaryInfo/SummaryInfo'
import { changeListBreadCrumbs } from '../../store/actions/breadCrumbs'

import './style.css'

export default function HorizontalLinearStepper() {
    const { t } = useTranslation();
    const [errorsValidations, setErrorsValidations] = useState(false)
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const dispatch = useDispatch()

    useEffect(() => {
        document.title = t('addingClient')
        dispatch(changeListBreadCrumbs([`${t('addingClient')}`]))
    }, [t])

    function getSteps() {
        return [`${t('mainInformation')}`, `${t("additionalInfo")}`, `${t("addresses")}`, `${t("contacts")}`, `${t("family")}`, `${t('summaryInformation')}`];
    }

    const isStepOptional = (step) => {
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    function getStepContent(step) {

        switch (step) {
            case 0:
                return <EditMainInformation handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></EditMainInformation>
            case 1:
                return <EditAdditionalInfo handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></EditAdditionalInfo>
            case 2:
                return <EditAdresses handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></EditAdresses>
            case 3:
                return <EditContacts handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></EditContacts>
            case 4:
                return <EditFamily handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></EditFamily>
            case 5:
                return <SummaryInfo handleNext={handleNext} activeStep={activeStep} handleBack={handleBack} steps={steps}></SummaryInfo>

            default:
                return 'Unknown step';
        }
    }


    function handleNext() {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                        <Container style={{ padding: 0, overflow: "auto", width: "100%", maxWidth: "100%", }}>
                            <div>
                                <Paper style={{ minHeight: "78vh", height: "auto", padding: "20px", position: "relative" }}>
                                    <div className="request__container">
                                        <Typography component="div" className={classes.instructions}>{getStepContent(activeStep)}</Typography>



                                    </div>
                                </Paper>
                            </div>
                        </Container >

                    )}
            </div>
        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));