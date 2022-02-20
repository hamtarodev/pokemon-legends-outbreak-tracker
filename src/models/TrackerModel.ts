import { PokemonStatsModel } from './PokemonStatsModel';

export class TrackerModel {
  public current: boolean;
  public numberHunted: number;
  public pokemonStats: PokemonStatsModel;

  constructor(current: boolean, numberHunted: number, pokemonStats: PokemonStatsModel) {
    this.current = current;
    this.numberHunted = numberHunted;
    this.pokemonStats = pokemonStats;
  }
}