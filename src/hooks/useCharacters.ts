import { useCharacterStore } from '@/store/characterStore';
import { useQuery } from '@tanstack/vue-query';
import { getCharacters, getSingleCharacter } from '../api/characters';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

export const useCharacters = () => {
  const store = useCharacterStore();
  const { characters, currentPage, totalPages } = storeToRefs(store);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['character/?page=', currentPage],
    queryFn: () => getCharacters(currentPage.value)
  });

  watchEffect(() => {
    if (data.value?.results) store.setCharacters(data.value?.results);
  });

  return {
    characters,
    isLoading,
    isError,
    currentPage,
    totalPages,
    getPage: store.setPageCharacter
  };
};

export const useCurrentCharacter = (characterId: number) => {
  const store = useCharacterStore();
  const { currentCharacter } = storeToRefs(store);

  const { data, isFetching, isError } = useQuery({
    queryKey: ['character'],
    queryFn: () => getSingleCharacter(characterId),
    retry: false
  });

  watchEffect(() => {
    if (data.value) store.setCurrentCharacter(data.value);
  });

  return {
    currentCharacter,
    isFetching,
    isError
  };
};
