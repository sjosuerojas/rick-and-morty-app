export type ResultSearch = Character[] | EpisodeType[] | LocationType[];
export interface RickAndMorty {
  info: Info;
  results: ResultSearch;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface LocationType {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

export interface EpisodeType {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown'
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human'
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}

export interface SearchType {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface SearchFilter extends Partial<SearchType> {
  name: string;
}

export type FilterSearchType = 'character' | 'location' | 'episode';
