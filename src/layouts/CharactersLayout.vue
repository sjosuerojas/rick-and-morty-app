<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import type { Tab } from '@/models/navbar';
import RMTabs from '@/components/common/RMTabs.vue';
import useCharacters from '../hooks/useCharacter';

const route = useRoute();
const invalidRoute = computed(() => route.name !== 'characterId');
const { count } = useCharacters();

const items: Tab[] = [
    {
        title: 'Characters List',
        active: true,
        disabled: false,
        link: '/characters/list',
        badge: count.value
    },
    {
        title: 'Characters Search',
        active: false,
        disabled: false,
        link: '/characters/search'
    }
];
</script>

<template>
    <h1>Rick and Morty</h1>
    <div class="pt-5">
        <r-m-tabs v-if="invalidRoute" :items="items" />
        <router-view />
    </div>
</template>
