import { Button, DeleteSVGIcon, Grid, Table, TableBody, TableCell, TableContainer, TableHeader, TableRow, TextIconSpacing } from 'react-md';
import { Rootstate } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { deleteEntry } from '../tracker/trackerSlice';
import styles from './tableStyle.module.scss';

const HuntTable: React.FC = () => {
  const dispatch = useDispatch();

  const tracker = useSelector((state: Rootstate) => state.tracker);

  const tableHeaders = ['Total Hunted', 'Level', 'HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed', ''].map((label) => {
    return (
      <TableCell>{label}</TableCell>
    );
  });

  return (
    <Grid columns={1}>
      <TableContainer className={styles.tableContainer}>
        <Table fullWidth>
          <TableHeader sticky>
            <TableRow>
              {tableHeaders}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(tracker.pokemonHunted, (tracked, index) => (
               <TableRow key={`hunted-${index}`} className={tracked.current ? styles.highlighted : ''}>
                <TableCell>{tracked.numberHunted}</TableCell>
                <TableCell>{tracked.pokemonStats.level}</TableCell>
                <TableCell>{tracked.pokemonStats.hp}</TableCell>
                <TableCell>{tracked.pokemonStats.attack}</TableCell>
                <TableCell>{tracked.pokemonStats.defense}</TableCell>
                <TableCell>{tracked.pokemonStats.spAttack}</TableCell>
                <TableCell>{tracked.pokemonStats.spDefense}</TableCell>
                <TableCell>{tracked.pokemonStats.speed}</TableCell>
                <TableCell>
                  <Button onClick={() => dispatch(deleteEntry(index))}>
                    <TextIconSpacing icon={<DeleteSVGIcon/>}></TextIconSpacing>
                  </Button>
                </TableCell>
              </TableRow>
            )).reverse()}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default HuntTable;