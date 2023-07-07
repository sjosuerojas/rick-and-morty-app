<script setup lang="ts">
import { toRef } from 'vue';

interface Props {
    active: boolean;
}

const props = defineProps<Props>();
const active = toRef(props, 'active');
</script>

<template>
    <div v-if="active" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 6rem; height: 6rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
