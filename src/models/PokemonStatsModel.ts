export class PokemonStatsModel {
  public level: number;
  public hp: number;
  public attack: number;
  public defense: number;
  public spAttack: number;
  public spDefense: number;
  public speed: number;

  constructor (level: number, hp: number, attack: number, defense: number, spAttack: number, spDefense: number, speed: number) {
    this.level = level;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spAttack = spAttack;
    this.spDefense = spDefense;
    this.speed = speed;
  }

  public isMatch(level: number, hp: number, attack: number, defense: number, spAttack: number, spDefense: number, speed: number) {
    if (this.level === level 
    && this.hp === hp 
    && this.attack === attack 
    && this.defense === defense 
    && this.spAttack === spAttack 
    && this.spDefense === spDefense 
    && this.speed === speed) {
      return true;
    }
    return false;
  }
}