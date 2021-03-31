import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.first}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.second}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.third}
        </Typography>
        <Typography variant="h5" component="h2">
         {props.four}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.five}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.six}
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          {''}
        </Typography>
       
      </CardContent>
      
    
    </Card>
  );
}
