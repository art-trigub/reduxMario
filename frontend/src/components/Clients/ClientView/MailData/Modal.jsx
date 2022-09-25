import React from 'react';
import { useTranslation } from 'react-i18next'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Datapicker from './Datapicker'
import './style.css'


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const { t } = useTranslation()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                {t('consentToCreateEmail')}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {t('consentToCreateEmail')}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {t('textGeneralMailAgreement1')}
                    </Typography>
                    <Typography gutterBottom>
                        {t('textGeneralMailAgreement2')}
                    </Typography>
                    <Typography gutterBottom>
                        {t('textGeneralMailAgreement3')}
                    </Typography>
                    <Typography gutterBottom>
                        {t('textGeneralMailAgreement4')}
                    </Typography>
                    <div className="block__wrapper">
                        <div className="block__rubric">{t('emailPassword')}:</div>
                        <div className="block__text">
                            <select name="" >
                                <option value="">{t('clientResponseToCreateMail')}</option>
                                <option value="">{t('yes')}</option>
                                <option value="">{t('no')}</option>
                            </select></div>
                    </div>
                    <div className="block__wrapper">
                        <div className="block__rubric">{t('whoCreatedShikufEsca')}</div>
                        <div className="block__text">Вадим Карпун</div>
                    </div>
                    <div className="block__wrapper">
                        <div className="block__rubric" id="dataPicker__rubric">{t('dateShikufEsca')}</div>
                        <div className="block__text"><Datapicker /></div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type='submite' variant='outlined' startIcon={<SaveIcon />}>{t('save')}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}