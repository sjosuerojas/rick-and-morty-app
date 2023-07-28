<script setup lang="ts">
import { toRef } from 'vue';
import type { Character } from '@/models/character-api';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{ character: Character }>();
const character = toRef(props, 'character');
</script>

<template>
    <div class="col">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="character.image" class="w-100 rounded-start" :alt="character.name" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">

                            {{ character.name }}
                        </h5>
                        <p class="card-text">
                            <span :class="{
                                'bg-danger': character.status === 'Dead',
                                'bg-success': character.status === 'Alive',
                                'bg-secondary': character.status === 'unknown'
                            }" class="badge p-2 mx-2 rounded-circle">
                                <span class="visually-hidden">Life check</span>
                            </span>
                            {{ character.status }} - {{ character.species }}
                        </p>
                        <p class="card-text ">
                            <small class="text-body-secondary">
                                Last known location: {{ character.location.name }}
                            </small>
                        </p>
                        <a class="btn btn-outline-secondary btn-sm" @click="router.push(`id/${character.id}`)">
                            View details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
