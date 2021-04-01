import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
    const classes = useStyles();
    const [repos, setRepos] = useState([]);
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [link, setLink] = useState('');
    const [follow, setFollow] = useState('');
   
  

    useEffect( () => {
        fetch('https://api.github.com/users/AlexandruMihacea')
            .then(respose => respose.json())
            .then(data => setData(data));
    }, []);

    const setData = ({ name, login, public_repos, avatar_url,html_url, followers}) => {
        setName(name);
        setUsername(login);
        setAvatar(avatar_url);
        setRepos(public_repos);
        setLink(html_url);
        setFollow(followers);
    };


  return (
    <div className="thirdCard">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Number of Projects: {repos}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Following: {follow}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={link}size="small" color="primary">
          My GitHub
        </Button>
      </CardActions>
      </Card>
      </div>
  );
}
