import './App.css';
import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Home from './Typing';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedCard from './FirstCard';
import ImgMediaCard from './SecondCard'
import MediaCard from './ThirdCard';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grafic from './Grafic';
import EqualizerIcon from '@material-ui/icons/Equalizer';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))


function App() {

  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const changeShow = () => {
    setShow(!show);
  }

  const changeShowTwo = () => {
    setShowTwo(!showTwo);
  }

  const changeShowThree = () => {
    setShowThree(!showThree);
  }

  const changeShowFour = () => {
    setShowFour(!showFour);
  }

  const classes = useStyles();

  return (
    
    <div className="App">
        <div className="type">
          <Typography variant="h5" align="center">
          <Home />
          </Typography>
      </div>
      
        

        

        <div className="ModalOne">
          {
          show ? <OutlinedCard first="Highschool" second="Liceul Teoretic Traian" third="First University" four="Universitatea Maritima Constanta(Electromecanica Navala)"
          five="Second University" six="Student Academia De Studii Economice(Informatica Economica)"/> : null
          }
       </div>
      

        <div className="ModalTwo">
          {
          showTwo ? <> <ImgMediaCard /> </>: null
          }
        </div>
      

        <div className="ModalThree">
          {
          showThree ? <MediaCard /> : null
          }
      </div>
      

      <div>
        {
          showFour ? <Grafic /> : null
        }
      </div>
      
 
        
        <div className="btn">
              <div className={classes.root}>
                        <Button onClick={changeShow} variant="contained" size="large" color="blue" className={classes.margin} >
            Studies
            <MenuBookRoundedIcon></MenuBookRoundedIcon>
                        </Button>
              </div>
              <div className={classes.root}>
                        <Button onClick={changeShowTwo} variant="contained" size="large" color="blue" className={classes.margin} >
              Hobbies
              <MusicNoteIcon></MusicNoteIcon>
                        </Button>
              </div>
              <div className={classes.root}>
                        <Button onClick={changeShowThree} variant="contained" size="large" color="blue" className={classes.margin} >
              GitHub
              <GitHubIcon></GitHubIcon>
                        </Button>
          </div>
        
          <div className={classes.root}>
                        <Button onClick={changeShowFour} variant="contained" size="large" color="blue" className={classes.margin} >
              Skills
              <EqualizerIcon></EqualizerIcon>
                        </Button>
          </div>
        </div>
      

      
      
        
      

    </div>


  
  );
}

export default App;
