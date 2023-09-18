import { useCharacterStore } from '@/store/characterStore';
import { useQuery } from '@tanstack/vue-query';
import { getMultipleCharacters } from '../api/characters';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

export const useLatestCharacters = () => {
  const store = useCharacterStore();
  const { latestCharacters } = storeToRefs(store);

  const { data, isFetching, isError } = useQuery({
    queryKey: ['character'],
    queryFn: () => getMultipleCharacters('2,4'),
    retry: false
  });

  watchEffect(() => {
    if (data.value) store.setLatestCharacters(data.value);
  });

  return {
    latestCharacters,
    isFetching,
    isError
  };
};
