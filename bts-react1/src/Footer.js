import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Footer(props) {
  
    return (
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you!! 
        </Typography>
      </React.Fragment>
    );
  }