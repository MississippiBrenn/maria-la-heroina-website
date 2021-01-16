import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import MariaImage from '../../images/indigenousMaria.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Working with Maria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <img src={MariaImage} alt='indigenous maria with arms outstretched' />
                            <ul className='instructions'>
                                <li>Thank Maria for all the work that she has done</li>
                                <li>Experience thoughts of joy and hope for the work Maria has accomplished</li>
                                <li>Take a few moments to silently or outloud tune in and express your how much her work has meant to you </li>
                                <li><h4>After positively tuning our experience to the space of Maria, we are ready to continue</h4> </li>
                                <li>When you finish your work please close any tabs you have open utilising Maria and allow her to rest</li>
                            </ul>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography>Searching with Maria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <li>Pick a tab - you can search by missing case or by unidentified </li>
                        <li>Enter in your search criteria for distance of cases and race</li>
                        <li>Maria already has filtered the data based on age and date missing</li>
                        <li>If you do not fill in a case number, Maria will return all possible matches for your search criteria</li>
                        <li>Optional: Enter in the NAMUS case for the woman you are looking for</li>
                        <li>You now have a table with all potential matches from Namus</li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

