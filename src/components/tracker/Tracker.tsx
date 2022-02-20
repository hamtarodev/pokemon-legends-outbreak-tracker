import { Grid, GridCell } from 'react-md';
import { Rootstate } from '../../store/store';
import { useSelector } from 'react-redux';
import HuntForm from '../huntForm/HuntForm';
import React from 'react';
import ToHuntCard from './../toHuntCard/ToHuntCard';

const Tracker: React.FC = () => {
  const tracker = useSelector((state: Rootstate) => state.tracker);
  
  return (
    <Grid padding={0}>
      <GridCell colSpan={1}></GridCell>
      <GridCell colSpan={10}>
        {(tracker.pokemonHunting === '' || tracker.pokemonHunting === null)
          ? <ToHuntCard/>
          : <HuntForm/>
        }
      </GridCell>
      <GridCell colSpan={1}></GridCell>
    </Grid>
  );
};

export default Tracker;