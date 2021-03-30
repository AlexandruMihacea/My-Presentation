import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FirstCard from './FirstCard';
import { useIsFocusVisible } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const[isVisible, updateVisibility] = useState(false);
  const changeDisplay = () => {
    updateVisibility(!isVisible);
  }
  return (
    <div className={classes.root}>
          <Button onClick={changeDisplay} color="primary" >Education</Button>
          <Button color="secondary">Passion</Button>
          <Button color="primary">Other</Button>
    </div>
  );
}
