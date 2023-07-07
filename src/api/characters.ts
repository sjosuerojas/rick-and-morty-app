import axios from 'axios';
import type { RickAndMorty, Character } from '@/models/character-api';

export const http = axios.create({ baseURL: import.meta.env.VITE_URL_API });

export const getCharacters = async (): Promise<RickAndMorty> => {
  const { data } = await http.get<RickAndMorty>('/api/character');
  return data;
};

export const getSingleCharacter = async (id: number): Promise<Character> => {
  const { data } = await http.get<Character>(`/api/character/${id}`);
  return data;
};
