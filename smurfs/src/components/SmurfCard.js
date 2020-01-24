import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
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


const SmurfCard = ({smurf}) => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
  // <div>
  // <p>Name: {smurf.name}</p>
  // <p>Age: {smurf.age}</p>
  // <p>Height: {smurf.height}</p>
  // </div>
  <div className='smurfcard'>
    <Card className={classes.card}>
    <CardContent>

      <Typography variant="h5" component="h2">
      Name: {smurf.name}
      </Typography>

      <Typography variant="h5" component="h2">
      Age: {smurf.age}
      </Typography>

      <Typography variant="h5" component="h2">
      Height: {smurf.height}
      </Typography>

    </CardContent>
    </Card>
    </div>
  )
};

export default SmurfCard;