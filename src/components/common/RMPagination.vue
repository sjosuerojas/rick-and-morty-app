<script setup lang="ts">
import { toRef, ref, watch } from 'vue';

interface Props {
    totalPages: number;
    currentPage: number;
}

interface Emit {
    (e: 'onChangePage', page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emit>();

const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');

const pages = ref<number[]>([]);
watch(totalPages, () => {
    pages.value = [...new Array(totalPages.value)].map((_, idx) => idx + 1);
}, { immediate: true });
</script>

<template>
    <nav class="my-5" aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="emits('onChangePage', currentPage - 1)">Previous</button>
            </li>

            <li v-for="page in pages" :key="page" class="page-item">
                <button class="page-link" :class="{ active: currentPage === page }" @click="emits('onChangePage', page)">
                    {{ page }}
                </button>
            </li>

            <li class="page-item">
                <button class="page-link" :class="{ active: currentPage > totalPages }"
                    @click="emits('onChangePage', currentPage + 1)">Next</button>
            </li>
        </ul>
    </nav>
</template>
