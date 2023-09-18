import { useCharacterStore } from '@/store/characterStore';
import { useQuery } from '@tanstack/vue-query';
import { getSingleCharacter } from '../api/characters';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

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
