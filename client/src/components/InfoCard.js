import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Grid } from '@mui/material';
import "./infoCard.css"

const InfoCard = ({ id, type, content, onDelete }) => {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 345, margin: '10px' }} variant="outlined">
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Alert
              severity={type}
              sx={{
                fontSize: '0.875rem',
                padding: '8px 12px', // Adjust the padding here
                '& .MuiAlert-icon': {
                  fontSize: '2rem', // Adjust the icon size here
                  minWidth: 'auto',
                  width: 'auto !important',
                  marginRight: '8px',
                },
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                {content}
              </Typography>
            </Alert>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: '8px', width: 'auto' }}>
        <Button size="small" onClick={() => onDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default InfoCard;
