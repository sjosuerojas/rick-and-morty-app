<script setup lang="ts">
import { toRef } from 'vue';
import type { LocationType } from '@/models/character-api';

const props = defineProps<{ location: LocationType }>();
const locations = toRef(props, 'location');

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
                {{ locations.name }}
            </div>
            <div class="card-body d-flex justify-content-center">
                <p class="card-text mb-0 px-2">Type: {{ locations.type }} -</p>
                <p class="card-text mb-0 px-2">Dimension: {{ locations.dimension }}</p>
            </div>
            <div class="row row-cols-1 row-cols-md-6 g-4 mb-4">
                <div v-for="location of  locations.residents " :key="location" class="col">
                    <div class="card">
                        <img :src="locationUrlToImage(location)" class="card-img-top" :alt="locations.name">
                    </div>
                </div>
            </div>
            <a :href="locations.url" target="_blank" class="btn btn-primary mb-4">More details</a>
        </div>
    </div>
</template>
