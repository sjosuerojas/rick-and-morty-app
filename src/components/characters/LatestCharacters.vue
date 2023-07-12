<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { getMultipleCharacters } from '../../api/characters';

const { data: characters, isFetching } = useQuery({
    queryKey: ['character'],
    queryFn: () => getMultipleCharacters("2,4"),
    retry: false
});
</script>

<template>
    <div v-if="isFetching" class="row mb-2">
        <div v-for="(_, idx) in 2" :key="idx" class="col-md-6" aria-hidden="true">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 placeholder-glow text-primary-emphasis">
                        <span class="placeholder col-3"></span>
                    </strong>
                    <h3 class="mb-0">
                        <span class="placeholder col-8"></span>
                    </h3>
                    <p class="card-text placeholder-glow mb-auto">
                        <span class="placeholder col-12"></span>
                    </p>
                    <a href="#" class="btn btn-primary disabled placeholder col-6"></a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="row mb-2">
        <div v-for="character of characters" :key="character.id" class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2" :class="{
                        'text-primary-emphasis': character.gender === 'Male',
                        'text-success-emphasis': character.gender === 'Female',
                        'text-secondary-emphasis': character.gender === 'unknown'
                    }">
                        {{ character.gender }}
                    </strong>
                    <h3 class="mb-0">{{ character.name }}</h3>
                    <div class="mb-1 text-body-secondary">{{ character.status }}</div>
                    <p class="card-text mb-auto">
                        {{ character.species }}
                    </p>
                    <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg class="bi">
                            <use xlink:href="#chevron-right" />
                        </svg>
                    </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img :src="character.image" class="img-fluid rounded-start" :alt="character.name" />
                </div>
            </div>
        </div>
    </div>
</template>