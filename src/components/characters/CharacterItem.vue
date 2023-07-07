<script setup lang="ts">
import { toRef } from 'vue';
import type { Character } from '@/models/character-api';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{ character: Character }>();
const character = toRef(props, 'character');
</script>

<template>
    <div class="col-lg-4">
        <figure>
            <img :src="character.image" class="rounded-circle" :alt="character.name" />
            <figcaption>{{ character.gender }}</figcaption>
        </figure>
        <h2 class="fw-normal">{{ character.name }}</h2>
        <p class="d-flex justify-content-center align-items-center text-capitalize">
            <span v-if="character.status === 'Alive'" class="badge p-2 mx-2 rounded-circle text-bg-success">
                <span class="visually-hidden">Alive</span>
            </span>
            <span v-if="character.status === 'Dead'" class="badge p-2 mx-2 rounded-circle text-bg-danger">
                <span class="visually-hidden">Dead</span>
            </span>
            <span v-if="character.status === 'unknown'" class="badge p-2 mx-2 rounded-circle text-bg-secondary">
                <span class="visually-hidden">Unknown</span>
            </span>
            {{ character.status }}
        </p>
        <p>
            <a class="btn btn-primary" @click="router.push(`id/${character.id}`)"> View details </a>
        </p>
    </div>
</template>
