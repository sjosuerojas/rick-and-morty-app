import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Character } from '@/models/character-api';

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref<Character[]>([]);
  const currentCharacter = ref<Character>();
  const latestCharacters = ref<Character[]>([]);
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);

  function setLatestCharacters(_characters: Character[]) {
    latestCharacters.value = _characters;
  }

  function setCurrentCharacter(_character: Character) {
    currentCharacter.value = _character;
  }

  function setCharacters(_characters: Character[]) {
    characters.value = _characters;
  }

  function setPageCharacter(_currentPage: number) {
    if (currentPage.value === _currentPage || !_currentPage) return;
    currentPage.value = _currentPage;
  }

  return {
    characters,
    latestCharacters,
    currentCharacter,
    currentPage,
    totalPages,
    setLatestCharacters,
    setCurrentCharacter,
    setCharacters,
    setPageCharacter
  };
});
