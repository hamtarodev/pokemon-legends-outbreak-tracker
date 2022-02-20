import { Button, Card, CardActions, CardContent, CardHeader, CardTitle, ChevronRightSVGIcon, Grid, TextField, TextIconSpacing } from 'react-md';
import { initPokemonHunting } from '../tracker/trackerSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const ToHuntCard: React.FC = () => {
  const dispatch = useDispatch();

  const [pokemonHunting, setPokemonHunting] = useState('');

  const onPokemonHuntingFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonHunting(event.target.value);
  };

  const onNextOrEnter = () => {
    dispatch(initPokemonHunting(pokemonHunting));
  };

  return (
    <Grid columns={1} padding={10}>
      <Card raiseable>
        <CardHeader>
          <CardTitle>Pokemon with Outbreak</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
            onNextOrEnter();
          }}>
            <TextField
              id='pokemonName'
              type='text'
              placeholder='Pokemon Name'
              value={pokemonHunting}
              onChange={(event) => onPokemonHuntingFieldChange(event)}/>
          </form>
        </CardContent>
        <CardActions>
          <Button theme='primary' onClick={() => onNextOrEnter()}>
            <TextIconSpacing icon={<ChevronRightSVGIcon/>} iconAfter>
              Next
            </TextIconSpacing>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ToHuntCard;