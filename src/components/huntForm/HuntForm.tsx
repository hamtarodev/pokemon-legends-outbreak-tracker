import { Card, CardContent, CardHeader, CardSubtitle, CardTitle, Grid } from 'react-md';
import { Rootstate } from '../../store/store';
import { useSelector } from 'react-redux';
import HuntTable from './../huntTable/HuntTable';
import React from 'react';
import SearchForm from './../searchForm/SearchForm';

const HuntForm: React.FC = () => {
  const tracker = useSelector((state: Rootstate) => state.tracker);

  return (
    <Grid columns={1}>
      <Card>
        <CardHeader>
          <CardTitle>
            {tracker.pokemonHunting}
          </CardTitle>
          <CardSubtitle>Current Outbreak</CardSubtitle>
        </CardHeader>
        <CardContent>
          <SearchForm/>
          <HuntTable/>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HuntForm;