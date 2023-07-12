<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import type { Tab } from '@/models/navbar';
import RMTabs from '@/components/common/RMTabs.vue';

const route = useRoute();
const invalidRoute = computed(() => route.name !== 'characterId');

const items: Tab[] = [
    {
        title: 'Characters List',
        active: true,
        disabled: false,
        link: '/characters/list',
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
    <h1>List of characters</h1>
    <div class="py-5">
        <r-m-tabs v-if="invalidRoute" :items="items" />
        <router-view />
    </div>
</template>
