import './App.css';
import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Home from './Typing';
import Switches from './Slider';
import ContainedButtons from './Meniu';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MyChart from './Chart';
import MediaCard from './Cards';
import Tweet from './Tweek';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




function App() {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <div>
        <Typography variant="h5" align="center">
        <Home />
        </Typography>

        <div className="Meniu">
          {
          show ? <ContainedButtons /> : null
          }
        </div>

        <div className="btnOne">
              <div className={classes.root}>
                  <Button onClick={() => setShow(true)} variant="contained" size="large" color="blue" className={classes.margin} >
                      Alex
                  </Button>
              </div>
        </div>
      </div>

      </div>


  
  );
}

export default App;
