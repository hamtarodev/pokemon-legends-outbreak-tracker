import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PokemonStatsModel } from './../../models/PokemonStatsModel';
import { TrackerModel } from './../../models/TrackerModel';

interface trackerState {
  pokemonHunting: string;
  pokemonHunted: TrackerModel[];
}

const initialState: trackerState = {
  pokemonHunting: '',
  pokemonHunted: []
};

const trackerSlice = createSlice({
  name: 'trackerSlice',
  initialState,
  reducers: {
    initPokemonHunting(state, action: PayloadAction<string>) {
      state.pokemonHunting = action.payload;
    },
    deleteEntry(state, action: PayloadAction<number>) {
      const newState = state.pokemonHunted.filter((hunted, index) => index !== action.payload);
      state.pokemonHunted = newState;
    },
    searchAddHunted(state, action: PayloadAction<PokemonStatsModel>) {
      const matchedIndex = state.pokemonHunted.findIndex(hunted => hunted.pokemonStats.isMatch(
        action.payload.level,
        action.payload.hp,
        action.payload.attack,
        action.payload.defense,
        action.payload.spAttack,
        action.payload.spDefense,
        action.payload.speed
      ));

      const prevCurrentIndex = state.pokemonHunted.findIndex(hunted => hunted.current === true);
      
      if (prevCurrentIndex !== -1) {
        state.pokemonHunted[prevCurrentIndex] = new TrackerModel(
          false,
          state.pokemonHunted[prevCurrentIndex].numberHunted,
          state.pokemonHunted[prevCurrentIndex].pokemonStats
        );
      }

      if (matchedIndex === -1) {
        state.pokemonHunted.push(new TrackerModel(true, 1, action.payload));
      } else {
        state.pokemonHunted[matchedIndex] = new TrackerModel(
          true,
          state.pokemonHunted[matchedIndex].numberHunted + 1,
          action.payload
        );
      }
    }
  }
});

export const {
  initPokemonHunting,
  deleteEntry,
  searchAddHunted
} = trackerSlice.actions;

export default trackerSlice.reducer;