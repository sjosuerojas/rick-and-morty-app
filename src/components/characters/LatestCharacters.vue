<script setup lang="ts">
import PlaceholderCard from '@/components/shared/PlaceholderCard.vue';
import { useLatestCharacters } from '../../hooks/useCharacters';

const { latestCharacters: characters, isFetching } = useLatestCharacters();
</script>

<template>
    <placeholder-card v-if="isFetching" />

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