import { useCharacterStore } from '@/store/characterStore';
import { useQuery } from '@tanstack/vue-query';
import { getCharacters } from '../api/characters';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

export default function useCharacters() {
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
}
