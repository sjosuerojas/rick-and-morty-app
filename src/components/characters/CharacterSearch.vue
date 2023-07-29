<script setup lang="ts">
import { ref } from 'vue';
import CharactersResult from '@/components/characters/CharactersResult.vue';

const searchOptions: string[] = [
    'Rick Sanchez',
    'Morty Smith',
    'Johnny Depp',
    'Beth Smith',
];

const searchInput = ref<string>('');
</script>

<template>
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center text-white">
                    <h1 class="mb-5">Search for characters, episodes, location from the API!</h1>
                    <div class="row">
                        <div class="col">
                            <input v-model="searchInput" class="form-control form-control-lg" list="searchOptions"
                                type="email" placeholder="Type to search...">
                            <datalist id="searchOptions">
                                <option v-for="(option) in searchOptions" :key="option" :value="option" />
                            </datalist>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-primary btn-lg" type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <characters-result />
    </div>
</template>