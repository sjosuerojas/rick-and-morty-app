<script setup lang="ts">
import CharacterItem from '@/components/characters/CharacterItem.vue';
import RMLoader from '@/components/common/RMLoader.vue';
import RMError from '@/components/common/RMError.vue';
import useCharacters from '../../hooks/useCharacter';

const { characters, isLoading, isError } = useCharacters();
</script>

<template>
    <r-m-loader v-if="isLoading" :active="isLoading" />
    <r-m-error v-else-if="isError" />

    <div v-else class="row row-cols-1 row-cols-md-2 g-4">
        <character-item v-for="character of characters" :key="character.id" :character="character" />
    </div>
</template>