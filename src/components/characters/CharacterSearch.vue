<script setup lang="ts">
import { ref } from 'vue';
import { Toast } from '../../utils/SwalToast';
import RMAlert from '@/components/common/RMAlert.vue';
import CharacterItem from '@/components/characters/CharacterItem.vue';
import type { RickAndMorty, Character, OptionalSearchFilter } from '../../models/character-api';
import { getFilteredCharacter } from '../../api/characters';

const characters = ref<Character[]>([]);
const searchInput = ref<string>('');
const preBuildSearch = ref<OptionalSearchFilter>({ name: '' });
const searchOptions: string[] = ['Rick Sanchez', 'Morty Smith', 'Johnny Depp', 'Beth Smith'];

const handleSearch = async () => {
    const response: RickAndMorty = await getFilteredCharacter({ name: searchInput.value });
    characters.value = response.results;
};

const handleFilter = async () => {
    if (!searchInput.value) {
        Toast.fire({
            title: 'Type something to search first',
            icon: 'error'
        });

        return;
    }

    preBuildSearch.value = { name: searchInput.value, status: 'alive' };
    const response: RickAndMorty = await getFilteredCharacter(preBuildSearch.value);
    characters.value = response.results;
};
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
                                type="email" placeholder="Type to search..." />
                            <datalist id="searchOptions">
                                <option v-for="option in searchOptions" :key="option" :value="option" />
                            </datalist>
                        </div>
                        <div class="col-auto">
                            <button v-if="searchInput.length && !characters.length" class="btn btn-outline-primary btn-lg"
                                type="button" @click="handleSearch">
                                Search
                            </button>
                            <button v-else class="btn btn-outline-danger btn-lg" type="button" @click="characters = []">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row align-items-md-stretch py-5">
            <div class="col-12 col-md-6">
                <div class="h-100 p-5 text-bg-dark rounded-3">
                    <h2>Change the background</h2>
                    <p>
                        Swap the background-color utility and add a `.text-*` color utility to mix up the
                        jumbotron look. Then, mix and match with additional component themes and more.
                    </p>
                    <button class="btn btn-outline-light mb-5" type="button">Example button</button>
                    <r-m-alert text="You are watching episode schema" variant="success" />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                    <r-m-alert text="You are watching characters schema" variant="primary" />
                    <h2 class="pb-3">Characters</h2>
                    <template v-if="characters.length">
                        <character-item v-for="character of characters" :key="character.id" :character="character" />
                    </template>
                    <template v-else>
                        <p>
                            You can also filter by the given name, by the given status (alive, dead or unknown),
                            can even include species, by the given type, by the given gender (female, male,
                            genderless or unknown).
                        </p>
                        <button class="btn btn-outline-secondary" type="button" @click="handleFilter">
                            Filter by name & status
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
