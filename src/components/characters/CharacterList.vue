<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getCharacters } from '../../api/characters';
import CharacterItem from '@/components/characters/CharacterItem.vue';
import RMLoader from '@/components/common/RMLoader.vue';

const { isLoading, data } = useQuery({
    queryKey: ['character'],
    queryFn: getCharacters,
})
</script>

<template>
    <r-m-loader v-if="isLoading" :active="isLoading" />

    <div v-else class="row">
        <character-item v-for="item of data?.results" :key="item.id" :character="item" />
    </div>
</template>