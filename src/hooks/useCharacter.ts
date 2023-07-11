import { useCharacterStore } from '@/store/characterStore';
import { useQuery } from '@tanstack/vue-query';
import { getCharacters } from '../api/characters';
import { storeToRefs } from 'pinia';
import { computed, watchEffect } from 'vue';

export default function useCharacters() {
  const store = useCharacterStore();
  const { characters } = storeToRefs(store);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['character'],
    queryFn: getCharacters
  });

  watchEffect(() => {
    if (data.value?.results) {
      store.setCharacters(data.value?.results);
    }
  });

  return {
    characters,
    isLoading,
    isError,

    count: computed(() => characters.value.length)
  };
}
