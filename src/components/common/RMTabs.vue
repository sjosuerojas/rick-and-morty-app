<script setup lang="ts">
import { toRef } from 'vue';
import type { Tab } from '@/models/navbar';

interface Props {
    items: Tab[],
}

const props = defineProps<Props>();
const items = toRef(props, 'items');
</script>


<template>
    <ul class="nav nav-tabs mb-5">
        <li v-for="tab of items" :key="tab.title" class="nav-item">
            <router-link :to="tab.link" class="nav-link" activeClass="active" :class="{ disabled: tab.disabled }">
                {{ tab.title }}
                <span v-if="tab.badge" class="badge text-bg-success">{{ tab.badge }}</span>
            </router-link>
        </li>
    </ul>
</template>