import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Profile from './Profile';


const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      display: 'block',

   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));

const AccountSettings = ({ profile, settingProfile }) => {


   const classes = useStyles();

   return (
      <Accordion>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
         >
            <Typography className={classes.heading}>Account Settings</Typography>
         </AccordionSummary>
         <AccordionDetails className={classes.root}>

            <Profile profile={profile} settingProfile={settingProfile} />
         </AccordionDetails>
      </Accordion>
   )
}
export default AccountSettings