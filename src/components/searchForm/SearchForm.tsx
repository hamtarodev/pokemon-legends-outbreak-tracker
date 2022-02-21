import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Grid, GridCell, SearchSVGIcon, TextField, TextIconSpacing, Typography } from 'react-md';
import { PokemonStatsModel } from './../../models/PokemonStatsModel';
import { StatsInput } from './../../interfaces/StatsInput';
import { searchAddHunted } from '../tracker/trackerSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ visible: false, modal: false });
  const hide = (): void => {
    setState((prevState) => ({ ...prevState, visible: false }));
  };
  const show = (): void => {
    setState({
      visible: true,
      modal: true,
    });
  };

  const { visible, modal } = state;

  const [level, setLevel] = useState(0);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [spAttack, setSpAttack] = useState(0);
  const [spDefense, setSpDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  const statsInputs: StatsInput[] = [
    { id: 'input-text-level', label: 'Level', value: level, onChange: (e) => setLevel(parseInt(e.target.value))},
    { id: 'input-text-hp', label: 'HP', value: hp, onChange: (e) => setHp(parseInt(e.target.value))},
    { id: 'input-text-attack', label: 'Attack', value: attack, onChange: (e) => setAttack(parseInt(e.target.value))},
    { id: 'input-text-defense', label: 'Defense', value: defense, onChange: (e) => setDefense(parseInt(e.target.value))},
    { id: 'input-text-spAttack', label: 'Sp. Attack', value: spAttack, onChange: (e) => setSpAttack(parseInt(e.target.value))},
    { id: 'input-text-spDefense', label: 'Sp. Defense', value: spDefense, onChange: (e) => setSpDefense(parseInt(e.target.value))},
    { id: 'input-text-speed', label: 'Speed', value: speed, onChange: (e) => setSpeed(parseInt(e.target.value))},
  ];

  const gridCells = statsInputs.map(input => {
    return (
      <GridCell colSpan={3} key={`gridcell-${input.id}`}>
        <TextField
          key={`input-${input.id}`}
          id={input.id}
          type='number'
          label={input.label}
          value={input.value.toString()}
          onChange={(e) => input.onChange(e)}
          onKeyPress={(e) => e.code === 'Enter' ? onSearchAdd() : null}
        />
      </GridCell>
    );
  });

  const onSearchAdd = () => {
    const zeroInputs = [level, hp, attack, defense, spAttack, spDefense, speed].filter(stats => (stats <= 0 || stats === null || isNaN(stats)));
    console.log(zeroInputs);
    if (zeroInputs.length > 0) {
      show();
    } else {
      dispatch(searchAddHunted(
        new PokemonStatsModel(level, hp, attack, defense, spAttack, spDefense, speed)
      ));
    }
  };

  return (
    <Grid columns={1}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          onSearchAdd();
        }}>
        <fieldset>
          <legend>Search Pokemon by Stats</legend>
          <Grid>
            {gridCells}
          </Grid>
          <Grid columns={1}>
            <GridCell colSpan={4} colEnd={12}>
              <Button themeType='outline' theme='primary' onClick={() => onSearchAdd()}>
                <TextIconSpacing icon={<SearchSVGIcon/>} iconAfter>
                  Search / Add
                </TextIconSpacing>
              </Button>
            </GridCell>
          </Grid>
        </fieldset>
      </form>
      <Dialog
        id='form-alert'
        visible={visible}
        onRequestClose={hide}
        modal={modal}
        aria-labelledby="dialog-title"
      >
        <DialogHeader>
          <DialogTitle>Invalid Stats</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <Typography>Pokemon Status Can Not Be 0</Typography>
        </DialogContent>
        <DialogFooter>
          <Button id="dialog-close" onClick={hide}>
              Close
            </Button>
        </DialogFooter>
      </Dialog>
    </Grid>
  );
};

export default SearchForm;