import React from 'react';
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from './Table'


export default function ControlledAccordions({ data }) {
    const { t } = useTranslation()
    const headersFirstTable = [t('paymentMethod'), t('fourNumber'), t('company')]
    const headersSecondTable = [t('tz'), t('name'), t('surname'), t('whoToTheClient'), t('phoneNumber')]
    const headersThirdTable = [t('bank'), t('bankCode'), t('branch'), t('accountNumber'), t('oraatKeva')]
    const headersFourthTable = []


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{t('companyAndPaymentMethod')}</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </AccordionSummary>
                <Table className="accordion-tab__table" headers={headersFirstTable} />

            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>{t('otherPeople')}</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <Table className="accordion-tab__table" headers={headersSecondTable} />
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>{t('accountNumber')}</Typography>
                    <Typography className={classes.secondaryHeading}>

                    </Typography>
                </AccordionSummary>
                <Table className="accordion-tab__table" headers={headersThirdTable} />
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>{t('clientAndHisRelatives')}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-tab">
                    <Table className="accordion-tab__table" headers={headersFourthTable} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({

}));
