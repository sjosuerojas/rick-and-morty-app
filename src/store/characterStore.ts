import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Character } from '@/models/character-api';

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref<Character[]>([]);
  const currentPage = ref<number>(1);
  const total = ref<number>(20);

  function setCharacters(_characters: Character[]) {
    characters.value = _characters;
  }

  function setPageCharacter(_currentPage: number) {
    if (currentPage.value === _currentPage || !_currentPage) return;
    currentPage.value = _currentPage;
  }

  return {
    characters,
    currentPage,
    total,

    setCharacters,
    setPageCharacter
  };
});
