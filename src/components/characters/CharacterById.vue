<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { getSingleCharacter } from '../../api/characters';
import RMLoader from '@/components/common/RMLoader.vue';

const route = useRoute();

const { isFetching, data: character } = useQuery({
    queryKey: ['character'],
    queryFn: () => getSingleCharacter(+route.params.id)
});
</script>

<template>
    <r-m-loader v-if="isFetching" :active="isFetching" />

    <template v-else>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/characters/list">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ character?.name }}</li>
            </ol>
        </nav>

        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title position-relative">
                            {{ character?.name }}
                            <span :class="{
                                'bg-danger': character?.status === 'Dead',
                                'bg-success': character?.status === 'Alive',
                                'bg-secondary': character?.status === 'unknown'
                            }" class="badge p-2 mx-2 rounded-circle">
                                <span class="visually-hidden">Life check</span>
                            </span>
                        </h5>
                        <p class="card-text">{{ character?.species }} | {{ character?.gender }}</p>
                        <p class="card-text">
                            <small class="text-body-secondary">
                                {{ new Date(String(character?.created)) }}
                            </small>
                        </p>
                    </div>
                    <img :src="character?.image" class="card-img-top" :alt="character?.name" />
                </div>
            </div>
        </div>
    </template>
</template>
