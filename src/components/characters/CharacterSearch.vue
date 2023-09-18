<script setup lang="ts">
import { ref } from 'vue';
import RMAlert from '@/components/common/RMAlert.vue';
import CharacterItem from '@/components/characters/CharacterItem.vue';
import CharacterLocation from '@/components/characters/CharacterLocation.vue';
import CharacterEpisode from '@/components/characters/CharacterEpisode.vue';
import type {
    RickAndMorty,
    ResultSearch,
    Character,
    FilterSearchType,
    LocationType,
    EpisodeType
} from '../../models/character-api';
import { getFilteredCharacter } from '../../api/characters';

const searchInput = ref<string>('');
const result = ref<ResultSearch>([]);
const searchByFilter = ref<FilterSearchType>('character');
const searchOptions: string[] = [
    'Rick Sanchez',
    'Citadel of Ricks',
    'Johnny Depp',
    'Close Rick-counters of the Rick Kind'
];

const selectOption = (currentOption: FilterSearchType) => {
    result.value.length = 0;
    searchByFilter.value = currentOption;
};

const handleSearch = async () => {
    const response: RickAndMorty = await getFilteredCharacter(searchByFilter.value, {
        name: searchInput.value
    });
    result.value = response.results;
};
</script>

<template>
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center">
                    <h1 class="mb-5">Search for characters, episodes, location from the API!</h1>
                    <div class="row">
                        <div class="col">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Search by [{{ searchByFilter }}]
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" @click="selectOption('character')">Character</a></li>
                                    <li><a class="dropdown-item" @click="selectOption('location')">Location</a></li>
                                    <li><a class="dropdown-item" @click="selectOption('episode')">Episode </a></li>
                                </ul>
                                <input v-model="searchInput" class="form-control form-control-lg" list="searchOptions"
                                    type="text" placeholder="Type to search..." />
                                <datalist id="searchOptions">
                                    <option v-for="option in searchOptions" :key="option" :value="option" />
                                </datalist>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-primary btn-lg" type="button" @click="handleSearch">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center align-items-center py-5">
            <div class="col-8">
                <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                    <r-m-alert :text="`You are watching ${searchByFilter} schema`" variant="primary" />
                    <h2 class="pb-3 pt-4 text-capitalize">Results</h2>
                    <template v-if="result.length">
                        <template v-if="searchByFilter === 'character'">
                            <character-item v-for="character of (result as Character[])" :key="character.id"
                                :character="character" />
                        </template>
                        <template v-if="searchByFilter === 'episode'">
                            <character-episode v-for="episode of (result as EpisodeType[])" :key="episode.id"
                                :episode="episode" />
                        </template>
                        <template v-if="searchByFilter === 'location'">
                            <character-location v-for="location of (result as LocationType[])" :key="location.id"
                                :location="location" />
                        </template>
                    </template>
                    <template v-else>
                        <p>
                            You can also filter by the given name, by the given status (alive, dead or unknown),
                            can even include species, by the given type, by the given gender (female, male,
                            genderless or unknown).
                        </p>
                        <button class="btn btn-outline-secondary" type="button">Filter by name & status</button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
