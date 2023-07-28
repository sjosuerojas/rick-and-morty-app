<script setup lang="ts">
import CharacterItem from '@/components/characters/CharacterItem.vue';
import RMLoader from '@/components/common/RMLoader.vue';
import RMError from '@/components/common/RMError.vue';
import RMPagination from '@/components/common/RMPagination.vue';
import useCharacters from '../../hooks/useCharacter';

const { characters, isLoading, isError, currentPage, totalPages, getPage } = useCharacters();
</script>

<template>
    <r-m-loader v-if="isLoading" :active="isLoading" />
    <r-m-error v-else-if="isError" />

    <template v-else>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <character-item v-for="character of characters" :key="character.id" :character="character" />
        </div>
        <r-m-pagination :total-pages="totalPages" :current-page="currentPage" @on-change-page="getPage" />
    </template>
</template>
