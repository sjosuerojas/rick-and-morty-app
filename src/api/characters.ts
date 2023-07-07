import axios from 'axios';
import type { RickAndMorty, Character } from '@/models/character-api';

export const http = axios.create({ baseURL: import.meta.env.VITE_URL_API });

export const getCharacters = async (): Promise<RickAndMorty> => {
  try {
    const { data } = await http.get<RickAndMorty>('/api/character');
    return data;
  } catch (error) {
    throw new Error(`Characters not found: Details >> ${error}`);
  }
};

export const getSingleCharacter = async (id: number): Promise<Character> => {
  try {
    const { data } = await http.get<Character>(`/api/character/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Character ${id} not found: Details >> ${error}`);
  }
};
