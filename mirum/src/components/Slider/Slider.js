import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '13-19',
  },
  {
    value: 33,
    label: '20-29',
  },
  {
    value: 66,
    label: '30-45',
  },
  {
    value: 100,
    label: '45 e acima',
  },
];

export default function DiscreteSlider(props) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Idade
      </Typography>
      <Slider
        defaultValue={props.defaultValue}
        // getAriaValueText={props.getSliderValue}
        onChangeCommitted={props.getSliderValue}
        aria-labelledby="discrete-slider-custom"
        step={0}
        valueLabelDisplay="off"
        marks={marks}
      />
    </div>
  );
}