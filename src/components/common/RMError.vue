<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div class="p-5 my-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Oops!</h1>
            <p class="col-md-8 fs-4">We can't seem to find the resource your're looking for.</p>
            <p class="text-muted">404 Not found</p>
            <button class="btn btn-outline-secondary" type="button" @click="router.push({ name: 'home' })">Home</button>
        </div>
    </div>
</template>