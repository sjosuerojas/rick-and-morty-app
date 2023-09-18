<script setup lang="ts">
import { toRef } from 'vue';
import type { EpisodeType } from '@/models/character-api';

const props = defineProps<{ episode: EpisodeType }>();
const episode = toRef(props, 'episode');

const baseUrl = import.meta.env.VITE_URL_API;
const locationUrlToImage = (path: string) => {
    const splittedPath = path.split('/');
    const characterId = splittedPath[splittedPath.length - 1];
    return `${baseUrl}/api/character/avatar/${characterId}.jpeg`;
}
</script>

<template>
    <div class="col">
        <div class="card mb-3">
            <div class="card-header">
                {{ episode.name }}
            </div>
            <div class="card-body d-flex justify-content-center">
                <p class="card-text mb-0 px-2">
                    <span class="badge bg-success p-2 mx-2 rounded-circle">
                        <span class="visually-hidden">Life check</span>
                    </span>
                    Air Date: {{ episode.air_date }} -
                </p>
                <p class="card-text mb-0 px-2">Episode: {{ episode.episode }}</p>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 mb-4">
                <div v-for="character of  episode.characters " :key="character" class="col">
                    <div class="card">
                        <img :src="locationUrlToImage(character)" class="card-img-top" :alt="episode.name">
                    </div>
                </div>
            </div>
            <a :href="episode.url" target="_blank" class="btn btn-primary mb-4">More details</a>
        </div>
    </div>
</template>
