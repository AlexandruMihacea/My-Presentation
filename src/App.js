import './App.css';
import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Home from './Typing';
import Switches from './Slider';
// import ContainedButtons from './Meniu';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedCard from './FirstCard';
import ControlledCarousel from './SecondCard'




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




function App() {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const changeShow = () => {
    setShow(!show);
  }
  const changeShowTwo = () => {
    setShowTwo(!showTwo);
  }
  const classes = useStyles();

  return (
    <div className="App">
      
        <Typography variant="h5" align="center">
        <Home />
        </Typography>

        <div className="Meniu">
          {
          show ? <OutlinedCard /> : null
          }
       </div>
      

        <div className="MeniuTwo">
          {
          showTwo ? <ControlledCarousel /> : null
          }
        </div>

        
        <div className="btnOne">
              <div className={classes.root}>
                  <Button onClick={changeShow} variant="contained" size="large" color="blue" className={classes.margin} >
                      Studies
                  </Button>
              </div>
              <div className={classes.root}>
                        <Button onClick={changeShowTwo} variant="contained" size="large" color="blue" className={classes.margin} >
                            Hobies
                        </Button>
              </div>
              <div className={classes.root}>
                  <Button onClick={() => setShow(true)} variant="contained" size="large" color="blue" className={classes.margin} >
                      Others
                  </Button>
              </div>
        </div>


      

    </div>


  
  );
}

export default App;
