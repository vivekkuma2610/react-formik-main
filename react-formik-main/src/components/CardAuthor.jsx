import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardAuthor({author,deleteButton,editButton}) {
    return (
        <Card variant="outlined" sx={{backgroundColor:"#E2BB8C"}}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Name: {author.name}
            </Typography>
            <Typography variant="h5" component="div">
              DOB: {author.dob}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Biography: {author.biography}
            </Typography>
          </CardContent>
          <CardActions>
         {editButton}
          {deleteButton}      
          </CardActions>
        </React.Fragment>
        </Card>
      )
}

export default CardAuthor