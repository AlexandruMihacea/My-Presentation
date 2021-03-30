import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Button color="primary" href="#First">Education</Button>
          <Button color="secondary">Passion</Button>
          <Button color="primary">Other</Button>
    </div>
  );
}
